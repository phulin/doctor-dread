import { print } from "kolmafia";

import { Command } from "./command";
import { dreadBanished } from "../dungeon/raidlog";

export const statusCommand = new Command(
  "status",
  "dr status: Print current banishing status of dungeon.",
  () => {
    const banished = dreadBanished();
    for (const zone of banished) {
      print(`${zone.zone.toUpperCase()}:`);
      print(`Elements banished: ${zone.elementsBanished.join(", ")}`);
      print(`Monsters banished: ${zone.monstersBanished.join(", ")}`);
      print();
    }
  }
);
