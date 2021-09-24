import { handlingChoice, myClass, print, runChoice, visitUrl } from "kolmafia";

import { Command } from "./command";
import { dreadNoncombatsUsed, dreadZones } from "../dungeon/raidlog";
import { propertyManager } from "../lib";
import { $item } from "libram";

export const freddiesCommand = new Command(
  "freddies",
  "dr freddies: Collect freddies from any available noncombats.",
  () => {
    const used = dreadNoncombatsUsed();
    for (const zone of dreadZones) {
      for (const noncombat of zone.noncombats) {
        if (used.includes(noncombat.name)) continue;

        for (const [subIndex, subnoncombat] of noncombat.choices) {
          if (subnoncombat.isLocked()) continue;
          if (subnoncombat.classes && !subnoncombat.classes.includes(myClass())) continue;

          for (const [choiceIndex, choice] of subnoncombat.choices) {
            if (choice.item !== $item`Freddy Kruegerand`) continue;
            if (choice.classes && !choice.classes.includes(myClass())) continue;

            propertyManager.setChoices({
              [noncombat.id]: subIndex,
              [subnoncombat.id]: choiceIndex,
            });
            visitUrl(`clan_dreadsylvania.php?action=forceloc&loc=${noncombat.index}`);
            runChoice(-1);
            if (handlingChoice()) throw "Stuck in choice adventure!";
            print();
          }
        }
      }
    }
  }
);
