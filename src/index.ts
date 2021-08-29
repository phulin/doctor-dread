import {
  adv1,
  cliExecute,
  getCampground,
  getCounters,
  guildStoreAvailable,
  haveEquipped,
  inebrietyLimit,
  lastChoice,
  lastDecision,
  myAdventures,
  myClass,
  myFamiliar,
  myGardenType,
  myInebriety,
  myMaxmp,
  myMp,
  myTurncount,
  numericModifier,
  print,
  retrieveItem,
  reverseNumberology,
  runChoice,
  setAutoAttack,
  toItem,
  totalTurnsPlayed,
  use,
  useFamiliar,
  visitUrl,
  xpath,
} from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $familiars,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $skills,
  adventureMacro,
  adventureMacroAuto,
  Bandersnatch,
  get,
  have,
  set,
  setDefaultMaximizeOptions,
  sinceKolmafiaRevision,
  SourceTerminal,
} from "libram";
import { Macro } from "./combat";
import { runDiet } from "./diet";
import { fairyFamiliar, freeFightFamiliar } from "./familiar";
import { dailyFights, freeFights, safeRestore } from "./fights";
import {
  determineDraggableZoneAndEnsureAccess,
  ensureEffect,
  kramcoGuaranteed,
  propertyManager,
  questStep,
  Requirement,
  safeInterrupt,
  setChoice,
} from "./lib";
import { boostItemDrop, itemMood } from "./mood";
import { freeFightOutfit, nepOutfit, tryConfigureBanderRuns } from "./outfit";
import { withStash } from "./clan";
import { estimatedTurns, globalOptions, log } from "./globalvars";
import { dailySetup } from "./dailies";
import { acquire } from "./acquire";
import { findRun, tryFillLatte } from "./runs";

function macroPreRun() {
  return Macro.pickpocket()
    .if_(
      'match "unremarkable duffel bag" || match "van key"',
      Macro.meatStasis(true)
        .externalIf(
          $familiars`Frumious Bandersnatch, Pair of Stomping Boots`.includes(myFamiliar()),
          Macro.externalIf(
            get("_meteorShowerUses") < 5 && !Bandersnatch.couldRunaway(),
            Macro.skill($skill`Meteor Shower`)
          ).step("runaway")
        )
        .tryHaveItem($item`Louder Than Bomb`)
        .tryHaveItem($item`divine champagne popper`)
    )
    .externalIf(
      get("_humanMuskUses") === 0,
      Macro.if_("monstername party girl", Macro.item($item`human musk`))
    )
    .externalIf(
      !get("_duffo_tryptophanDartUsed", false),
      Macro.if_("monstername biker", Macro.item($item`tryptophan dart`))
    );
}

function macroPostRun() {
  return Macro.if_(
    "monstername plain || monstername party girl || monstername biker",
    Macro.meatStasis(true)
      .externalIf(
        $familiars`Frumious Bandersnatch, Pair of Stomping Boots`.includes(myFamiliar()),
        Macro.step("runaway")
      )
      .trySkill(
        ...$skills`Asdon Martin: Spring-Loaded Front Bumper, Reflex Hammer, Snokebomb`,
        ...$skills`Feel Hatred, KGB tranquilizer dart, Show them your ring, Use the Force`,
        ...$skills`Throw Latte on Opponent, Show your boring familiar pictures`
      )
      .tryHaveItem($item`Louder Than Bomb`)
  )
    .externalIf(get("_neverendingPartyFreeTurns") === 10, Macro.tryFreeKill())
    .meatKill();
}

