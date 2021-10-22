import {
  handlingChoice,
  itemAmount,
  myClass,
  print,
  printHtml,
  retrieveItem,
  runChoice,
  stashAmount,
  visitUrl,
} from "kolmafia";
import { $item, $items, Clan, have, set, sum } from "libram";

import { Command } from "../command";
import { DreadNoncombat, dreadNoncombatsUsed, dreadZones } from "../dungeon/raidlog";
import { clans, entries, propertyManager, withWineglass } from "../lib";

type NoncombatPlan = [DreadNoncombat, number, number, Item];

function planAllNoncombats(
  items: Item[],
  unlock: boolean,
  available: Map<Item, number>
): [string, NoncombatPlan[]][] {
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
          if (!unlock && subnoncombat.isLocked()) continue;

          for (const [choiceIndex, choice] of subnoncombat.choices) {
            if (!choice.item) continue;
            if (choice.maximum && choice.count() >= choice.maximum) continue;
            if (choice.classes && !choice.classes.includes(myClass())) continue;

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
  "dr all [unlock] [freddies]: Collect useful items from all instances (and grind flour). With freddies, get freddies. With unlock, unlock all useful NCs.",
  (args: string[]) => {
    // const grindFlour = !get("_dr_groundFlour", false) && myPrimestat() === $stat`Muscle`;

    const items = args.includes("eau")
      ? $items`eau de mort`
      : $items`dreadful roast, stinking agaricus, wax banana, complicated lock impression, eau de mort`;
    // if (grindFlour) items.splice(0, 0, $item`bone flour`);
    // if (myClass() === $class`Accordion Thief`) items.splice(0, 0, $item`intricate music box parts`);
    if (args.includes("freddies")) items.push($item`Freddy Kruegerand`);

    const unlock = args.includes("unlock");

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

    const originalClanName = Clan.get().name;
    const stashClanName = clans()[0];
    const acquired = new Map<Item, number>();

    const requirementItems = $items`old dry bone, wax banana`;

    try {
      Clan.join(stashClanName);
      let plan = planAllNoncombats(
        items,
        unlock,
        new Map(requirementItems.map((item) => [item, stashAmount(item)]))
      );

      const requirementCounts = requirementItems
        .map(
          (requirement) =>
            [
              requirement,
              sum(
                plan,
                ([, noncombatPlans]) =>
                  noncombatPlans.filter(([zone, choiceIndex, subIndex]) => {
                    const choice = zone.choices.get(choiceIndex);
                    if (!choice) return false;
                    const subNoncombat = choice.choices.get(subIndex);
                    if (!subNoncombat) return false;
                    return subNoncombat && subNoncombat.requirement === requirement;
                  }).length
              ),
            ] as [Item, number]
        )
        .filter(([, count]) => count > 0);

      let taken = new Map<Item, number>();
      if (requirementCounts.length > 0) {
        const stashClan = Clan.join(stashClanName);
        taken = stashClan.take(new Map(requirementCounts));
      }

      if (
        requirementCounts.some(([item, requiredCount]) => (taken.get(item) ?? 0) < requiredCount)
      ) {
        const requiredString = requirementCounts
          .map(([item, count]) => `${count} ${item.plural}`)
          .join(", ");
        const takenString = [...taken].map(([item, count]) => `${count} ${item.plural}`).join(", ");
        print(`Failed to take ${requiredString} from stash! Replanning with ${takenString}...`);
        plan = planAllNoncombats(items, unlock, taken);
      }

      withWineglass(() => {
        for (const [clanName, noncombatPlans] of plan) {
          if (noncombatPlans.length === 0) continue;

          Clan.join(clanName);

          for (const [noncombat, subIndex, choiceIndex, item] of noncombatPlans) {
            print(`Getting ${item}.`);
            const subnoncombat = noncombat.choices.get(subIndex);
            propertyManager.setChoices({
              [noncombat.id]: subIndex,
              [subnoncombat?.id ?? -1]: choiceIndex,
            });

            if (subnoncombat?.isLocked()) {
              if (!unlock) throw "Shouldn't be trying locked NC!";
              retrieveItem($item`Dreadsylvanian skeleton key`);
            }
            visitUrl(`clan_dreadsylvania.php?action=forceloc&loc=${noncombat.index}`);
            runChoice(-1);
            if (handlingChoice()) throw "Stuck in choice adventure!";
            acquired.set(item, (acquired.get(item) ?? 0) + 1);
            print();
          }
        }
      });
    } finally {
      acquired.delete($item`Freddy Kruegerand`);
      if (acquired.size > 0) {
        print(`Placing items in the stash in ${clans()[0]}.`);
        const stashClan = Clan.join(stashClanName);
        stashClan.put(acquired);
      }
      if (acquired.get($item`bone flour`) ?? 0 > 0) {
        set("_dr_groundFlour", true);
      }
      Clan.join(originalClanName);
    }
  }
);
