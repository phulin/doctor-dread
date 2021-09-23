import { print } from "kolmafia";

import { Command } from "./command";
import {
  dreadBanished,
  DreadElement,
  DreadMonster,
  DreadZone,
  isDreadElement,
  isDreadMonster,
} from "../dungeon/raidlog";

export const statusCommand = new Command(
  "status",
  "dr status: Print current banishing status of dungeon.",
  () => {
    const banished = dreadBanished();
    const zoneMap = new Map<DreadZone, [DreadElement[], DreadMonster[]]>();
    for (const banish of banished) {
      let zoneInfo = zoneMap.get(banish.targetZone);
      if (zoneInfo === undefined) {
        zoneInfo = [[], []];
        zoneMap.set(banish.targetZone, zoneInfo);
      }

      const banishedThing = banish.banished;
      if (isDreadElement(banishedThing)) {
        zoneInfo[0].push(banishedThing);
      } else if (isDreadMonster(banishedThing)) {
        zoneInfo[1].push(banishedThing);
      }
    }

    for (const [zone, [elementsBanished, monstersBanished]] of zoneMap) {
      print(`${zone.toUpperCase()}:`);
      print(`Elements banished: ${elementsBanished.join(", ")}`);
      print(`Monsters banished: ${monstersBanished.join(", ")}`);
      print();
    }
  }
);
