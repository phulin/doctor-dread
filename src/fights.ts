import {
  adv1,
  availableAmount,
  chatPrivate,
  cliExecute,
  equip,
  familiarWeight,
  getAutoAttack,
  getCampground,
  getCounters,
  handlingChoice,
  inebrietyLimit,
  itemAmount,
  lastDecision,
  mallPrice,
  myAscensions,
  myClass,
  myFamiliar,
  myHash,
  myHp,
  myInebriety,
  myMaxhp,
  myMaxmp,
  myMp,
  outfit,
  print,
  putCloset,
  restoreHp,
  restoreMp,
  retrieveItem,
  runChoice,
  runCombat,
  setAutoAttack,
  setLocation,
  toInt,
  toUrl,
  use,
  useFamiliar,
  userConfirm,
  useSkill,
  visitUrl,
  wait,
  weightAdjustment,
} from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $phyla,
  $skill,
  $slot,
  adventureMacro,
  ChateauMantegna,
  get,
  have,
  maximizeCached,
  property,
  set,
  SourceTerminal,
  TunnelOfLove,
  Witchess,
} from "libram";
import { withStash, withVIPClan } from "./clan";
import { Macro, withMacro } from "./combat";
import { fairyFamiliar, freeFightFamiliar } from "./familiar";
import {
  clamp,
  determineDraggableZoneAndEnsureAccess,
  draggableFight,
  ensureEffect,
  kramcoGuaranteed,
  propertyManager,
  questStep,
  Requirement,
  safeInterrupt,
  saleValue,
  setChoice,
  sum,
} from "./lib";
import { freeFightMood, itemMood } from "./mood";
import { freeFightOutfit } from "./outfit";
import { estimatedTurns, log } from "./globalvars";

const witchessPieces = [
  { piece: $monster`Witchess Bishop`, drop: $item`Sacramento wine` },
  { piece: $monster`Witchess Knight`, drop: $item`jumping horseradish` },
  { piece: $monster`Witchess Pawn`, drop: $item`armored prawn` },
  { piece: $monster`Witchess Rook`, drop: $item`Greek fire` },
];

const bestWitchessPiece = witchessPieces.sort((a, b) => saleValue(b.drop) - saleValue(a.drop))[0]
  .piece;
const copiedMonster = bestWitchessPiece;

function checkFax(): boolean {
  if (!have($item`photocopied monster`)) cliExecute("fax receive");
  if (property.getString("photocopyMonster") === copiedMonster.name) return true;
  cliExecute("fax send");
  return false;
}

function faxWitchess(): void {
  if (!get("_photocopyUsed")) {
    if (checkFax()) return;
    chatPrivate("cheesefax", copiedMonster.name);
    for (let i = 0; i < 3; i++) {
      wait(10);
      if (checkFax()) return;
    }
    throw `Failed to acquire photocopied ${copiedMonster.name}`;
  }
}

type CopierFightOptions = {
  location?: Location;
  macro?: Macro;
};

class CopierFight {
  available: () => boolean;
  potential: () => number;
  run: (options: CopierFightOptions) => void;
  requirements: Requirement[];
  draggable: boolean;
  name: string;

  constructor(
    name: string,
    available: () => boolean,
    potential: () => number,
    run: (options: CopierFightOptions) => void,
    requirements: Requirement[] = [],
    draggable = false
  ) {
    this.name = name;
    this.available = available;
    this.potential = potential;
    this.run = run;
    this.requirements = requirements;
    this.draggable = draggable;
  }
}

const firstChainMacro = () =>
  Macro.if_(
    `monstername ${copiedMonster}`,
    Macro.if_(
      "!hasskill Lecture on Relativity",
      Macro.externalIf(
        get("_sourceTerminalDigitizeMonster") !== copiedMonster,
        Macro.tryCopier($skill`Digitize`)
      )
        .tryCopier($item`Spooky Putty sheet`)
        .tryCopier($item`Rain-Doh black box`)
    )
      .trySkill($skill`lecture on relativity`)
      .meatKill()
  ).abort();

