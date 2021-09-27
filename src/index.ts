import { print } from "kolmafia";
import { sinceKolmafiaRevision } from "libram";

import { Command } from "./command";
import { propertyManager } from "./lib";

export function main(argString = ""): void {
  sinceKolmafiaRevision(20815);

  const args = argString.split(" ");

  let commandModule: { default: Command } | null = null;

  try {
    // This is a horrible hack to force webpack not to try to interpret this.
    commandModule = eval(`require("./commands/${args[0]}.js")`) as { default: Command };
  } catch (e) {
    print(`Unknown command ${args[0]}.`, "red");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const helpCommand = require("./commands/help.js").default;
    helpCommand.run(args.slice(1));
    return;
  }

  try {
    commandModule.default.run(args.slice(1));
  } finally {
    propertyManager.resetAll();
  }
}
