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
  isDreadMonsterId,
  isDreadZoneId,
  monsterZone,
  toDreadElementId,
} from "../dungeon/raidlog";
import { fromEntries, propertyManager, withWineglass } from "../lib";

const usage =
  "dr limit [elements] [monster | zone]: Banish all but [elements] [monster | zone]s. " +
  "Elements is a | separated list, e.g. hot|spooky or just sleaze. " +
  "Designating a monster will banish the other monster; designating a zone will banish in that zone but not banish any monsters.";

export default new Command("limit", usage, ([allElementString, monsterOrZone]: string[]) => {
  printHtml("<b>Dr. Dread Auto-Banisher</b>");

  const elementStrings = allElementString.split("|");
  if (!isDreadMonsterId(monsterOrZone) && !isDreadZoneId(monsterOrZone)) {
    print(`Unrecognized monster or zone ${monsterOrZone}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  }
  for (const element of elementStrings) {
    if (toDreadElementId(element) === undefined) {
      print(`Unrecognized element [${element}].`, "red");
      print(`Usage: ${usage}.`);
      return;
    }
  }

  const zone = isDreadZoneId(monsterOrZone) ? monsterOrZone : monsterZone(monsterOrZone);
  const monster = isDreadMonsterId(monsterOrZone) ? monsterOrZone : "banish no monster";
  const elements = elementStrings.map(toDreadElementId) as DreadElementId[];

  if (!have($item`Dreadsylvanian skeleton key`) && itemAmount($item`Freddy Kruegerand`) < 100) {
    throw "You don't have skeleton keys and you're almost out of Freddies. Fix that.";
  }

  withWineglass(() => {
    for (const banish of planLimitTo(zone, monster, elements)) {
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

  const remaining = neededBanishes(zone, monster, elements);
  if (remaining.length === 0) {
    print("All banishes complete!", "blue");
  } else {
    print(`Outstanding banishes: ${remaining.join(", ")}`, "red");
  }
});