const secondChainMacro = () =>
  Macro.if_(
    `monstername ${copiedMonster}`,
    Macro.externalIf(
      myFamiliar() === $familiar`Pocket Professor`,
      Macro.if_("!hasskill Lecture on Relativity", Macro.trySkill($skill`Meteor Shower`))
        .if_(
          "!hasskill Lecture on Relativity",
          Macro.externalIf(
            get("_sourceTerminalDigitizeMonster") !== copiedMonster,
            Macro.tryCopier($skill`Digitize`)
          )
            .tryCopier($item`Spooky Putty sheet`)
            .tryCopier($item`Rain-Doh black box`)
            .tryCopier($item`4-d camera`)
            .tryCopier($item`unfinished ice sculpture`)
        )
        .trySkill($skill`lecture on relativity`)
    ).meatKill()
  ).abort();

const copierMacro = () =>
  Macro.if_(
    `monstername ${copiedMonster}`,
    Macro.if_("snarfblat 186", Macro.tryCopier($item`pulled green taffy`))
      .trySkill($skill`Wink at`)
      .trySkill($skill`Fire a badly romantic arrow`)
      .externalIf(
        get("_sourceTerminalDigitizeMonster") !== copiedMonster,
        Macro.tryCopier($skill`Digitize`)
      )
      .tryCopier($item`Spooky Putty sheet`)
      .tryCopier($item`Rain-Doh black box`)
      .tryCopier($item`4-d camera`)
      .tryCopier($item`unfinished ice sculpture`)
      .meatKill()
  ).abort();

const copierSources = [
  new CopierFight(
    "Digitize",
    () =>
      get("_sourceTerminalDigitizeMonster") === copiedMonster &&
      getCounters("Digitize Monster", 0, 0).trim() !== "",
    () => (SourceTerminal.have() && get("_sourceTerminalDigitizeUses") === 0 ? 1 : 0),
    (options: CopierFightOptions) => {
      adv1(options.location || $location`Noob Cave`);
    },
    [],
    true
  ),

  // Backup camera: save 5 uses to put NEP monsters in the DMT.
  new CopierFight(
    "Backup",
    () =>
      get("lastCopyableMonster") === copiedMonster &&
      have($item`backup camera`) &&
      get<number>("_backUpUses") < 5,
    () => (have($item`backup camera`) ? clamp(6 - get<number>("_backUpUses"), 0, 6) : 0),
    (options: CopierFightOptions) => {
      const realLocation =
        options.location && options.location.combatPercent >= 100
          ? options.location
          : determineDraggableZoneAndEnsureAccess(draggableFight.BACKUP);
      adventureMacro(
        realLocation,
        Macro.if_(
          `!monstername ${copiedMonster}`,
          Macro.skill($skill`Back-Up to your Last Enemy`)
        ).step(options.macro || copierMacro())
      );
    },
    [
      new Requirement([], {
        forceEquip: $items`backup camera`,
        bonusEquip: new Map([[$item`backup camera`, 5000]]),
      }),
    ],
    true
  ),
  new CopierFight(
    "Fax",
    () => have($item`Clan VIP Lounge key`) && !get("_photocopyUsed"),
    () => (have($item`Clan VIP Lounge key`) && !get("_photocopyUsed") ? 1 : 0),
    () => {
      withVIPClan(() => faxWitchess());
      use($item`photocopied monster`);
    }
  ),
  new CopierFight(
    "Chateau Painting",
    () =>
      ChateauMantegna.have() &&
      !ChateauMantegna.paintingFought() &&
      !!ChateauMantegna.paintingMonster()?.attributes.includes("FREE"),
    () =>
      ChateauMantegna.have() &&
      !ChateauMantegna.paintingFought() &&
      !!ChateauMantegna.paintingMonster()?.attributes.includes("FREE")
        ? 1
        : 0,
    () => ChateauMantegna.fightPainting()
  ),
  new CopierFight(
    "Spooky Putty & Rain-Doh",
    () =>
      (have($item`Spooky Putty monster`) && get("spookyPuttyMonster") === copiedMonster) ||
      (have($item`Rain-Doh box full of monster`) && get("rainDohMonster") === copiedMonster),
    () => {
      if (
        (have($item`Spooky Putty sheet`) || have($item`Spooky Putty monster`)) &&
        (have($item`Rain-Doh black box`) || have($item`Rain-Doh box full of monster`))
      ) {
        return (
          6 -
          get("spookyPuttyCopiesMade") -
          get("_raindohCopiesMade") +
          itemAmount($item`Spooky Putty monster`) +
          itemAmount($item`Rain-Doh box full of monster`)
        );
      } else if (have($item`Spooky Putty sheet`) || have($item`Spooky Putty monster`)) {
        return 5 - get("spookyPuttyCopiesMade") + itemAmount($item`Spooky Putty monster`);
      } else if (have($item`Rain-Doh black box`) || have($item`Rain-Doh box full of monster`)) {
        return 5 - get("_raindohCopiesMade") + itemAmount($item`Rain-Doh box full of monster`);
      }
      return 0;
    },
    () => {
      if (have($item`Spooky Putty monster`)) return use($item`Spooky Putty monster`);
      return use($item`Rain-Doh box full of monster`);
    }
  ),
  new CopierFight(
    "4-d Camera",
    () =>
      have($item`shaking 4-d camera`) &&
      get("cameraMonster") === copiedMonster &&
      !get("_cameraUsed"),
    () =>
      have($item`shaking 4-d camera`) &&
      get("cameraMonster") === copiedMonster &&
      !get("_cameraUsed")
        ? 1
        : 0,
    () => use($item`shaking 4-d camera`)
  ),
  new CopierFight(
    "Ice Sculpture",
    () =>
      have($item`ice sculpture`) &&
      get("iceSculptureMonster") === copiedMonster &&
      !get("_iceSculptureUsed"),
    () =>
      have($item`ice sculpture`) &&
      get("iceSculptureMonster") === copiedMonster &&
      !get("_iceSculptureUsed")
        ? 1
        : 0,
    () => use($item`ice sculpture`)
  ),
  new CopierFight(
    "Green Taffy",
    () =>
      have($item`envyfish egg`) &&
      get("envyfishMonster") === copiedMonster &&
      !get("_envyfishEggUsed"),
    () =>
      have($item`envyfish egg`) &&
      get("envyfishMonster") === copiedMonster &&
      !get("_envyfishEggUsed")
        ? 1
        : 0,
    () => use($item`envyfish egg`)
  ),
  new CopierFight(
    "Professor MeatChain",
    () => false,
    () => (have($familiar`Pocket Professor`) && !get<boolean>("_duffo_meatChain", false) ? 10 : 0),
    () => {
      return;
    }
  ),
  new CopierFight(
    "Professor WeightChain",
    () => false,
    () => (have($familiar`Pocket Professor`) && !get<boolean>("_duffo_weightChain", false) ? 5 : 0),
    () => {
      return;
    }
  ),
];

