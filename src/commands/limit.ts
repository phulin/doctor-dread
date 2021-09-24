import {
  cliExecute,
  equip,
  handlingChoice,
  inebrietyLimit,
  itemAmount,
  myInebriety,
  print,
  printHtml,
  retrieveItem,
  runChoice,
  visitUrl,
} from "kolmafia";
import { $item, have } from "libram";

import { Command } from "./command";
import { neededBanishes, planLimitTo } from "../dungeon/plan";
import {
  DreadSubnoncombat,
  isDreadElementId,
  isDreadMonsterId,
  monsterZone,
} from "../dungeon/raidlog";
import { fromEntries, propertyManager } from "../lib";

const usage = "dr limit [element] [monster]: Try to banish all monsters but [element] [monster]s.";
export const limitCommand = new Command("limit", usage, ([element, monster]: string[]) => {
  printHtml("<b>Dr. Dread Auto-Banisher</b>");
  if (!isDreadMonsterId(monster)) {
    print(`Unrecognized monster ${monster}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  } else if (!isDreadElementId(element)) {
    print(`Unrecognized element ${element}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  }

  if (!have($item`Dreadsylvanian skeleton key`) && itemAmount($item`Freddy Kruegerand`) < 100) {
    throw "You don't have skeleton keys and you're almost out of Freddies. Fix that.";
  }

  const overdrunk = myInebriety() > inebrietyLimit();
  if (overdrunk) cliExecute("checkpoint");

  try {
    if (overdrunk) {
      if (!have($item`Drunkula's wineglass`)) {
        throw "Can't do banishes without wineglass while overdrunk!";
      }
      equip($item`Drunkula's wineglass`);
    }

    for (const banish of planLimitTo(monsterZone(monster), monster, element)) {
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
  } finally {
    if (overdrunk) cliExecute("outfit checkpoint");
  }

  const remaining = neededBanishes(monsterZone(monster), monster, element);
  if (remaining.length === 0) {
    print("All banishes complete!", "blue");
  } else {
    print(`Outstanding banishes: ${remaining.join(", ")}`, "red");
  }
});
