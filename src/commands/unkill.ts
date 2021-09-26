import {
  cliExecute,
  eat,
  familiarWeight,
  fullnessLimit,
  myFullness,
  myMaxhp,
  myPath,
  numericModifier,
  print,
  retrieveItem,
  useFamiliar,
} from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  have,
  maximizeCached,
  Mood,
} from "libram";

import { adventureMacro, Macro } from "../combat";
import { Command } from "../command";
import { dreadBanished, dreadKilled } from "../dungeon/raidlog";
import { propertyManager } from "../lib";

const requiredSkills: Skill[] = [];
const requiredItems = $items`Unkillable Skeleton's shield`;

export default new Command(
  "unkill",
  "dr unkill [normal?]: Kill the Unkillable Skeleton on hard or normal mode.",
  ([mode]) => {
    const [, castleKilled] = dreadKilled().find(([zone]) => zone.name === "castle") ?? [
      "castle",
      0,
    ];
    if (castleKilled < 1000) {
      throw "You haven't finished the castle.";
    }

    const banished = dreadBanished();
    const vampiresBanished = banished.filter(({ banished }) => banished === "vampire").length;
    const skeletonsBanished = banished.filter(({ banished }) => banished === "skeleton").length;
    if (skeletonsBanished < 2 || vampiresBanished === 2) {
      throw "Can't guarantee UKS - tweak banishes or do this manually.";
    }

    if (myPath() === "Two Crazy Random Summer") {
      throw "Can't kill hard mode UKS in 2CRS!";
    }

    if (!requiredSkills.every((skill) => have(skill))) {
      throw `You don't have required skill ${requiredSkills.filter((skill) => !have(skill))}`;
    }

    if (!requiredItems.every((item) => have(item))) {
      throw `You don't have required item ${requiredItems.filter((item) => !have(item))}`;
    }

    if (mode !== "normal" && !have($effect`Shepherd's Breath`)) {
      if (myFullness() + 3 > fullnessLimit()) {
        throw "Not enough stomach space to eat a Dreadsylvanian shepherd's pie";
      } else if (!have($item`Dreadsylvanian shepherd's pie`)) {
        throw "You don't have a Dreadsylvanian shepherd's pie. Consider making one.";
      }

      eat($item`Dreadsylvanian shepherd's pie`);
    }

    cliExecute("mood apathetic");
    cliExecute("mcd 0");

    const mood = new Mood();

    if (have($skill`Frigidalmatian`)) mood.skill($skill`Frigidalmatian`);

    mood.potion($item`corrupted marrow`, 2000);
    mood.potion($item`short white`, 5000);

    // if (have($item`Powerful Glove`) && !have($effect`Triple-Sized`)) {
    //   equip($item`Powerful Glove`);
    //   useSkill($skill`CHEAT CODE: Triple Size`);
    // }

    for (const effect of $effects`Triple-Sized, Big`) cliExecute(`shrug ${effect}`);

    useFamiliar($familiar`Mosquito`);

    const forceEquip = $items`Unkillable Skeleton's shield, Mer-kin gutgirdle`;
    if (have($skill`Frigidalmatian`)) {
      forceEquip.push(
        ...$items`meteorb, unwrapped knock-off retro superhero cape, dark baconstone ring`
      );
      // mood.potion($item`tobiko marble soda`, 2000);
      // mood.potion($item`Mer-kin smartjuice`, 5000);
      // mood.potion($item`Hawking's Elixir of Brilliance`, 5000);
      // mood.potion($item`ointment of the occult`, 5000);
      // mood.potion($item`potion of temporary gr8ness`, 5000);

      // mood.skill($skill`Song of Sauce`);
      // mood.skill($skill`Carol of the Hells`);

      // Base 9% spell critical
      // mood.skill($skill`Wizard Squint`); // 19%
      // mood.skill($skill`Sauce Monocle`); // 24%
      // mood.potion($item`natto marble soda`, 1000); // 39%
      // mood.potion($item`invisible potion`, 1000); // 54%
      // mood.potion($item`LOV Elixir #6`, 1000); // 69% - nice!

      // -ML
      // mood.potion($item`cuppa Monstrosi tea`, 1000);
    }

    for (const item of forceEquip) retrieveItem(item);

    maximizeCached(["Familiar Weight", "-0.1 HP"], {
      forceEquip,
    });

    if (!mood.execute()) {
      throw "Failed to get all necessary effects for some reason.";
    }

    cliExecute("retrocape heck kill");

    if (myMaxhp() > familiarWeight($familiar`Mosquito`) + numericModifier("Familiar Weight")) {
      print("Your max HP is too high! Please reduce it below 100.");
    }

    propertyManager.setChoices({ 760: 1 });

    adventureMacro(
      $location`Dreadsylvanian Castle`,
      Macro.if_("monstername Count Drunkula", Macro.abort()).step("twiddle").repeat()
    );
  }
);