export function copierCount(): number {
  return sum(copierSources.map((source) => source.potential()));
}

function chainSetup() {
  itemMood().execute(estimatedTurns());
  safeRestore();
  freeFightMood().execute(50);
  if (!get<boolean>("_duffo_pyecUsed", false)) {
    withStash($items`Platinum Yendorian Express Card, Bag o' Tricks`, () => {
      if (have($item`Platinum Yendorian Express Card`) && !get("expressCardUsed")) {
        use($item`Platinum Yendorian Express Card`);
      }
      if (have($item`Bag o' Tricks`) && !get("_bagOTricksUsed")) {
        use($item`Bag o' Tricks`);
      }
      set("_duffo_pyecUsed", true);
    });
  }
  if (have($item`License to Chill`) && !get("_licenseToChillUsed")) use($item`License to Chill`);

  if (SourceTerminal.have()) SourceTerminal.educate([$skill`Extract`, $skill`Digitize`]);

  // Fix invalid copiers (caused by ascending or combat text-effects)
  if (have($item`Spooky Putty monster`) && !get("spookyPuttyMonster")) {
    // Visit the description to update the monster as it may be valid but not tracked correctly
    visitUrl(`desc_item.php?whichitem=${$item`Spooky Putty monster`.descid}`, false, false);
    if (!get("spookyPuttyMonster")) {
      // Still invalid, use it to turn back into the spooky putty sheet
      use($item`Spooky Putty monster`);
    }
  }

  if (have($item`Rain-Doh box full of monster`) && !get("rainDohMonster")) {
    visitUrl(`desc_item.php?whichitem=${$item`Rain-Doh box full of monster`.descid}`, false, false);
  }

  if (have($item`shaking 4-d camera`) && !get("cameraMonster")) {
    visitUrl(`desc_item.php?whichitem=${$item`shaking 4-d camera`.descid}`, false, false);
  }

  if (have($item`envyfish egg`) && !get("envyfishMonster")) {
    visitUrl(`desc_item.php?whichitem=${$item`envyfish egg`.descid}`, false, false);
  }
}

