import {
  handlingChoice,
  itemAmount,
  print,
  printHtml,
  retrieveItem,
  runChoice,
  visitUrl,
} from "kolmafia";
import { $item, have } from "libram";

import { Command } from "../command";
import { neededBanishes, planLimitTo } from "../dungeon/plan";
import {
  DreadElementId,
  DreadSubnoncombat,
  isDreadElementId,
  isDreadMonsterId,
  monsterZone,
} from "../dungeon/raidlog";
import { fromEntries, propertyManager, withWineglass } from "../lib";

const usage = "dr limit [element] [monster]: Try to banish all monsters but [element] [monster]s.";
export default new Command("limit", usage, ([allElementString, monster]: string[]) => {
  const elementStrings = allElementString.split("|");
  printHtml("<b>Dr. Dread Auto-Banisher</b>");
  if (!isDreadMonsterId(monster)) {
    print(`Unrecognized monster ${monster}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  }
  for (const element of elementStrings) {
    if (!isDreadElementId(element)) {
      print(`Unrecognized element [${element}].`, "red");
      print(`Usage: ${usage}.`);
      return;
    }
  }

  const elements = elementStrings as DreadElementId[];

  if (!have($item`Dreadsylvanian skeleton key`) && itemAmount($item`Freddy Kruegerand`) < 100) {
    throw "You don't have skeleton keys and you're almost out of Freddies. Fix that.";
  }

  withWineglass(() => {
    for (const banish of planLimitTo(monsterZone(monster), monster, elements)) {
      const [noncombat, subIndex, choiceIndex, targetZone, thing] = banish;
      const subnoncombat = noncombat.choices.get(subIndex) as DreadSubnoncombat;
      const choiceSequence: [number, number][] = [
        [noncombat.id, subIndex],
        [subnoncombat.id, choiceIndex],
      ];
      print(
        `Banishing ${thing} in ${targetZone} @ ${noncombat.name} using ${choiceSequence
          .map((x) => x.join(", "))
          .join(" => ")}`
      );
      if (subnoncombat.isLocked()) retrieveItem($item`Dreadsylvanian skeleton key`);
      propertyManager.setChoices(fromEntries(choiceSequence));
      visitUrl(`clan_dreadsylvania.php?action=forceloc&loc=${noncombat.index}`);
      runChoice(-1);
      if (handlingChoice()) throw "Stuck in choice adventure!";
      print();
    }
  });

  const remaining = neededBanishes(monsterZone(monster), monster, elements);
  if (remaining.length === 0) {
    print("All banishes complete!", "blue");
  } else {
    print(`Outstanding banishes: ${remaining.join(", ")}`, "red");
  }
});
