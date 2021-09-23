import {
  cliExecute,
  equip,
  inebrietyLimit,
  itemAmount,
  myInebriety,
  print,
  retrieveItem,
  runChoice,
  visitUrl,
} from "kolmafia";
import { $item, have } from "libram";

import { Command } from "./command";
import { planLimitTo } from "../dungeon/plan";
import { isDreadElement, isDreadMonster, monsterZone, noncombatInfo } from "../dungeon/raidlog";
import { fromEntries, propertyManager } from "../lib";

const usage = "dr limit [element] [monster]: Try to banish all monsters but [element] [monster]s.";
export const limitCommand = new Command("limit", usage, ([element, monster]: string[]) => {
  if (!isDreadMonster(monster)) {
    print(`Unrecognized monster ${monster}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  } else if (!isDreadElement(element)) {
    print(`Unrecognized element ${element}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  }

  if (!have($item`Dreadsylvanian skeleton key`) && itemAmount($item`Freddy Kruegerand`) < 100) {
    throw "You don't have skeleton keys and you're almost out of Freddies. Fix that.";
  }

  cliExecute("checkpoint");

  try {
    if (myInebriety() > inebrietyLimit()) {
      if (!have($item`Drunkula's wineglass`)) {
        throw "Can't do banishes without wineglass while overdrunk!";
      }
      equip($item`Drunkula's wineglass`);
    }

    for (const [noncombat, banish] of planLimitTo(monsterZone(monster), monster, element)) {
      print(
        `Banishing ${banish.effect.join(", ")} @ ${noncombat} using ${banish.choiceSequence
          .map((x) => x.join(", "))
          .join(" => ")}`
      );
      retrieveItem($item`Dreadsylvanian skeleton key`);
      propertyManager.setChoices(fromEntries(banish.choiceSequence));
      visitUrl(`clan_dreadsylvania.php?action=forceloc&loc=${noncombatInfo(noncombat).index}`);
      runChoice(-1);
      print();
    }
  } finally {
    cliExecute("outfit checkpoint");
  }
});