function getCopierFight(): CopierFight | null {
  for (const fight of copierSources) {
    if (fight.available()) return fight;
  }
  const potential = copierCount();
  if (
    potential > 0 &&
    get("_genieFightsUsed") < 3 &&
    userConfirm(
      `duffo has detected you have ${potential} potential ways to copy an Embezzler, but no way to start a fight with one. Should we wish for an Embezzler?`
    )
  ) {
    return new CopierFight(
      "Pocket Wish",
      () => false,
      () => 0,
      () => {
        retrieveItem($item`pocket wish`);
        visitUrl(`inv_use.php?pwd=${myHash()}&which=3&whichitem=9537`, false, true);
        visitUrl(
          `choice.php?pwd&whichchoice=1267&option=1&wish=to fight a ${copiedMonster}`,
          true,
          true
        );
        visitUrl("main.php", false);
        runCombat();
      }
    );
  }
  return null;
}

export function dailyFights(): void {
  if (myInebriety() > inebrietyLimit()) return;
  if (!get("_photocopyUsed")) {
    withStash($items`Spooky Putty sheet`, () => {
      chainSetup();

      // FIRST EMBEZZLER CHAIN
      if (have($familiar`Pocket Professor`) && !get<boolean>("_duffo_meatChain", false)) {
        const startLectures = get("_pocketProfessorLectures");
        const fightSource = getCopierFight();
        if (!fightSource) return;
        useFamiliar($familiar`Pocket Professor`);
        freeFightOutfit([
          new Requirement([], { forceEquip: $items`Pocket Professor memory chip` }),
        ]);
        if (
          get("_pocketProfessorLectures") <
          2 + Math.ceil(Math.sqrt(familiarWeight(myFamiliar()) + weightAdjustment()))
        ) {
          withMacro(firstChainMacro(), () =>
            fightSource.run({
              location: determineDraggableZoneAndEnsureAccess(),
              macro: firstChainMacro(),
            })
          );
          log.initialEmbezzlersFought += 1 + get("_pocketProfessorLectures") - startLectures;
        }
        set("_duffo_meatChain", true);
        safeInterrupt();
      }

      // SECOND EMBEZZLER CHAIN
      if (have($familiar`Pocket Professor`) && !get<boolean>("_duffo_weightChain", false)) {
        const fightSource = getCopierFight();
        if (!fightSource) return;
        useFamiliar($familiar`Pocket Professor`);
        const requirements = Requirement.merge([
          new Requirement(["Familiar Weight"], {
            forceEquip: $items`Pocket Professor memory chip`,
          }),
          ...fightSource.requirements,
        ]);
        maximizeCached(requirements.maximizeParameters(), requirements.maximizeOptions());
        if (
          get("_pocketProfessorLectures") <
          2 + Math.ceil(Math.sqrt(familiarWeight(myFamiliar()) + weightAdjustment()))
        ) {
          withMacro(secondChainMacro(), () =>
            fightSource.run({
              location: determineDraggableZoneAndEnsureAccess(),
              macro: secondChainMacro(),
            })
          );
        }
        set("_duffo_weightChain", true);
        safeInterrupt();
      }

      // REMAINING EMBEZZLER FIGHTS
      let nextFight = getCopierFight();
      while (nextFight !== null) {
        if (have($skill`Musk of the Moose`) && !have($effect`Musk of the Moose`))
          useSkill($skill`Musk of the Moose`);
        withMacro(copierMacro(), () => {
          if (nextFight) {
            useFamiliar(fairyFamiliar());
            if (
              (have($familiar`Reanimated Reanimator`) || have($familiar`Obtuse Angel`)) &&
              get("_badlyRomanticArrows") === 0 &&
              !nextFight.draggable
            ) {
              if (have($familiar`Obtuse Angel`)) useFamiliar($familiar`Obtuse Angel`);
              else useFamiliar($familiar`Reanimated Reanimator`);
            }

            if (nextFight.draggable) {
              print(`RUNNING NEXT FIGHT: ${nextFight.name}.`, "blue");
              const type =
                nextFight.name === "Backup" ? draggableFight.BACKUP : draggableFight.WANDERER;
              const location = determineDraggableZoneAndEnsureAccess(type);
              setLocation(location);
              freeFightOutfit(nextFight.requirements);
              nextFight.run({ location });
            } else {
              setLocation($location`Noob Cave`);
              freeFightOutfit(nextFight.requirements);
              nextFight.run({ location: $location`Noob Cave` });
            }
          }
        });
        nextFight = getCopierFight();
        if (
          kramcoGuaranteed() &&
          (!nextFight || (nextFight.name !== "Backup" && nextFight.name !== "Digitize"))
        ) {
          doSausage();
        }
        safeInterrupt();
      }

      // Check in case our prof gained enough exp during the profchains
      if (thesisReady()) deliverThesis();
    });
  }
}

