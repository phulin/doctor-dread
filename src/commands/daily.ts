import {
  handlingChoice,
  itemAmount,
  myClass,
  myPrimestat,
  print,
  printHtml,
  retrieveItem,
  runChoice,
  visitUrl,
} from "kolmafia";
import { $item, $items, $stat, Clan, get, have, sum } from "libram";

import { Command } from "../command";
import { DreadNoncombat, dreadNoncombatsUsed, dreadZones } from "../dungeon/raidlog";
import { clans, entries, propertyManager, withWineglass } from "../lib";

type NoncombatPlan = [DreadNoncombat, number, number, Item];

export default new Command("daily", "dr daily: Collect useful items from all instances.", () => {
  const grindFlour = !get("_dr_groundFlour", false) && myPrimestat() === $stat`Muscle`;

  const items = $items`dreadful roast, stinking agaricus, dread tarragon, wax banana, eau de mort`;
  if (grindFlour) items.splice(0, 0, $item`bone flour`);

  const itemPriority = new Map<Item, number>(
    entries(items).map(([index, item]) => [item, index]) as [Item, number][]
  );

  printHtml("<b>Doctor Dread: Dailies</b>");

  if (clans().length === 0) {
    print("Need to set property dr_clans to a |-separated list of clan names first.", "red");
    print("Dr. Dread will check the first clan for stash items.");
    print(
      "For example: set dr_clans = Flour Garden 1|Flour Garden 2|Flour Garden 3|Flour Garden 4|Flour Garden 5"
    );
    return;
  }

  if (!have($item`Dreadsylvanian skeleton key`) && itemAmount($item`Freddy Kruegerand`) < 100) {
    throw "You don't have skeleton keys and you're almost out of Freddies. Fix that.";
  }

  print(`Checking clans ${clans().join(", ")}`);

  const plan: [string, NoncombatPlan[]][] = [];

  const originalClan = Clan.get();

  try {
    for (const clanName of clans()) {
      Clan.join(clanName);

      // noncombat, sub, choice, item
      const result: [DreadNoncombat, number, number, Item][] = [];

      const used = dreadNoncombatsUsed();
      for (const zone of dreadZones) {
        for (const noncombat of zone.noncombats) {
          if (used.includes(noncombat.name)) continue;

          let currentPriority = 999;
          let currentResult: NoncombatPlan | undefined = undefined;

          for (const [subIndex, subnoncombat] of noncombat.choices) {
            if (subnoncombat.classes && !subnoncombat.classes.includes(myClass())) continue;

            for (const [choiceIndex, choice] of subnoncombat.choices) {
              if (choice.maximum && choice.count() >= choice.maximum) continue;
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

      plan.push([clanName, result]);
    }

    const flourCount = sum(
      plan,
      ([, noncombatPlans]) =>
        noncombatPlans.filter(([, , , item]) => item === $item`bone flour`).length
    );

    if (flourCount > 0) {
      const stashClanName = clans()[0];
      const stashClan = Clan.join(stashClanName);
      stashClan.take(new Map([[$item`old dry bone`, flourCount]]));
    }

    withWineglass(() => {
      for (const [clanName, noncombatPlans] of plan) {
        Clan.join(clanName);

        for (const [noncombat, subIndex, choiceIndex, item] of noncombatPlans) {
          print(`Getting ${item}.`);
          const subnoncombat = noncombat.choices.get(subIndex);
          propertyManager.setChoices({
            [noncombat.id]: subIndex,
            [subnoncombat?.id ?? -1]: choiceIndex,
          });

          if (subnoncombat?.isLocked()) retrieveItem($item`Dreadsylvanian skeleton key`);
          visitUrl(`clan_dreadsylvania.php?action=forceloc&loc=${noncombat.index}`);
          runChoice(-1);
          if (handlingChoice()) throw "Stuck in choice adventure!";
          print();
        }
      }
    });
  } finally {
    originalClan.join();
  }
});
