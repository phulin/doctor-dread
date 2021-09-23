import { print, printHtml } from "kolmafia";
import { neededBanishes, planLimitTo } from "../dungeon/plan";

import {
  dreadNoncombatsUsed,
  isDreadElement,
  isDreadMonster,
  monsterPlural,
  monsterZone,
} from "../dungeon/raidlog";
import { Command } from "./command";

const usage = "dr plan [element] [monster]: Print plan for banishing all [element] [monster]s.";

export const planCommand = new Command("plan", usage, ([element, monster]) => {
  if (!isDreadMonster(monster)) {
    print(`Unrecognized monster ${monster}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  } else if (!isDreadElement(element)) {
    print(`Unrecognized element ${element}.`, "red");
    print(`Usage: ${usage}.`);
    return;
  }

  printHtml(`<b>Dr. Dread Banish Planner</b>`);
  print(`Noncombats used: ${dreadNoncombatsUsed().join(", ")}`);
  print(`Trying to banish ${element} ${monsterPlural(monster)}`);
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

  for (const [noncombat, banish] of plan) {
    print(
      `Banish ${banish.effect.join(", ")} @ ${noncombat.noncombat} using ${banish.choiceSequence
        .map((x) => x.join(", "))
        .join(" => ")}`
    );
  }
});