type FreeFightOptions = {
  cost?: () => number;
  familiar?: () => Familiar | null;
  requirements?: () => Requirement[];
};

class FreeFight {
  available: () => number | boolean;
  run: () => void;
  options: FreeFightOptions;

  constructor(available: () => number | boolean, run: () => void, options: FreeFightOptions = {}) {
    this.available = available;
    this.run = run;
    this.options = options;
  }

  runAll() {
    if (!this.available()) return;
    if ((this.options.cost ? this.options.cost() : 0) > get("duffo_valueOfFreeFight", 2000)) return;
    while (this.available()) {
      useFamiliar(
        this.options.familiar ? this.options.familiar() ?? freeFightFamiliar() : freeFightFamiliar()
      );
      freeFightMood().execute();
      freeFightOutfit(this.options.requirements ? this.options.requirements() : []);
      safeRestore();
      withMacro(Macro.basicCombat(), this.run);
      // Slot in our Professor Thesis if it's become available
      if (thesisReady()) deliverThesis();
      safeInterrupt();
    }
  }
}

const pygmyMacro = Macro.if_(
  "monstername pygmy bowler",
  Macro.trySkill($skill`Snokebomb`).item($item`Louder Than Bomb`)
)
  .if_(
    "monstername pygmy orderlies",
    Macro.trySkill($skill`Feel Hatred`).item($item`divine champagne popper`)
  )
  .if_("monstername pygmy janitor", Macro.item($item`tennis ball`))
  .if_("monstername time-spinner prank", Macro.basicCombat())
  .abort();

