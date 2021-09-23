import { print } from "kolmafia";
import {
  DreadBanish,
  dreadBanished,
  DreadElement,
  dreadElements,
  DreadMonster,
  DreadNoncombat,
  dreadNoncombatsUsed,
  DreadZone,
  dreadZones,
  monsterPair,
} from "./raidlog";

export function needsBanishing(
  targetZone: DreadZone,
  monster: DreadMonster | "banish no monster",
  element: DreadElement | "banish all elements" | "banish no element"
): (DreadElement | DreadMonster)[] {
  const banished = dreadBanished();

  const banishedZoneInfo = banished.find((info) => info.zone === targetZone);
  const monstersBanished = banishedZoneInfo?.monstersBanished ?? [];
  const elementsBanished = banishedZoneInfo?.elementsBanished ?? [];

  const monstersNeededBanished = monster === "banish no monster" ? [] : [monsterPair(monster)];
  const monstersToBanish = monstersNeededBanished.filter(
    (monster) => !monstersBanished.includes(monster)
  );

  const elementsNeededBanished =
    element === "banish all elements"
      ? [...dreadElements]
      : element === "banish no element"
      ? []
      : dreadElements.filter((e) => e !== element);
  const elementsToBanish = elementsNeededBanished.filter(
    (element) => !elementsBanished.includes(element)
  );

  return [...elementsToBanish, ...monstersToBanish];
}

export function planLimitTo(
  targetZone: DreadZone,
  monster: DreadMonster | "banish no monster",
  element: DreadElement | "banish all elements" | "banish no element"
): [DreadNoncombat, DreadBanish][] {
  const noncombatsUsed = new Set(dreadNoncombatsUsed());
  const thingsToBanish = needsBanishing(targetZone, monster, element);

  const desiredBanishes: [DreadNoncombat, DreadBanish][] = [];
  for (const noncombatZone of dreadZones) {
    for (const noncombat of noncombatZone.noncombats) {
      if (noncombatsUsed.has(noncombat.noncombat)) {
        continue;
      }

      for (const banish of noncombat.banishes) {
        const [banishZone, impact] = banish.effect;
        // print(`zone ${targetZone} === ${banishZone} && thingsToBanish includes ${impact}`);
        if (targetZone === banishZone && thingsToBanish.includes(impact)) {
          // print("yes");
          desiredBanishes.push([noncombat.noncombat, banish]);
        } // else print("no");
        print();
      }
    }
  }

  const badBanishes = desiredBanishes.filter(
    ([, banish]) => banish.reasonCantPerform && banish.reasonCantPerform()
  );
  const goodBanishes = desiredBanishes.filter(
    ([, banish]) => !banish.reasonCantPerform || !banish.reasonCantPerform()
  );

  for (const [noncombat, banish] of badBanishes) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    print(`Can't banish ${banish.effect} @ ${noncombat} because ${banish.reasonCantPerform!()}`);
  }

  const banishLocations = new Map<DreadNoncombat, DreadBanish[]>();
  for (const [noncombat, banish] of goodBanishes) {
    let banishList = banishLocations.get(noncombat);
    if (banishList === undefined) {
      banishList = [];
      banishLocations.set(noncombat, banishList);
    }

    banishList.push(banish);
  }

  return [...banishLocations].map(
    ([noncombat, [banish]]) => [noncombat, banish] as [DreadNoncombat, DreadBanish]
  );
}
