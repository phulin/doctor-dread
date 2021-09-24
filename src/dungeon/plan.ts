import { myClass, print } from "kolmafia";
import {
  DreadBanish,
  dreadBanished,
  DreadChoice,
  DreadElementId,
  dreadElements,
  DreadMonsterId,
  DreadNoncombat,
  dreadNoncombatsUsed,
  DreadSubnoncombat,
  dreadZone,
  DreadZoneId,
  dreadZones,
  isDreadElementId,
  monsterPair,
} from "./raidlog";

export function banishesToLimit(
  targetZone: DreadZoneId,
  monster: DreadMonsterId | "banish no monster",
  element: DreadElementId | "banish all elements" | "banish no element"
): DreadBanish[] {
  const monstersNeededBanished = monster === "banish no monster" ? [] : [monsterPair(monster)];
  const elementsNeededBanished =
    element === "banish all elements"
      ? [...dreadElements]
      : element === "banish no element"
      ? []
      : dreadElements.filter((e) => e !== element);
  const thingsNeededBanished = [...monstersNeededBanished, ...elementsNeededBanished];

  const result: DreadBanish[] = [];
  for (const noncombatZone of dreadZones) {
    for (const noncombat of noncombatZone.noncombats) {
      for (const [subIndex, subnoncombat] of noncombat.choices) {
        for (const [choiceIndex, choice] of subnoncombat.choices) {
          if (!choice.banish) continue;

          const [banishZone, impact] = choice.banish;
          // print(`zone ${targetZone} === ${banishZone} && thingsToBanish includes ${impact}`);
          if (targetZone === banishZone && thingsNeededBanished.includes(impact)) {
            // print("yes");
            result.push([noncombat, subIndex, choiceIndex, ...choice.banish]);
          } // else print("no");
          // print();
        }
      }
    }
  }

  return result;
}

export function categorizeBanishes(
  targetZone: DreadZoneId,
  monster: DreadMonsterId | "banish no monster",
  element: DreadElementId | "banish all elements" | "banish no element"
): {
  completedBanishes: DreadBanish[];
  usedBanishes: DreadBanish[];
  cantBanishes: [Class[], DreadBanish][];
  goodBanishes: DreadBanish[];
} {
  const banished = dreadBanished();
  const banishedInZone = banished.filter((info) => info.targetZone === targetZone);

  const noncombatsUsed = new Set(dreadNoncombatsUsed());
  const desiredBanishes = banishesToLimit(targetZone, monster, element);

  const completedBanishes: DreadBanish[] = [];
  const usedBanishes: DreadBanish[] = [];
  const cantBanishes: [Class[], DreadBanish][] = [];
  const goodBanishes: DreadBanish[] = [];
  for (const banish of desiredBanishes) {
    const [noncombat, subIndex, choiceIndex, banishZone, banishThing] = banish;
    const subnoncombat = noncombat.choices.get(subIndex) as DreadSubnoncombat;
    const choice = subnoncombat.choices.get(choiceIndex) as DreadChoice;
    if (
      banishedInZone.some(
        (info) =>
          dreadZone(info.noncombatZone).noncombats.some((nc) => nc.id === noncombat.id) &&
          info.targetZone === banishZone &&
          info.banished === banishThing
      )
    ) {
      completedBanishes.push(banish);
    } else if (noncombatsUsed.has(noncombat.name)) {
      usedBanishes.push(banish);
    } else if (subnoncombat.classes && !subnoncombat.classes.includes(myClass())) {
      cantBanishes.push([subnoncombat.classes, banish]);
    } else if (choice.classes && !choice.classes.includes(myClass())) {
      cantBanishes.push([choice.classes, banish]);
    } else {
      goodBanishes.push(banish);
    }
  }
  // print(`completed: ${JSON.stringify(completedBanishes.map(([, banish]) => banish))}`);
  // print(`used: ${JSON.stringify(usedBanishes.map(([, banish]) => banish))}`);

  return { completedBanishes, usedBanishes, cantBanishes, goodBanishes };
}

export function planLimitTo(
  targetZone: DreadZoneId,
  monster: DreadMonsterId | "banish no monster",
  element: DreadElementId | "banish all elements" | "banish no element"
): DreadBanish[] {
  const { cantBanishes, goodBanishes } = categorizeBanishes(targetZone, monster, element);

  for (const [classes, [noncombat, , , banish]] of cantBanishes) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    print(`Can't banish ${banish} @ ${noncombat} because we aren't ${classes.join(", ")}.`);
  }

  const banishLocations = new Map<DreadNoncombat, DreadBanish[]>();
  for (const banish of goodBanishes) {
    const [noncombat] = banish;
    let banishList = banishLocations.get(noncombat);
    if (banishList === undefined) {
      banishList = [];
      banishLocations.set(noncombat, banishList);
    }

    banishList.push(banish);
  }

  return [...banishLocations].map(([, [banish]]) => banish);
}

// For informational purposes only - not enough info to plan out banishes.
export function neededBanishes(
  targetZone: DreadZoneId,
  monster: DreadMonsterId,
  element: DreadElementId
): (DreadElementId | DreadMonsterId)[] {
  const { completedBanishes } = categorizeBanishes(targetZone, monster, element);
  const paired = monsterPair(monster);
  const monsterCount = completedBanishes.filter(([, , , , thing]) => thing === paired).length;
  const banishedElements = completedBanishes
    .map(([, , , , thing]) => thing)
    .filter((x) => isDreadElementId(x)) as DreadElementId[];
  return [
    ...dreadElements.filter((e) => element !== e && !banishedElements.includes(e)),
    ...new Array(2 - monsterCount).fill(paired),
  ];
}
