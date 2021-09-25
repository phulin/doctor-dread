import { print } from "kolmafia";

import { Command } from "./command";
import {
  dreadBanished,
  DreadElementId,
  dreadKilled,
  DreadMonsterId,
  DreadZoneId,
  dreadZones,
  isDreadElementId,
  isDreadMonsterId,
} from "../dungeon/raidlog";

export const statusCommand = new Command(
  "status",
  "dr status: Print current status of dungeon.",
  () => {
    const banished = dreadBanished();
    const zoneMap = new Map<DreadZoneId, [DreadElementId[], DreadMonsterId[]]>(
      dreadZones.map((zone) => [zone.name, [[], []]])
    );
    for (const banish of banished) {
      const zoneInfo = zoneMap.get(banish.targetZone) as [DreadElementId[], DreadMonsterId[]];
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
      print(`Elements banished: ${elementsBanished.length ? elementsBanished.join(", ") : "none"}`);
      print(`Monsters banished: ${monstersBanished.length ? monstersBanished.join(", ") : "none"}`);
      print(`Monsters remaining: ${1000 - (killedMap.get(zone) ?? 0)}`);
      print();
    }
  }
);
