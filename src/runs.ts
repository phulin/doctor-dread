import {
  cliExecute,
  familiarWeight,
  getFuel,
  getWorkshed,
  numericModifier,
  restoreMp,
  retrieveItem,
  useFamiliar,
  visitUrl,
  weightAdjustment,
} from "kolmafia";
import {
  $familiar,
  $item,
  $items,
  $skill,
  Bandersnatch,
  get,
  have,
  Requirement,
  set,
  TunnelOfLove,
  Witchess,
} from "libram";
import { fillAsdonMartinTo } from "./asdon";
import { Macro } from "./combat";
import { tunnelOfLove } from "./fights";
import { setChoice } from "./lib";

export function tryFillLatte(): boolean {
  const badConfig =
    numericModifier($item`latte lovers member's mug`, "Familiar Weight") !== 5 ||
    numericModifier($item`latte lovers member's mug`, "Item Drop") !== 20 ||
    numericModifier($item`latte lovers member's mug`, "Meat Drop") !== 40;
  if (
    have($item`latte lovers member's mug`) &&
    (badConfig || get("_latteBanishUsed")) &&
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
    "Backup Free",
    () =>
      have($item`backup camera`) &&
      !!get("lastCopyableMonster")?.attributes.includes("FREE") &&
      get("_backUpUses") < 11,
    Macro.skill("Back-Up to your Last Enemy").basicCombat(),
    new Requirement([], { forceEquip: $items`backup camera` })
  ),

  new FreeRun(
    "Asdon Bumper",
    () =>
      getWorkshed() === $item`Asdon Martin keyfob` &&
      !get("banishedMonsters").includes("Spring-Loaded Front Bumper"),
    Macro.skill("Asdon Martin: Spring-Loaded Front Bumper"),
    new Requirement([], {}),
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

export const banderRun = new FreeRun(
  "Bander",
  () => Bandersnatch.canRunaway(),
  Macro.step("runaway")
);

function remainingRunaways(familiar: Familiar) {
  const weight = familiarWeight(familiar) + weightAdjustment();
  return Math.floor(weight / 5) - get("_banderRunaways");
}

export const FINAL_BANDER_STAGE = 2;
export function banderStage(): number {
  return get("_dr_runFamiliarStage", 0);
}

export function tryConfigureBanderRuns(requirement: Requirement): boolean {
  // Try bander or boots.
  const runFamiliar = have($familiar`Pair of Stomping Boots`)
    ? $familiar`Pair of Stomping Boots`
    : $familiar`Frumious Bandersnatch`;

  if (banderStage() === 0) {
    useFamiliar(runFamiliar);
    requirement.maximize();
    if (remainingRunaways(runFamiliar) > 0) {
      return true;
    } else {
      set("_dr_runFamiliarStage", 1);
    }
  }

  if (banderStage() === 1) {
    // Day-limited buffs
    if (TunnelOfLove.have()) tunnelOfLove.runAll();
    const beachHeadsUsed: number | string = get("_beachHeadsUsed");
    if (have($item`Beach Comb`) && !beachHeadsUsed.toString().split(",").includes("10")) {
      cliExecute("beach head familiar");
    }
    if (Witchess.have() && !get("_witchessBuff")) {
      cliExecute("witchess");
    }

    useFamiliar(runFamiliar);
    requirement.merge(new Requirement(["100 Familiar Weight"], {})).maximize();
    if (
      remainingRunaways(runFamiliar) +
        (have($skill`Meteor Lore`) && get("_meteorShowerUses") < 5 ? 4 : 0) >
      0
    ) {
      return true;
    } else {
      set("_dr_runFamiliarStage", 2);
    }
  }

  return false;
}

export function findRun(): FreeRun | null {
  return freeRuns.find((run) => run.available()) ?? null;
}
