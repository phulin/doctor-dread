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

export function planLimitTo(
  targetZone: DreadZone,
  monster: DreadMonster | "banish no monster",
  element: DreadElement | "banish all elements" | "banish no element"
): [DreadNoncombatInfo, DreadBanish][] {
  const banished = dreadBanished();
  const banishedInZone = banished.filter((info) => info.targetZone === targetZone);

  const noncombatsUsed = new Set(dreadNoncombatsUsed());
  const desiredBanishes = banishesToLimit(targetZone, monster, element);

  const usedBanishes: [DreadNoncombatInfo, DreadBanish][] = [];
  const cantBanishes: [DreadNoncombatInfo, DreadBanish][] = [];
  const goodBanishes: [DreadNoncombatInfo, DreadBanish][] = [];
  for (const [noncombat, banish] of desiredBanishes) {
    // Did we already use this noncombat, or has this banish already been done?
    if (
      noncombatsUsed.has(noncombat.noncombat) ||
      banishedInZone.some(
        (info) =>
          noncombatZone(noncombat.noncombat) === info.noncombatZone &&
          banish.effect[1] === info.banished
      )
    ) {
      usedBanishes.push([noncombat, banish]);
    } else if (banish.reasonCantPerform && banish.reasonCantPerform()) {
      cantBanishes.push([noncombat, banish]);
    } else {
      goodBanishes.push([noncombat, banish]);
    }
  }

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
