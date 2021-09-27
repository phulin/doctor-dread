import {
  cliExecute,
  fullnessLimit,
  getCampground,
  getCounters,
  guildStoreAvailable,
  inebrietyLimit,
  myAdventures,
  myClass,
  myFullness,
  myGardenType,
  myInebriety,
  myLevel,
  myTurncount,
  print,
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
  $item,
  $items,
  $location,
  $skill,
  adventureMacro,
  adventureMacroAuto,
  get,
  have,
  set,
  setDefaultMaximizeOptions,
  SongBoom,
  SourceTerminal,
} from "libram";

import { Command } from "../command";
import { withStash } from "../clan";
import { Macro } from "../combat";
import { dailySetup } from "../dailies";
import { fillStomach, runDiet } from "../diet";
import { fairyFamiliar, freeFightFamiliar } from "../familiar";
import { dailyFights, freeFights, safeRestore } from "../fights";
import { estimatedTurns, globalOptions } from "../globalvars";
import {
  determineDraggableZoneAndEnsureAccess,
  kramcoGuaranteed,
  propertyManager,
  questStep,
  Requirement,
  safeInterrupt,
} from "../lib";
import { itemMood } from "../mood";
import { dreadOutfit, freeFightOutfit } from "../outfit";

function canContinue(): boolean {
  return (
    myAdventures() > 0 &&
    (globalOptions.stopTurncount === null || myTurncount() < globalOptions.stopTurncount)
  );
}

function dreadTurn() {
  if (have($effect`Beaten Up`))
    throw "Hey, you're beaten up, and that's a bad thing. Lick your wounds, handle your problems, and run me again when you feel ready.";

  if (SourceTerminal.have()) {
    if (SourceTerminal.getDuplicateUses() === 0) {
      SourceTerminal.educate([$skill`Duplicate`, $skill`Digitize`]);
    } else {
      SourceTerminal.educate([$skill`Extract`, $skill`Digitize`]);
    }
  }

  if (SongBoom.songChangesLeft() > 0) SongBoom.setSong("Food Vibrations");

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
    // Bust ghost!
    useFamiliar(freeFightFamiliar());
    freeFightOutfit([new Requirement([], { forceEquip: $items`protonic accelerator pack` })]);
    adventureMacro(ghostLocation, Macro.ghostBustin());
  } else if (
    myInebriety() <= inebrietyLimit() &&
    have($item`"I Voted!" sticker`) &&
    totalTurnsPlayed() % 11 === 1 &&
    get<number>("lastVoteMonsterTurn") < totalTurnsPlayed() &&
    get("_voteFreeFights") < 3
  ) {
    // Fight vote monster.
    useFamiliar(freeFightFamiliar());
    freeFightOutfit([new Requirement([], { forceEquip: $items`"I Voted!" sticker` })]);
    adventureMacroAuto(determineDraggableZoneAndEnsureAccess(), Macro.basicCombat());
  } else if (myInebriety() <= inebrietyLimit() && !digitizeUp && kramcoGuaranteed()) {
    // Fight kramco.
    useFamiliar(freeFightFamiliar());
    freeFightOutfit([new Requirement([], { forceEquip: $items`Kramco Sausage-o-Matic™` })]);
    adventureMacroAuto(determineDraggableZoneAndEnsureAccess(), Macro.basicCombat());
  } else if (digitizeUp) {
    // Digitize is up - fight it.
    useFamiliar(freeFightFamiliar());
    freeFightOutfit([]);
    adventureMacroAuto(determineDraggableZoneAndEnsureAccess(), Macro.basicCombat());
  } else {
    // Dread turn.
    useFamiliar(fairyFamiliar());
    dreadOutfit();
    adventureMacro(
      $location`Dreadsylvanian Castle`,
      Macro.tryFreeKill().skill($skill`Slay the Dead`)
    );
  }

  if (
    Object.keys(reverseNumberology()).includes("69") &&
    get("_universeCalculated") < get("skillLevel144")
  ) {
    cliExecute("numberology 69");
  }

  if (myFullness() < fullnessLimit()) {
    fillStomach(true);
  }
}

export default new Command(
  "farm",
  "dr farm [ascend] [turncount]: Burn turns dreadfarming the Castle, up to turncount turns.",
  (args: string[]) => {
    for (const arg of args) {
      if (arg.match(/\d+/)) {
        globalOptions.stopTurncount = myTurncount() + parseInt(arg, 10);
      }
      if (arg === "ascend") globalOptions.ascending = true;
    }

    if (get("valueOfAdventure") >= 10000) {
      print(
        `Your valueOfAdventure is set to ${get(
          "valueOfAdventure"
        )}, which is definitely incorrect. Please set it to your reliable marginal turn value.`,
        "red"
      );
      return;
    }

    if (myLevel() < 20) {
      print("You need to be level 20 to eat Dread consumables.", "red");
      return;
    }

    const aaBossFlag =
      xpath(
        visitUrl("account.php?tab=combat"),
        `//*[@id="opt_flag_aabosses"]/label/input[@type='checkbox']@checked`
      )[0] === "checked"
        ? 1
        : 0;

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

    try {
      print("Collecting old dry bones!", "blue");
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

      set("lastMacroError", "");
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
      cliExecute("ccs dr");
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
      if (get("_pantsgivingCount") < 500) {
        stashItems.push($item`Pantsgiving`);
      }
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
            dreadTurn();
            safeInterrupt();
          }
        } finally {
          setAutoAttack(0);
        }
      });
    } finally {
      visitUrl(
        `account.php?actions[]=flag_aabosses&flag_aabosses=${aaBossFlag}&action=Update`,
        true
      );
      if (startingGarden && have(startingGarden)) use(startingGarden);
      if (["food", "booze"].includes(get("_questPartyFairQuest"))) {
        const partyFairInfo = get("_questPartyFairProgress").split(" ");
        print(
          `Gerald/ine wants ${partyFairInfo[0]} ${toItem(partyFairInfo[1]).plural}, please!`,
          "blue"
        );
      }
    }
  }
);