const freeFightSources = [
  // Get a Fish Head from our robortender if available
  new FreeFight(
    () =>
      have($item`Cargo Cultist Shorts`) &&
      have($familiar`Robortender`) &&
      !get("_cargoPocketEmptied") &&
      String(get("cargoPocketsEmptied", "")).indexOf("428") === -1,
    () => cliExecute("cargo monster Mob Penguin Thug"),
    {
      familiar: () => $familiar`Robortender`,
    }
  ),

  new FreeFight(
    () => TunnelOfLove.have() && !TunnelOfLove.isUsed(),
    () => {
      TunnelOfLove.fightAll(
        "LOV Epaulettes",
        "Open Heart Surgery",
        "LOV Extraterrestrial Chocolate"
      );

      visitUrl("choice.php");
      if (handlingChoice()) throw "Did not get all the way through LOV.";
    }
  ),

  new FreeFight(
    () =>
      ChateauMantegna.have() &&
      !ChateauMantegna.paintingFought() &&
      (ChateauMantegna.paintingMonster()?.attributes?.includes("FREE") ?? false),
    () => ChateauMantegna.fightPainting(),
    {
      familiar: () =>
        have($familiar`Robortender`) &&
        $phyla`elf, fish, hobo, penguin, constellation`.some(
          (phylum) => phylum === ChateauMantegna.paintingMonster()?.phylum
        )
          ? $familiar`Robortender`
          : null,
    }
  ),

  new FreeFight(
    () => get("questL02Larva") !== "unstarted" && !get("_eldritchTentacleFought"),
    () => {
      const haveEldritchEssence = itemAmount($item`eldritch essence`) !== 0;
      visitUrl("place.php?whichplace=forestvillage&action=fv_scientist", false);
      if (!handlingChoice()) throw "No choice?";
      runChoice(haveEldritchEssence ? 2 : 1);
    }
  ),

  new FreeFight(
    () => have($skill`Evoke Eldritch Horror`) && !get("_eldritchHorrorEvoked"),
    () => useSkill($skill`Evoke Eldritch Horror`)
  ),

  new FreeFight(
    () => clamp(3 - get("_lynyrdSnareUses"), 0, 3),
    () => use($item`lynyrd snare`),
    {
      cost: () => mallPrice($item`lynyrd snare`),
    }
  ),

  new FreeFight(
    () => have($item`[glitch season reward name]`) && !get("_glitchMonsterFights"),
    () => {
      restoreHp(myMaxhp());
      retrieveItem($item`[glitch season reward name]`);
      visitUrl("inv_eat.php?pwd&whichitem=10207");
      runCombat();
    }
  ),

  // 6	10	0	0	Infernal Seals	variety of items; must be Seal Clubber for 5, must also have Claw of the Infernal Seal in inventory for 10.
  new FreeFight(
    () => {
      const maxSeals = retrieveItem(1, $item`Claw of the Infernal Seal`) ? 10 : 5;
      const maxSealsAvailable =
        get("lastGuildStoreOpen") === myAscensions()
          ? maxSeals
          : Math.min(maxSeals, Math.floor(availableAmount($item`seal-blubber candle`) / 3));
      return myClass() === $class`Seal Clubber`
        ? Math.max(maxSealsAvailable - get("_sealsSummoned"), 0)
        : 0;
    },
    () => {
      const figurine =
        get("lastGuildStoreOpen") === myAscensions()
          ? $item`figurine of a wretched-looking seal`
          : $item`figurine of an ancient seal`;
      retrieveItem(1, figurine);
      retrieveItem(
        get("lastGuildStoreOpen") === myAscensions() ? 1 : 3,
        $item`seal-blubber candle`
      );
      withMacro(
        Macro.startCombat()
          .trySkill($skill`Furious Wallop`)
          .while_("hasskill Lunging Thrust-Smack", Macro.skill($skill`Lunging Thrust-Smack`))
          .while_("hasskill Thrust-Smack", Macro.skill($skill`Thrust-Smack`))
          .while_("hasskill Lunge Smack", Macro.skill($skill`Lunge Smack`))
          .attack()
          .repeat(),
        () => use(figurine)
      );
    },
    {
      requirements: () => [new Requirement(["Club"], {})],
    }
  ),

  new FreeFight(
    () => clamp(10 - get("_brickoFights"), 0, 10),
    () => use($item`BRICKO ooze`),
    {
      cost: () => mallPrice($item`BRICKO eye brick`) + 2 * mallPrice($item`BRICKO brick`),
    }
  ),

  //Initial 9 Pygmy fights
  new FreeFight(
    () =>
      get("questL11Worship") !== "unstarted" ? clamp(9 - get("_drunkPygmyBanishes"), 0, 9) : 0,
    () => {
      putCloset(itemAmount($item`bowling ball`), $item`bowling ball`);
      retrieveItem(clamp(9 - get("_drunkPygmyBanishes"), 0, 9), $item`Bowl of Scorpions`);
      retrieveItem($item`Louder Than Bomb`);
      retrieveItem($item`tennis ball`);
      retrieveItem($item`divine champagne popper`);
      adventureMacro($location`The Hidden Bowling Alley`, pygmyMacro);
    }
  ),

  //10th Pygmy fight. If we have an orb, equip it for this fight, to save for later
  new FreeFight(
    () => get("questL11Worship") !== "unstarted" && get("_drunkPygmyBanishes") === 9,
    () => {
      putCloset(itemAmount($item`bowling ball`), $item`bowling ball`);
      retrieveItem($item`Bowl of Scorpions`);
      adventureMacro($location`The Hidden Bowling Alley`, pygmyMacro);
    },
    {
      requirements: () => [
        new Requirement([], {
          forceEquip: $items`miniature crystal ball`.filter((item) => have(item)),
        }),
      ],
    }
  ),

  //11th pygmy fight if we lack a saber
  new FreeFight(
    () => get("questL11Worship") !== "unstarted" && get("_drunkPygmyBanishes") === 10,
    () => {
      putCloset(itemAmount($item`bowling ball`), $item`bowling ball`);
      retrieveItem($item`Bowl of Scorpions`);
      adventureMacro($location`The Hidden Bowling Alley`, pygmyMacro);
    }
  ),

  //Finally, saber or not, if we have a drunk pygmy in our crystal ball, let it out.
  new FreeFight(
    () =>
      get("questL11Worship") !== "unstarted" &&
      get("crystalBallMonster") === $monster`drunk pygmy` &&
      get("_drunkPygmyBanishes") >= 11,
    () => {
      putCloset(itemAmount($item`bowling ball`), $item`bowling ball`);
      retrieveItem(1, $item`Bowl of Scorpions`);
      adventureMacro($location`The Hidden Bowling Alley`, Macro.abort());
    },
    {
      requirements: () => [
        new Requirement([], {
          forceEquip: $items`miniature crystal ball`.filter((item) => have(item)),
          bonusEquip: new Map([[$item`garbage sticker`, 100]]),
          preventEquip: $items`Staff of Queso Escusado, stinky cheese sword`,
        }),
      ],
    }
  ),

  new FreeFight(
    () =>
      have($item`Time-Spinner`) &&
      $location`The Hidden Bowling Alley`.combatQueue.includes("drunk pygmy") &&
      get("_timeSpinnerMinutesUsed") < 8,
    () => {
      retrieveItem($item`Bowl of Scorpions`);
      Macro.trySkill($skill`Extract`)
        .trySkill($skill`Sing Along`)
        .setAutoAttack();
      visitUrl(`inv_use.php?whichitem=${toInt($item`Time-Spinner`)}`);
      runChoice(1);
      visitUrl(`choice.php?whichchoice=1196&monid=${$monster`drunk pygmy`.id}&option=1`);
    },
    {
      requirements: () => [
        new Requirement([], {
          bonusEquip: new Map([[$item`garbage sticker`, 100]]),
          preventEquip: $items`Staff of Queso Escusado, stinky cheese sword`,
        }),
      ],
    }
  ),

  new FreeFight(
    () => get("_sausageFights") === 0 && have($item`Kramco Sausage-o-Matic™`),
    () => adv1(determineDraggableZoneAndEnsureAccess(), -1, ""),
    {
      requirements: () => [
        new Requirement([], {
          forceEquip: $items`Kramco Sausage-o-Matic™`,
        }),
      ],
    }
  ),

  new FreeFight(
    () => (get("questL11Ron") === "finished" ? 5 - get("_glarkCableUses") : 0),
    () => {
      retrieveItem(5 - get("_glarkCableUses"), $item`glark cable`);
      adventureMacro($location`The Red Zeppelin`, Macro.item($item`glark cable`));
    },
    {
      cost: () => mallPrice($item`glark cable`),
    }
  ),

  // Mushroom garden
  new FreeFight(
    () =>
      (have($item`packet of mushroom spores`) ||
        getCampground()["packet of mushroom spores"] !== undefined) &&
      get("_mushroomGardenFights") === 0,
    () => {
      if (have($item`packet of mushroom spores`)) use($item`packet of mushroom spores`);
      if (SourceTerminal.have()) {
        SourceTerminal.educate([$skill`Extract`, $skill`Portscan`]);
      }
      adventureMacro(
        $location`Your Mushroom Garden`,
        Macro.if_("hasskill macrometeorite", Macro.trySkill($skill`Portscan`)).basicCombat()
      );
      if (have($item`packet of tall grass seeds`)) use($item`packet of tall grass seeds`);
    },
    {
      familiar: () => (have($familiar`Robortender`) ? $familiar`Robortender` : null),
    }
  ),

  // Portscan and mushroom garden
  new FreeFight(
    () =>
      (have($item`packet of mushroom spores`) ||
        getCampground()["packet of mushroom spores"] !== undefined) &&
      getCounters("portscan.edu", 0, 0) === "portscan.edu" &&
      have($skill`Macrometeorite`) &&
      get("_macrometeoriteUses") < 10,
    () => {
      if (have($item`packet of mushroom spores`)) use($item`packet of mushroom spores`);
      if (SourceTerminal.have()) {
        SourceTerminal.educate([$skill`Extract`, $skill`Portscan`]);
      }
      adventureMacro(
        $location`Your Mushroom Garden`,
        Macro.if_("monstername government agent", Macro.skill($skill`Macrometeorite`)).if_(
          "monstername piranha plant",
          Macro.if_("hasskill macrometeorite", Macro.trySkill($skill`Portscan`)).basicCombat()
        )
      );
      if (have($item`packet of tall grass seeds`)) use($item`packet of tall grass seeds`);
    }
  ),

  new FreeFight(
    () => (have($familiar`God Lobster`) ? clamp(3 - get("_godLobsterFights"), 0, 3) : 0),
    () => {
      propertyManager.setChoices({
        1310: 3, //god lob stats
      });
      visitUrl("main.php?fightgodlobster=1");
      runCombat();
      visitUrl("choice.php");
      if (handlingChoice()) runChoice(3);
    },
    {
      familiar: () => $familiar`God Lobster`,
    }
  ),

  // 28	5	0	0	Witchess pieces	must have a Witchess Set; can copy for more
  // Save one for digitizing later?
  new FreeFight(
    () => (Witchess.have() ? clamp(5 - Witchess.fightsDone(), 0, 5) : 0),
    () => Witchess.fightPiece(copiedMonster)
  ),

  new FreeFight(
    () => get("snojoAvailable") && clamp(10 - get("_snojoFreeFights"), 0, 10),
    () => {
      if (get("snojoSetting", "NONE") === "NONE") {
        visitUrl("place.php?whichplace=snojo&action=snojo_controller");
        runChoice(3);
      }
      adv1($location`The X-32-F Combat Training Snowman`, -1, "");
    }
  ),

  new FreeFight(
    () =>
      get("neverendingPartyAlways") && questStep("_questPartyFair") < 999
        ? clamp(10 - get("_neverendingPartyFreeTurns"), 0, 10)
        : 0,
    () => {
      setNepQuestChoicesAndPrepItems();
      adventureMacro(
        $location`The Neverending Party`,
        Macro.trySkill($skill`Feel Pride`).basicCombat()
      );
    }
  ),
];

