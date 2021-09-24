import { print } from "kolmafia";

import { Command } from "./command";
import {
  dreadBanished,
  DreadElementId,
  dreadKilled,
  DreadMonsterId,
  DreadZoneId,
  isDreadElementId,
  isDreadMonsterId,
} from "../dungeon/raidlog";

export const statusCommand = new Command(
  "status",
  "dr status: Print current banishing status of dungeon.",
  () => {
    const banished = dreadBanished();
    const zoneMap = new Map<DreadZoneId, [DreadElementId[], DreadMonsterId[]]>();
    for (const banish of banished) {
      let zoneInfo = zoneMap.get(banish.targetZone);
      if (zoneInfo === undefined) {
        zoneInfo = [[], []];
        zoneMap.set(banish.targetZone, zoneInfo);
      }

      const banishedThing = banish.banished;
      if (isDreadElementId(banishedThing)) {
        zoneInfo[0].push(banishedThing);
      } else if (isDreadMonsterId(banishedThing)) {
        zoneInfo[1].push(banishedThing);
      }
    }

    const killedMap = new Map(dreadKilled().map(([zone, killed]) => [zone.name, killed]));

    for (const [zone, [elementsBanished, monstersBanished]] of zoneMap) {
      print(`${zone.toUpperCase()}:`);
      print(`Elements banished: ${elementsBanished.join(", ")}`);
      print(`Monsters banished: ${monstersBanished.join(", ")}`);
      print(`Monsters remaining: ${1000 - (killedMap.get(zone) ?? 0)}`);
      print();
    }
  }
);
