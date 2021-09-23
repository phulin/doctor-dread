import { print } from "kolmafia";
import { sinceKolmafiaRevision } from "libram";

import allCommands from "./commands";

export function main(argString = ""): void {
  sinceKolmafiaRevision(20815);

  const args = argString.split(" ");
  const command = allCommands[args[0]];

  if (command !== undefined) {
    command.run(args.slice(1));
  } else {
    print(`Warning: Unknown command ${args[0]}.`, "red");
    allCommands.help.run(args.slice(1));
  }
}
