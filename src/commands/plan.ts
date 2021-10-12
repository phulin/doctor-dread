import { print, printHtml } from "kolmafia";

import { Command } from "../command";
import { neededBanishes, planLimitTo } from "../dungeon/plan";
import {
  DreadElementId,
  dreadNoncombatsUsed,
  DreadSubnoncombat,
  isDreadElementId,
  isDreadMonsterId,
  monsterZone,
} from "../dungeon/raidlog";

const usage = "dr plan [element] [monster]: Print plan for banishing all [element] [monster]s.";

export default new Command("plan", usage, ([allElementString, monster]) => {
  printHtml(`<b>Dr. Dread Banish Planner</b>`);

  const elementStrings = allElementString.split("|");
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

  print(`Noncombats used: ${dreadNoncombatsUsed().join(", ")}`);
  print(`Trying to banish all but ${elements.join("|")} ${monster}`);
  print();

  const remaining = neededBanishes(monsterZone(monster), monster, elements);
  if (remaining.length === 0) {
    print("All banishes complete!", "blue");
  } else {
    print(`Outstanding banishes: ${remaining.join(", ")}`);
  }

  const plan = planLimitTo(monsterZone(monster), monster, elements);
  if (plan.length === 0) {
    print("No banishes available and needed.");
  }

  for (const banish of planLimitTo(monsterZone(monster), monster, elements)) {
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
