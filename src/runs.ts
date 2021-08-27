import { getWorkshed, restoreMp, retrieveItem, visitUrl } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $skill,
  Bandersnatch,
  get,
  have,
  Macro,
  set,
} from "libram";
import { ensureEffect, Requirement } from "./lib";

export class FreeRun {
  name: string;
  available: () => boolean;
  macro: Macro;
  requirement?: Requirement;
  prepare?: () => void;

  constructor(
    name: string,
    available: () => boolean,
    macro: Macro,
    requirement?: Requirement,
    prepare?: () => void
  ) {
    this.name = name;
    this.available = available;
    this.macro = macro;
    this.requirement = requirement;
    this.prepare = prepare;
  }
}

const freeRuns: FreeRun[] = [
  new FreeRun(
    "Snokebomb",
    () => get("_snokebombUsed") < 3 && have($skill`Snokebomb`),
    Macro.skill($skill`Snokebomb`),
    undefined,
    () => restoreMp(50)
  ),

  new FreeRun(
    "Hatred",
    () => get("_feelHatredUsed") < 3 && have($skill`Emotionally Chipped`),
    Macro.skill($skill`Feel Hatred`)
  ),

  new FreeRun(
    "KGB",
    () => have($item`Kremlin's Greatest Briefcase`) && get("_kgbTranquilizerDartUses") < 3,
    Macro.skill($skill`KGB tranquilizer dart`),
    new Requirement([], { forceEquip: $items`Kremlin's Greatest Briefcase` })
  ),

  new FreeRun(
    "Latte",
    () => have($item`latte lovers member's mug`) && !get("_latteBanishUsed"),
    Macro.skill("Throw Latte on Opponent"),
    new Requirement([], { forceEquip: $items`latte lovers member's mug` })
  ),

  new FreeRun(
    "Docbag",
    () => have($item`Lil' Doctor™ bag`) && get("_reflexHammerUsed") < 3,
    Macro.skill($skill`Reflex Hammer`),
    new Requirement([], { forceEquip: $items`Lil' Doctor™ bag` })
  ),

  new FreeRun(
    "Middle Finger",
    () => have($item`mafia middle finger ring`) && !get("_mafiaMiddleFingerRingUsed"),
    Macro.skill($skill`Show them your ring`),
    new Requirement([], { forceEquip: $items`mafia middle finger ring` })
  ),

  new FreeRun(
    "Scrapbook",
    () => {
      visitUrl("desc_item.php?whichitem=463063785");
      return have($item`familiar scrapbook`) && get("scrapbookCharges") >= 100;
    },
    Macro.skill("Show Your Boring Familiar Pictures"),
    new Requirement([], { forceEquip: $items`familiar scrapbook` })
  ),

  new FreeRun(
    "Saber",
    () => have($item`Fourth of May Cosplay Saber`) && get("_saberForceUses") < 5,
    Macro.skill("Use the Force"),
    new Requirement([], { forceEquip: $items`Fourth of May Cosplay Saber` })
  ),
];

export function findRun(currentRequirement: Requirement): {
  familiar?: Familiar;
  requirement: Requirement;
  prepare?: () => void;
  name: string;
} | null {
  // Try bander or boots.
  const runFamiliar = have($familiar`Frumious Bandersnatch`)
    ? $familiar`Frumious Bandersnatch`
    : $familiar`Pair of Stomping Boots`;

  if (!get<boolean>("_duffo_runFamiliarUsed")) {
    new Requirement(["100 Familiar Weight"], {}).maximize();
    if (Bandersnatch.couldRunaway()) {
      return {
        familiar: runFamiliar,
        requirement: new Requirement(["100 Familiar Weight"], {}),
        prepare: () => {
          if (runFamiliar === $familiar`Frumious Bandersnatch`) {
            ensureEffect($effect`Ode to Booze`);
          }
        },
        name: "Bander",
      };
    } else {
      set("_duffo_runFamiliarUsed", true);
    }
  }

  if (
    getWorkshed() === $item`Asdon Martin keyfob` &&
    !get("banishedMonsters").includes("Spring-Loaded Front Bumper")
  ) {
    return {
      requirement: currentRequirement,
      name: "Front Bumper",
    };
  }

  const freeRun = freeRuns.find((run) => run.available());
  if (freeRun) {
    return {
      requirement: currentRequirement.merge(freeRun.requirement ?? Requirement.empty),
      name: freeRun.name,
    };
  }

  return null;
}

export const ltbRun = new FreeRun(
  "LTB",
  () => retrieveItem($item`Louder Than Bomb`),
  Macro.item($item`Louder Than Bomb`),
  new Requirement([], {}),
  () => retrieveItem($item`Louder Than Bomb`)
);
