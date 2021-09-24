import { print, printHtml } from "kolmafia";

import { neededBanishes, planLimitTo } from "../dungeon/plan";
import {
  dreadNoncombatsUsed,
  DreadSubnoncombat,
  isDreadElementId,
  isDreadMonsterId,
  monsterZone,
} from "../dungeon/raidlog";
import { Command } from "./command";

const usage = "dr plan [element] [monster]: Print plan for banishing all [element] [monster]s.";

export const planCommand = new Command("plan", usage, ([element, monster]) => {
  if (!isDreadMonsterId(monster)) {
    print(`Unrecognized monster ${monster}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  } else if (!isDreadElementId(element)) {
    print(`Unrecognized element ${element}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  }

  printHtml(`<b>Dr. Dread Banish Planner</b>`);
  print(`Noncombats used: ${dreadNoncombatsUsed().join(", ")}`);
  print(`Trying to banish ${element} ${monster}`);
  print();

  const remaining = neededBanishes(monsterZone(monster), monster, element);
  if (remaining.length === 0) {
    print("All banishes complete!", "blue");
  } else {
    print(`Outstanding banishes: ${remaining.join(", ")}`);
  }

  const plan = planLimitTo(monsterZone(monster), monster, element);
  if (plan.length === 0) {
    print("No banishes available and needed.");
  }

  for (const banish of planLimitTo(monsterZone(monster), monster, element)) {
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
