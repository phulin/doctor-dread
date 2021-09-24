import { handlingChoice, myClass, print, runChoice, visitUrl } from "kolmafia";
import { $items } from "libram";
import { DreadNoncombat, dreadNoncombatsUsed, dreadZones } from "../dungeon/raidlog";
import { entries, propertyManager } from "../lib";
import { Command } from "./command";

export const collectCommand = new Command(
  "collect",
  "dr collect: Collect useful items from instance.",
  () => {
    const items = $items`dreadful roast, stinking agaricus, dread tarragon, Freddy Kruegerand`;
    const itemPriority = new Map<Item, number>(
      entries(items).map(([index, item]) => [item, index]) as [Item, number][]
    );

    // noncombat, sub, choice, item
    const result: [DreadNoncombat, number, number, Item][] = [];

    const used = dreadNoncombatsUsed();
    for (const zone of dreadZones) {
      for (const noncombat of zone.noncombats) {
        if (used.includes(noncombat.name)) continue;

        let currentPriority = 999;
        let currentResult: [DreadNoncombat, number, number, Item] | undefined = undefined;

        for (const [subIndex, subnoncombat] of noncombat.choices) {
          if (subnoncombat.isLocked()) continue;
          if (subnoncombat.classes && !subnoncombat.classes.includes(myClass())) continue;

          for (const [choiceIndex, choice] of subnoncombat.choices) {
            if (!choice.item) continue;
            const priority = itemPriority.get(choice.item) ?? 999;
            if (priority < currentPriority) {
              currentPriority = priority;
              currentResult = [noncombat, subIndex, choiceIndex, choice.item];
            }
          }
        }

        if (currentResult) {
          result.push(currentResult);
        }
      }
    }

    for (const [noncombat, subIndex, choiceIndex, item] of result) {
      print(`Getting ${item}.`);
      const subnoncombat = noncombat.choices.get(subIndex);
      propertyManager.setChoices({
        [noncombat.id]: subIndex,
        [subnoncombat?.id ?? -1]: choiceIndex,
      });
      visitUrl(`clan_dreadsylvania.php?action=forceloc&loc=${noncombat.index}`);
      runChoice(-1);
      if (handlingChoice()) throw "Stuck in choice adventure!";
      print();
    }
  }
);
