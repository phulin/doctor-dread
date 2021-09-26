import { print } from "kolmafia";
import { sinceKolmafiaRevision } from "libram";

import { propertyManager } from "./lib";

export function main(argString = ""): void {
  sinceKolmafiaRevision(20815);

  const args = argString.split(" ");

  try {
    // This is a horrible hack to force webpack not to try to interpret this.
    const command = eval(`require("./commands/${args[0]}.js")`).default;
    try {
      command.run(args.slice(1));
    } finally {
      propertyManager.resetAll();
    }
  } catch (e) {
    print(`Unknown command ${args[0]}.`, "red");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const helpCommand = require(`./commands/help.js`).default;
    helpCommand.run(args.slice(1));
  }
}