export function freeFights(): void {
  if (myInebriety() > inebrietyLimit()) return;

  propertyManager.setChoices({
    1387: 2, //"You will go find two friends and meet me here."
    1324: 5, //Fight a random partier
  });

  for (const freeFightSource of freeFightSources) {
    freeFightSource.runAll();
  }
}

function setNepQuestChoicesAndPrepItems() {
  let quest = get("_questPartyFairQuest");
  if (get("_questPartyFair") === "unstarted") {
    visitUrl(toUrl($location`The Neverending Party`));
    quest = get("_questPartyFairQuest");
    if (["food", "booze"].includes(quest)) {
      print("Gerald/ine quest!", "blue");
      runChoice(1); // Accept quest
    } else {
      runChoice(2); // Decline quest
    }
  }

  if (get("lastEncounter") === "Gone Kitchin'" && lastDecision() === 3) {
    print("Found Geraldine!", "blue");
  }
  if (get("lastEncounter") === "Forward to the Back" && lastDecision() === 3) {
    print("Found Gerald!", "blue");
  }

  if (quest === "food") {
    setChoice(1324, 2); // Check out the kitchen
    setChoice(1326, 3); // Talk to the woman
  } else if (quest === "booze") {
    setChoice(1324, 3); // Go to the back yard
    setChoice(1327, 3); // Find Gerald
  } else {
    setChoice(1324, 5); // Pick a fight
  }
}

