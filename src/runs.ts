import {
  cliExecute,
  getFuel,
  getWorkshed,
  numericModifier,
  restoreMp,
  retrieveItem,
  visitUrl,
} from "kolmafia";
import { $item, $items, $skill, get, have, Macro } from "libram";
import { fillAsdonMartinTo } from "./asdon";
import { Requirement, setChoice } from "./lib";

export function tryFillLatte(): boolean {
  const badConfig =
    numericModifier($item`latte lovers member's mug`, "Familiar Weight") !== 5 ||
    numericModifier($item`latte lovers member's mug`, "Item Drop") !== 20 ||
    numericModifier($item`latte lovers member's mug`, "Meat Drop") !== 40;
  const allValueUsed = get("_latteBanishUsed") && get("_latteDrinkUsed") && get("_latteCopyUsed");
  if (
    have($item`latte lovers member's mug`) &&
    (badConfig || allValueUsed) &&
    get("_latteRefillsUsed") < 3
  ) {
    if (
      !(
        get("latteUnlocks").includes("rawhide") &&
        get("latteUnlocks").includes("carrot") &&
        get("latteUnlocks").includes("cajun")
      )
    ) {
      throw "Go make sure rawhide, carrot, cajun unlocked.";
    }
    cliExecute(`latte refill rawhide carrot cajun`);
  }

  return (
    numericModifier($item`latte lovers member's mug`, "Familiar Weight") === 5 &&
    numericModifier($item`latte lovers member's mug`, "Item Drop") === 20 &&
    numericModifier($item`latte lovers member's mug`, "Meat Drop") === 40
  );
}

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
    "Asdon Bumper",
    () =>
      getWorkshed() === $item`Asdon Martin keyfob` &&
      !get("banishedMonsters").includes("Spring-Loaded Front Bumper"),
    Macro.skill("Asdon Martin: Spring-Loaded Front Bumper"),
    Requirement.empty,
    () => {
      if (getFuel() < 50) fillAsdonMartinTo(50);
    }
  ),

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
    "Doc Bag",
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
    new Requirement([], { forceEquip: $items`Fourth of May Cosplay Saber` }),
    () => setChoice(1387, 3)
  ),
];

export const ltbRun = new FreeRun(
  "LTB",
  () => retrieveItem($item`Louder Than Bomb`),
  Macro.item($item`Louder Than Bomb`),
  new Requirement([], {}),
  () => retrieveItem($item`Louder Than Bomb`)
);

export function findRun(): FreeRun | null {
  return freeRuns.find((run) => run.available()) ?? null;
}
