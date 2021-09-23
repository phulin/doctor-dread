import { handlingChoice, print, runChoice, visitUrl } from "kolmafia";

import { Command } from "./command";
import { dreadNoncombatsUsed, dreadZones } from "../dungeon/raidlog";
import { fromEntries, propertyManager } from "../lib";

export const freddiesCommand = new Command(
  "freddies",
  "dr freddies: Collect freddies from any available noncombats.",
  () => {
    const used = dreadNoncombatsUsed();
    for (const zone of dreadZones) {
      for (const noncombat of zone.noncombats) {
        if (used.includes(noncombat.noncombat) || !noncombat.freddies) continue;

        propertyManager.setChoices(fromEntries(noncombat.freddies));
        visitUrl(`clan_dreadsylvania.php?action=forceloc&loc=${noncombat.index}`);
        runChoice(-1);
        if (handlingChoice()) throw "Stuck in choice adventure!";
        print();
      }
    }
  }
);
