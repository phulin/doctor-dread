import { print } from "kolmafia";
import { sinceKolmafiaRevision } from "libram";

import allCommands from "./commands";
import { propertyManager } from "./lib";

export function main(argString = ""): void {
  sinceKolmafiaRevision(20815);

  const args = argString.split(" ");
  const command = allCommands[args[0]];

  try {
    if (command !== undefined) {
      command.run(args.slice(1));
    } else {
      print(`Warning: Unknown command ${args[0]}.`, "red");
      allCommands.help.run(args.slice(1));
    }
  } finally {
    propertyManager.resetAll();
  }
}
