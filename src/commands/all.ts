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
import { $item, $items, $stat, Clan, get, have, set, sum } from "libram";

import { Command } from "../command";
import { DreadNoncombat, dreadNoncombatsUsed, dreadZones } from "../dungeon/raidlog";
import { clans, entries, propertyManager, withWineglass } from "../lib";

type NoncombatPlan = [DreadNoncombat, number, number, Item];

function planAllNoncombats(available: Map<Item, number>): [string, NoncombatPlan[]][] {
  const grindFlour = !get("_dr_groundFlour", false) && myPrimestat() === $stat`Muscle`;

  const items = $items`dreadful roast, stinking agaricus, dread tarragon, wax banana, eau de mort`;
  if (grindFlour) items.splice(0, 0, $item`bone flour`);

  const itemPriority = new Map<Item, number>(
    entries(items).map(([index, item]) => [item, index]) as [Item, number][]
  );

  const plan: [string, NoncombatPlan[]][] = [];

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

            if (choice.requirement) {
              const requirementsAvailable =
                available.get(choice.requirement) ?? itemAmount(choice.requirement);
              if (requirementsAvailable <= 0) continue;
            }

            const priority = itemPriority.get(choice.item) ?? 999;
            if (priority < currentPriority) {
              currentPriority = priority;
              currentResult = [noncombat, subIndex, choiceIndex, choice.item];
            }
          }
        }

        if (currentResult) {
          result.push(currentResult);
          const [noncombat, subIndex, choiceIndex] = currentResult;
          const choice = noncombat.choices.get(subIndex)?.choices.get(choiceIndex);
          if (choice?.requirement) {
            available.set(
              choice.requirement,
              (available.get(choice.requirement) ?? itemAmount(choice.requirement)) - 1
            );
          }
        }
      }
    }

    plan.push([clanName, result]);
  }

  return plan;
}

export default new Command(
  "all",
  "dr all: Collect useful items from all instances (and grind flour).",
  () => {
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

    const originalClan = Clan.get();
    const acquired = new Map<Item, number>();

    let flourCount = 0;

    try {
      let plan = planAllNoncombats(new Map());

      flourCount = sum(
        plan,
        ([, noncombatPlans]) =>
          noncombatPlans.filter(([, , , item]) => item === $item`bone flour`).length
      );

      let boneCount = 0;
      if (flourCount > 0) {
        const stashClan = Clan.join(clans()[0]);
        const taken = stashClan.take(new Map([[$item`old dry bone`, flourCount]]));
        boneCount = taken.get($item`old dry bone`) ?? 0;
      }

      if (boneCount < flourCount) {
        print(
          `Failed to take ${flourCount} old dry bones from stash! Replanning with ${boneCount}...`
        );
        plan = planAllNoncombats(new Map([[$item`old dry bone`, boneCount]]));
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
            acquired.set(item, (acquired.get(item) ?? 0) + 1);
            print();
          }
        }
      });
    } finally {
      if (acquired.size > 0) {
        const stashClan = Clan.join(clans()[0]);
        stashClan.put(acquired);
      }
      if (acquired.get($item`bone flour`) ?? 0 > 0) {
        set("_dr_groundFlour", true);
      }
      originalClan.join();
    }
  }
);
