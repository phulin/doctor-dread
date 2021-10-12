import { print, printHtml } from "kolmafia";

import { Command } from "../command";
import { neededBanishes, planLimitTo } from "../dungeon/plan";
import {
  DreadElementId,
  dreadNoncombatsUsed,
  DreadSubnoncombat,
  isDreadMonsterId,
  isDreadZoneId,
  monsterZone,
  toDreadElementId,
} from "../dungeon/raidlog";

const usage =
  "dr plan [elements] [monster | zone]: Print plan for banishing all but [elements] [monster | zone]s. " +
  "Elements is a | separated list, e.g. hot|spooky. " +
  "Designating a monster will banish the other monster; designating a zone will banish in that zone.";

export default new Command("plan", usage, ([allElementString, monsterOrZone]) => {
  printHtml(`<b>Dr. Dread Banish Planner</b>`);

  const elementStrings = allElementString.split("|");
  if (!isDreadMonsterId(monsterOrZone) && !isDreadZoneId(monsterOrZone)) {
    print(`Unrecognized monster ${monsterOrZone}.`, "red");
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

  print(`Noncombats used: ${dreadNoncombatsUsed().join(", ")}`);
  print(`Trying to banish all but ${elements.join("|")} ${monster}`);
  print();

  const remaining = neededBanishes(zone, monster, elements);
  if (remaining.length === 0) {
    print("All banishes complete!", "blue");
  } else {
    print(`Outstanding banishes: ${remaining.join(", ")}`);
  }

  const plan = planLimitTo(zone, monster, elements);
  if (plan.length === 0) {
    print("No banishes available and needed.");
  }

  for (const banish of planLimitTo(zone, monster, elements)) {
    const [noncombat, subIndex, choiceIndex, targetZone, thing] = banish;
    const subnoncombat = noncombat.choices.get(subIndex) as DreadSubnoncombat;
    const choiceSequence: [number, number][] = [
      [noncombat.id, subIndex],
      [subnoncombat.id, choiceIndex],
    ];
    print(
      `Banish ${thing} in ${targetZone} @ ${noncombat.name} using ${choiceSequence
        .map((x) => x.join(", "))
        .join(" => ")}`
    );
  }
});
