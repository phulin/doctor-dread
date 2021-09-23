import { print, printHtml } from "kolmafia";

import allCommands from ".";
import { Command } from "./command";

export const helpCommand = new Command("help", "dr help: Print help for each command.", () => {
  printHtml("<b>Doctor Dread</b>");
  for (const commandName of Object.keys(allCommands)) {
    print(allCommands[commandName].help);
  }
});
