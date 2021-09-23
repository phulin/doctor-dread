import { print } from "kolmafia";

import { isDreadElement, isDreadMonster } from "../dungeon/raidlog";
import { Command } from "./command";

const usage = "dr limit [monster] [element]: Try to banish all monsters but [element] [monster]s.";
export const limitCommand = new Command("limit", usage, ([monster, element]: string[]) => {
  if (!isDreadMonster(monster)) {
    print(`Unrecognized monster ${monster}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  } else if (!isDreadElement(element)) {
    print(`Unrecognized element ${element}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  }
});
