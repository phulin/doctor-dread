import { print, printHtml } from "kolmafia";

import { Command } from "../command";

export default new Command("help", "dr help: Print help for each command.", () => {
  const commandsContext = require.context(".", false, /\.(js|ts)$/);
  const commands = commandsContext.keys().map((r) => commandsContext(r).default);
  printHtml("<b>Doctor Dread</b>");
  for (const command of commands) {
    print(command.help);
  }
});