function nepTurn() {
  if (have($effect`Beaten Up`))
    throw "Hey, you're beaten up, and that's a bad thing. Lick your wounds, handle your problems, and run me again when you feel ready.";

  if (SourceTerminal.have()) {
    if (SourceTerminal.getDuplicateUses() > 0) {
      SourceTerminal.educate([$skill`Duplicate`, $skill`Digitize`]);
    } else {
      SourceTerminal.educate([$skill`Extract`, $skill`Digitize`]);
    }
  }

  if (
    have($item`unwrapped knock-off retro superhero cape`) &&
    (get("retroCapeSuperhero") !== "robot" || get("retroCapeWashingInstructions") !== "kill")
  ) {
    cliExecute("retrocape robot kill");
  }
  tryFillLatte();

  setChoice(1324, 5); // pick a fight at NEP NC

  const digitizeUp = getCounters("Digitize Monster", 0, 0).trim() !== "";

  // a. set up mood stuff
  itemMood().execute(estimatedTurns());

  safeRestore(); //get enough mp to use summer siesta and enough hp to not get our ass kicked
  const ghostLocation = get("ghostLocation");

  // b. check for wanderers, and do them
  if (
    myInebriety() <= inebrietyLimit() &&
    have($item`protonic accelerator pack`) &&
    get("questPAGhost") !== "unstarted" &&
    ghostLocation
  ) {
    useFamiliar(freeFightFamiliar());
    freeFightOutfit([new Requirement([], { forceEquip: $items`protonic accelerator pack` })]);
    adventureMacro(ghostLocation, Macro.ghostBustin());
  } else if (
    myInebriety() <= inebrietyLimit() &&
    have($item`"I Voted!" sticker`) &&
    totalTurnsPlayed() % 11 === 1 &&
    get("_voteFreeFights") < 3
  ) {
    useFamiliar(freeFightFamiliar());
    freeFightOutfit([new Requirement([], { forceEquip: $items`"I Voted!" sticker` })]);
    adventureMacroAuto(determineDraggableZoneAndEnsureAccess(), Macro.basicCombat());
  } else if (myInebriety() <= inebrietyLimit() && !digitizeUp && kramcoGuaranteed()) {
    useFamiliar(freeFightFamiliar());
    freeFightOutfit([new Requirement([], { forceEquip: $items`Kramco Sausage-o-Matic™` })]);
    adventureMacroAuto(determineDraggableZoneAndEnsureAccess(), Macro.basicCombat());
  } else if (digitizeUp) {
    useFamiliar(freeFightFamiliar());
    freeFightOutfit([]);
    adventureMacroAuto(determineDraggableZoneAndEnsureAccess(), Macro.basicCombat());
  } else if (
    have($familiar`Machine Elf`) &&
    get("_machineTunnelsAdv") < 5 &&
    get("_backUpUses") < 11 &&
    get("lastCopyableMonster") === $monster`jock`
  ) {
    useFamiliar($familiar`Machine Elf`);
    nepOutfit(new Requirement(["5 Item Drop"], { forceEquip: $items`backup camera` }));
    adventureMacro(
      $location`The Deep Machine Tunnels`,
      Macro.skill($skill`Back-Up to your Last Enemy`).meatKill()
    );
  } else {
    if (tryConfigureBanderRuns()) {
      print(`Using Bander/Boots at stage ${get("_duffo_runFamiliarStage", 0)}!`, "blue");
      if (myFamiliar() === $familiar`Frumious Bandersnatch`) ensureEffect($effect`Ode to Booze`);
    } else if (
      $location`The Neverending Party`.turnsSpent >=
      get("duffo_lastNepNcTurnsSpent", 0) + 6
    ) {
      tryFillLatte();

      const freeRun = findRun();
      if (freeRun) print(`Found run ${freeRun.name}.`, "blue");
      if (freeRun?.prepare) freeRun.prepare();

      useFamiliar(fairyFamiliar());
      nepOutfit(
        new Requirement(["5 Item Drop"], {}).merge(freeRun?.requirement ?? Requirement.empty)
      );
    } else {
      useFamiliar(fairyFamiliar());
      nepOutfit(
        new Requirement(["5 Item Drop"], {
          forceEquip:
            have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3
              ? $items`Lil' Doctor™ bag`
              : have($item`The Jokester's gun`) && get("_firedJokestersGun")
              ? $items`The Jokester's gun`
              : [],
        })
      );
    }

    // Apply synth only later in the day when our item drop drops.
    if (numericModifier("Item Drop") < 1850) {
      boostItemDrop();
    }

    if (
      haveEquipped($item`latte lovers member's mug`) &&
      !get("_latteDrinkUsed") &&
      myMp() > 0.5 * myMaxmp()
    ) {
      cliExecute(`burn ${(-0.4 * myMaxmp()).toFixed(0)}`);
    }

    if (get("_humanMuskUses") === 0) {
      retrieveItem($item`human musk`);
    }

    if (!get("_duffo_tryptophanDartUsed", false)) {
      acquire(1, $item`tryptophan dart`, 100000);
    }

    // If using saber, split macro into two chunks.
    adventureMacroAuto(
      $location`The Neverending Party`,
      haveEquipped($item`Fourth of May Cosplay Saber`)
        ? macroPreRun()
        : macroPreRun().step(macroPostRun()),
      haveEquipped($item`Fourth of May Cosplay Saber`) ? macroPostRun().abort() : Macro.abort()
    );
  }

  if (get("banishedMonsters").includes("biker:tryptophan dart")) {
    // This works around a mafia bug in tracking doubly-banished monsters..
    set("_duffo_tryptophanDartUsed", true);
  }

  if (lastChoice() === 1324 && lastDecision() === 5) {
    // Reset lastChoice() - this is a hack but whatever.
    setChoice(781, 6);
    adv1($location`An Overgrown Shrine (Northwest)`, -1, "");

    set("duffo_lastNepNcTurnsSpent", $location`The Neverending Party`.turnsSpent);
  }

  if (
    Object.keys(reverseNumberology()).includes("69") &&
    get("_universeCalculated") < get("skillLevel144")
  ) {
    cliExecute("numberology 69");
  }
}

export function canContinue(): boolean {
  return (
    myAdventures() > 0 &&
    (globalOptions.stopTurncount === null || myTurncount() < globalOptions.stopTurncount)
  );
}

