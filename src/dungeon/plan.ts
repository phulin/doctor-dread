import { print } from "kolmafia";
import {
  DreadBanish,
  dreadBanished,
  DreadElement,
  dreadElements,
  DreadMonster,
  DreadNoncombatInfo,
  dreadNoncombatsUsed,
  DreadZone,
  dreadZones,
  isDreadElement,
  monsterPair,
  noncombatZone,
} from "./raidlog";

export function banishesToLimit(
  targetZone: DreadZone,
  monster: DreadMonster | "banish no monster",
  element: DreadElement | "banish all elements" | "banish no element"
): [DreadNoncombatInfo, DreadBanish][] {
  const monstersNeededBanished = monster === "banish no monster" ? [] : [monsterPair(monster)];
  const elementsNeededBanished =
    element === "banish all elements"
      ? [...dreadElements]
      : element === "banish no element"
      ? []
      : dreadElements.filter((e) => e !== element);
  const thingsNeededBanished = [...monstersNeededBanished, ...elementsNeededBanished];

  const result: [DreadNoncombatInfo, DreadBanish][] = [];
  for (const noncombatZone of dreadZones) {
    for (const noncombat of noncombatZone.noncombats) {
      for (const banish of noncombat.banishes) {
        const [banishZone, impact] = banish.effect;
        // print(`zone ${targetZone} === ${banishZone} && thingsToBanish includes ${impact}`);
        if (targetZone === banishZone && thingsNeededBanished.includes(impact)) {
          // print("yes");
          result.push([noncombat, banish]);
        } // else print("no");
        // print();
      }
    }
  }

  return result;
}

export function categorizeBanishes(
  targetZone: DreadZone,
  monster: DreadMonster | "banish no monster",
  element: DreadElement | "banish all elements" | "banish no element"
): {
  completedBanishes: [DreadNoncombatInfo, DreadBanish][];
  usedBanishes: [DreadNoncombatInfo, DreadBanish][];
  cantBanishes: [DreadNoncombatInfo, DreadBanish][];
  goodBanishes: [DreadNoncombatInfo, DreadBanish][];
} {
  const banished = dreadBanished();
  const banishedInZone = banished.filter((info) => info.targetZone === targetZone);
  // print("banished: " + JSON.stringify(banishedInZone));

  const noncombatsUsed = new Set(dreadNoncombatsUsed());
  const desiredBanishes = banishesToLimit(targetZone, monster, element);
  // print("desired: " + JSON.stringify(desiredBanishes.map(([, banish]) => banish)));

  const completedBanishes: [DreadNoncombatInfo, DreadBanish][] = [];
  const usedBanishes: [DreadNoncombatInfo, DreadBanish][] = [];
  const cantBanishes: [DreadNoncombatInfo, DreadBanish][] = [];
  const goodBanishes: [DreadNoncombatInfo, DreadBanish][] = [];
  for (const [noncombat, banish] of desiredBanishes) {
    // Did we already use this noncombat, or has this banish already been done?
    if (
      banishedInZone.some(
        (info) =>
          noncombatZone(noncombat.noncombat) === info.noncombatZone &&
          banish.effect[1] === info.banished
      )
    ) {
      completedBanishes.push([noncombat, banish]);
    } else if (noncombatsUsed.has(noncombat.noncombat)) {
      usedBanishes.push([noncombat, banish]);
    } else if (banish.reasonCantPerform && banish.reasonCantPerform()) {
      cantBanishes.push([noncombat, banish]);
    } else {
      goodBanishes.push([noncombat, banish]);
    }
  }

  return { completedBanishes, usedBanishes, cantBanishes, goodBanishes };
}

export function planLimitTo(
  targetZone: DreadZone,
  monster: DreadMonster | "banish no monster",
  element: DreadElement | "banish all elements" | "banish no element"
): [DreadNoncombatInfo, DreadBanish][] {
  const { cantBanishes, goodBanishes } = categorizeBanishes(targetZone, monster, element);

  for (const [noncombat, banish] of cantBanishes) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    print(`Can't banish ${banish.effect} @ ${noncombat} because ${banish.reasonCantPerform!()}`);
  }

  const banishLocations = new Map<DreadNoncombatInfo, DreadBanish[]>();
  for (const [noncombat, banish] of goodBanishes) {
    let banishList = banishLocations.get(noncombat);
    if (banishList === undefined) {
      banishList = [];
      banishLocations.set(noncombat, banishList);
    }

    banishList.push(banish);
  }

  return [...banishLocations].map(
    ([noncombat, [banish]]) => [noncombat, banish] as [DreadNoncombatInfo, DreadBanish]
  );
}

export function neededBanishes(
  targetZone: DreadZone,
  monster: DreadMonster,
  element: DreadElement
): (DreadElement | DreadMonster)[] {
  const { completedBanishes } = categorizeBanishes(targetZone, monster, element);
  const paired = monsterPair(monster);
  const monsterCount = completedBanishes.filter(([, banish]) => banish.effect[1] === paired).length;
  const banishedElements = completedBanishes
    .map(([, banish]) => banish.effect[1])
    .filter((x) => isDreadElement(x)) as DreadElement[];
  return [
    ...dreadElements.filter((e) => element !== e && !banishedElements.includes(e)),
    ...new Array(2 - monsterCount).fill(paired),
  ];
}
