import {
  cliExecute,
  eat,
  equip,
  fullnessLimit,
  myFullness,
  myPath,
  retrieveItem,
  useFamiliar,
  useSkill,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $skill,
  $skills,
  have,
  maximizeCached,
  Mood,
} from "libram";
import { dreadKilled } from "../dungeon/raidlog";

import { Command } from "./command";

const requiredSkills = $skills`Song of Sauce, Carol of the Hells, Wizard Squint, Sauce Monocle, Frigidalmatian`;
const requiredItems = $items`Novelty Belt Buckle of Violence, unwrapped knock-off retro superhero cape, Unkillable Skeleton's shield`;

export const unkillCommand = new Command(
  "unkill",
  "dr unkill: Kill the Unkillable Skeleton.",
  () => {
    const [, castleKilled] = dreadKilled().find(([zone]) => zone.name === "castle") ?? [
      "castle",
      0,
    ];
    if (castleKilled < 1000) {
      throw "You haven't finished the castle.";
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

    if (!have($effect`Shepherd's Breath`)) {
      if (myFullness() + 4 > fullnessLimit()) {
        throw "Not enough stomach space to eat a Dreadsylvanian shepherd's pie";
      } else if (!have($item`Dreadsylvanian shepherd's pie`)) {
        throw "You don't have a Dreadsylvanian shepherd's pie. Consider making one.";
      }

      eat($item`Dreadsylvanian shepherd's pie`);
    }

    cliExecute("mood apathetic");

    const mood = new Mood();

    mood.skill($skill`Frigidalmatian`);

    mood.potion($item`corrupted marrow`, 2000);
    mood.potion($item`tobiko marble soda`, 2000);
    mood.potion($item`Mer-kin smartjuice`, 5000);
    mood.potion($item`Hawking's Elixir of Brilliance`, 5000);
    mood.potion($item`ointment of the occult`, 5000);
    mood.potion($item`potion of temporary gr8ness`, 5000);

    mood.skill($skill`Song of Sauce`);
    mood.skill($skill`Carol of the Hells`);

    // Base 9% spell critical
    mood.skill($skill`Wizard Squint`); // 19%
    mood.skill($skill`Sauce Monocle`); // 24%
    mood.potion($item`natto marble soda`, 1000); // 39%
    mood.potion($item`invisible potion`, 1000); // 54%
    mood.potion($item`LOV Elixir #6`, 1000); // 69%

    if (!mood.execute()) {
      throw "Failed to get all necessary effects for some reason.";
    }

    retrieveItem($item`meteorb`);
    retrieveItem($item`dark baconstone ring`);

    if (have($item`Powerful Glove`) && !have($effect`Triple-Sized`)) {
      equip($item`Powerful Glove`);
      useSkill($skill`CHEAT CODE: Triple Size`);
    }

    useFamiliar($familiar`Left-Hand Man`);

    maximizeCached(["Mysticality", "10 Spell Damage Percent", "-100 Monster Level", "-HP"], {
      forceEquip: $items`Novelty Belt Buckle of Violence, meteorb, unwrapped knock-off retro superhero cape, Unkillable Skeleton's shield, dark baconstone ring`,
    });

    cliExecute("retrocape heck kill");
  }
);