function thesisReady(): boolean {
  return (
    !get("_thesisDelivered") &&
    have($familiar`Pocket Professor`) &&
    $familiar`Pocket Professor`.experience >= 400
  );
}

function deliverThesis(): void {
  //Set up NEP if we haven't yet
  setNepQuestChoicesAndPrepItems();

  useFamiliar($familiar`Pocket Professor`);
  freeFightMood().execute();
  freeFightOutfit([
    new Requirement(["100 muscle"], {
      forceEquip: $items`Kramco Sausage-o-Matic™`,
    }),
  ]);
  safeRestore();

  if (
    have($item`Powerful Glove`) &&
    !have($effect`Triple-Sized`) &&
    get("_powerfulGloveBatteryPowerUsed") <= 95
  ) {
    cliExecute("checkpoint");
    equip($slot`acc1`, $item`Powerful Glove`);
    ensureEffect($effect`Triple-Sized`);
    outfit("checkpoint");
  }
  cliExecute("gain 1800 muscle");
  do {
    adventureMacro(
      $location`The Neverending Party`,
      Macro.if_("monstername time-spinner prank", Macro.meatKill()).skill(
        $skill`deliver your thesis!`
      )
    );
  } while (get("lastEncounter") === "time-spinner prank" && !get("_thesisDelivered"));
}

export function safeRestore(): void {
  if (myHp() < myMaxhp() * 0.5) {
    restoreHp(myMaxhp() * 0.9);
  }
  if (myMp() < 50 && myMaxmp() > 50) {
    restoreMp(50);
  }
}

function doSausage() {
  if (!kramcoGuaranteed()) return;
  useFamiliar(freeFightFamiliar());
  freeFightOutfit([new Requirement([], { forceEquip: $items`Kramco Sausage-o-Matic™` })]);
  if (getAutoAttack() > 0) setAutoAttack(0);
  adventureMacro(determineDraggableZoneAndEnsureAccess(), Macro.basicCombat());
}