export function main(argString = ""): void {
  sinceKolmafiaRevision(20815);

  if (get("valueOfAdventure") <= 3500) {
    throw `Your valueOfAdventure is set to ${get(
      "valueOfAdventure"
    )}, which is too low for barf farming to be worthwhile. If you forgot to set it, use "set valueOfAdventure = XXXX" to set it to your marginal turn meat value.`;
  }
  if (get("valueOfAdventure") >= 20000) {
    throw `Your valueOfAdventure is set to ${get(
      "valueOfAdventure"
    )}, which is definitely incorrect. Please set it to your reliable marginal turn value.`;
  }

  const args = argString.split(" ");
  for (const arg of args) {
    if (arg.match(/\d+/)) {
      globalOptions.stopTurncount = myTurncount() + parseInt(arg, 10);
    }
    if (arg.match(/ascend/)) {
      globalOptions.ascending = true;
    }
  }
  const gardens = $items`packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores`;
  const startingGarden = gardens.find((garden) =>
    Object.getOwnPropertyNames(getCampground()).includes(garden.name)
  );
  if (
    startingGarden &&
    !$items`packet of tall grass seeds, packet of mushroom spores`.includes(startingGarden) &&
    getCampground()[startingGarden.name] &&
    $items`packet of tall grass seeds, packet of mushroom spores`.some((gardenSeed) =>
      have(gardenSeed)
    )
  ) {
    visitUrl("campground.php?action=garden&pwd");
  }

  const aaBossFlag =
    xpath(
      visitUrl("account.php?tab=combat"),
      `//*[@id="opt_flag_aabosses"]/label/input[@type='checkbox']@checked`
    )[0] === "checked"
      ? 1
      : 0;

  try {
    print("Collecting duffels!", "blue");
    if (globalOptions.stopTurncount !== null) {
      print(`Stopping in ${globalOptions.stopTurncount - myTurncount()}`, "blue");
    }
    print();

    if (
      have($item`packet of tall grass seeds`) &&
      myGardenType() !== "grass" &&
      myGardenType() !== "mushroom"
    ) {
      use($item`packet of tall grass seeds`);
    }

    setAutoAttack(0);
    visitUrl(`account.php?actions[]=flag_aabosses&flag_aabosses=1&action=Update`, true);

    propertyManager.set({
      battleAction: "custom combat script",
      autoSatisfyWithMall: true,
      autoSatisfyWithNPCs: true,
      autoSatisfyWithCoinmasters: true,
      dontStopForCounters: true,
      maximizerFoldables: true,
      hpAutoRecoveryTarget: 0.95,
    });
    if (get("hpAutoRecovery") < 0.35) propertyManager.set({ hpAutoRecovery: 0.35 });

    cliExecute("mood apathetic");
    cliExecute("ccs duffo");
    safeRestore();

    if (questStep("questM23Meatsmith") === -1) {
      visitUrl("shop.php?whichshop=meatsmith&action=talk");
      runChoice(1);
    }
    if (questStep("questM24Doc") === -1) {
      visitUrl("shop.php?whichshop=doc&action=talk");
      runChoice(1);
    }
    if (questStep("questM25Armorer") === -1) {
      visitUrl("shop.php?whichshop=armory&action=talk");
      runChoice(1);
    }
    if (
      myClass() === $class`Seal Clubber` &&
      !have($skill`Furious Wallop`) &&
      guildStoreAvailable()
    ) {
      visitUrl("guild.php?action=buyskill&skillid=32", true);
    }
    const stashItems = $items`Buddy Bjorn`;
    if (
      myInebriety() <= inebrietyLimit() &&
      (myClass() !== $class`Seal Clubber` || !have($skill`Furious Wallop`))
    ) {
      stashItems.push($item`haiku katana`);
    }
    // FIXME: Dynamically figure out pointer ring approach.
    withStash(stashItems, () => {
      // 0. diet stuff.
      runDiet();

      // 2. make an outfit (amulet coin, pantogram, etc), misc other stuff (VYKEA, songboom, robortender drinks)
      dailySetup();

      setDefaultMaximizeOptions({
        preventEquip: $items`broken champagne bottle, Spooky Putty snake, Spooky Putty mitre, Spooky Putty leotard, Spooky Putty ball, papier-mitre, smoke ball`,
      });

      // 4. do some embezzler stuff
      freeFights();
      dailyFights();

      // 5. burn turns at barf
      try {
        while (canContinue()) {
          nepTurn();
          safeInterrupt();
        }
      } finally {
        setAutoAttack(0);
      }
    });
  } finally {
    propertyManager.resetAll();
    visitUrl(`account.php?actions[]=flag_aabosses&flag_aabosses=${aaBossFlag}&action=Update`, true);
    if (startingGarden && have(startingGarden)) use(startingGarden);
    if (["food", "booze"].includes(get("_questPartyFairQuest"))) {
      const partyFairInfo = get("_questPartyFairProgress").split(" ");
      print(
        `Gerald/ine wants ${partyFairInfo[0]} ${toItem(partyFairInfo[1]).plural}, please!`,
        "blue"
      );
    }
    print(
      `You fought ${log.initialEmbezzlersFought} KGEs at the beginning of the day, and an additional ${log.digitizedEmbezzlersFought} digitized KGEs throughout the day. Good work, probably!`,
      "blue"
    );
  }
}
