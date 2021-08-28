import {
  bjornifyFamiliar,
  cliExecute,
  enthroneFamiliar,
  equip,
  equippedAmount,
  familiarWeight,
  fullnessLimit,
  getClanLounge,
  getCounters,
  getWorkshed,
  haveEffect,
  haveEquipped,
  inebrietyLimit,
  mallPrice,
  myClass,
  myFamiliar,
  myFullness,
  myInebriety,
  numericModifier,
  retrieveItem,
  toSlot,
  totalTurnsPlayed,
  useFamiliar,
  visitUrl,
  weightAdjustment,
} from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $item,
  $items,
  $skill,
  $slot,
  $slots,
  get,
  getFoldGroup,
  getKramcoWandererChance,
  have,
  maximizeCached,
  set,
  Witchess,
} from "libram";
import { pickBjorn } from "./bjorn";
import { withVIPClan } from "./clan";
import { estimatedTurns, globalOptions } from "./globalvars";
import { baseMeat, BonusEquipMode, Requirement, saleValue } from "./lib";

const bestAdventuresFromPants =
  Item.all()
    .filter(
      (item) =>
        toSlot(item) === $slot`pants` && have(item) && numericModifier(item, "Adventures") > 0
    )
    .map((pants) => numericModifier(pants, "Adventures"))
    .sort((a, b) => b - a)[0] || 0;

export function freeFightOutfit(requirements: Requirement[] = []): void {
  const equipMode =
    myFamiliar() === $familiar`Machine Elf` ? BonusEquipMode.DMT : BonusEquipMode.FREE;
  const bjornChoice = pickBjorn(equipMode);

  const compiledRequirements = Requirement.merge([
    ...requirements,
    new Requirement(
      myFamiliar() === $familiar`Pocket Professor` ? ["Familiar Experience"] : ["Familiar Weight"],
      {
        bonusEquip: new Map([...dropsItems(equipMode), ...pantsgiving(), ...cheeses()]),
      }
    ),
  ]);
  const bjornAlike =
    have($item`Buddy Bjorn`) &&
    !(
      compiledRequirements.maximizeOptions_.forceEquip &&
      compiledRequirements.maximizeOptions_.forceEquip.some(
        (equipment) => toSlot(equipment) === $slot`back`
      )
    )
      ? $item`Buddy Bjorn`
      : $item`Crown of Thrones`;
  const finalRequirements = compiledRequirements.merge(
    new Requirement([], {
      bonusEquip: new Map([
        [
          bjornAlike,
          !bjornChoice.dropPredicate || bjornChoice.dropPredicate()
            ? bjornChoice.meatVal() * bjornChoice.probability
            : 0,
        ],
      ]),
      preventEquip:
        bjornAlike === $item`Buddy Bjorn` ? $items`Crown of Thrones` : $items`Buddy Bjorn`,
      preventSlot: $slots`crown-of-thrones, buddy-bjorn`,
    })
  );

  maximizeCached(finalRequirements.maximizeParameters(), finalRequirements.maximizeOptions());
  if (haveEquipped($item`Buddy Bjorn`)) bjornifyFamiliar(bjornChoice.familiar);
  if (haveEquipped($item`Crown of Thrones`)) enthroneFamiliar(bjornChoice.familiar);
  if (haveEquipped($item`Snow Suit`) && get("snowsuit") !== "nose") cliExecute("snowsuit nose");
}

export function refreshLatte(): boolean {
  // Refresh unlocked latte ingredients
  if (have($item`latte lovers member's mug`)) {
    visitUrl("main.php?latte=1", false);
  }

  return have($item`latte lovers member's mug`);
}

export function nepOutfit(requirement = new Requirement(["5 Item Drop"], {})): void {
  const forceEquip = [];
  const equipMode =
    getCounters("Digitize Monster", 0, 0) === "" ? BonusEquipMode.BARF : BonusEquipMode.FREE;
  const bjornChoice = pickBjorn(equipMode);

  if (myInebriety() > inebrietyLimit()) {
    forceEquip.push($item`Drunkula's wineglass`);
  } else {
    if (getKramcoWandererChance() > 0.99 && have($item`Kramco Sausage-o-Matic™`)) {
      forceEquip.push($item`Kramco Sausage-o-Matic™`);
    }
    // TODO: Fix pointer finger ring construction.
    if (myClass() !== $class`Seal Clubber`) {
      if (have($item`haiku katana`)) {
        forceEquip.push($item`haiku katana`);
      } else if (have($item`unwrapped knock-off retro superhero cape`)) {
        if (!have($item`ice nine`)) retrieveItem($item`ice nine`);
        forceEquip.push($item`ice nine`);
      }
    }
    if (
      have($item`protonic accelerator pack`) &&
      get("questPAGhost") === "unstarted" &&
      get("nextParanormalActivity") <= totalTurnsPlayed() &&
      !forceEquip.includes($item`ice nine`)
    ) {
      forceEquip.push($item`protonic accelerator pack`);
    }
    forceEquip.push($item`mafia pointer finger ring`);
  }
  if (myFamiliar() === $familiar`Obtuse Angel`) {
    forceEquip.push($item`quake of arrows`);
    if (!have($item`quake of arrows`)) retrieveItem($item`quake of arrows`);
  }
  const bjornAlike =
    have($item`Buddy Bjorn`) && !forceEquip.some((item) => toSlot(item) === $slot`back`)
      ? $item`Buddy Bjorn`
      : $item`Crown of Thrones`;
  const compiledRequirements = requirement.merge(
    new Requirement([], {
      forceEquip,
      bonusEquip: new Map([
        ...dropsItems(equipMode),
        ...pantsgiving(),
        ...cheeses(),
        [
          bjornAlike,
          !bjornChoice.dropPredicate || bjornChoice.dropPredicate()
            ? bjornChoice.meatVal() * bjornChoice.probability
            : 0,
        ],
      ]),
      preventEquip: [
        ...$items`broken champagne bottle, unwrapped knock-off retro superhero cape`,
        bjornAlike === $item`Buddy Bjorn` ? $item`Crown of Thrones` : $item`Buddy Bjorn`,
      ],
      preventSlot: $slots`crown-of-thrones, buddy-bjorn`,
    })
  );

  maximizeCached(compiledRequirements.maximizeParameters(), compiledRequirements.maximizeOptions());

  if (equippedAmount($item`ice nine`) > 0) {
    equip($item`unwrapped knock-off retro superhero cape`);
  }
  if (haveEquipped($item`Buddy Bjorn`)) bjornifyFamiliar(bjornChoice.familiar);
  if (haveEquipped($item`Crown of Thrones`)) enthroneFamiliar(bjornChoice.familiar);
  if (haveEquipped($item`Snow Suit`) && get("snowsuit") !== "nose") cliExecute("snowsuit nose");
}

function remainingRunaways(familiar: Familiar) {
  const weight = familiarWeight(familiar) + weightAdjustment();
  return Math.floor(weight / 5) - get("_banderRunaways");
}

export function tryConfigureBanderRuns(): boolean {
  // Try bander or boots.
  const runFamiliar = have($familiar`Pair of Stomping Boots`)
    ? $familiar`Pair of Stomping Boots`
    : $familiar`Frumious Bandersnatch`;

  if (get("_duffo_runFamiliarStage", 0) === 0) {
    useFamiliar(runFamiliar);
    nepOutfit();
    if (remainingRunaways(runFamiliar) > 0) {
      return true;
    } else {
      set("_duffo_runFamiliarStage", 1);
    }
  }

  if (get("_duffo_runFamiliarStage", 0) === 1) {
    useFamiliar(runFamiliar);
    nepOutfit(new Requirement(["100 Familiar Weight", "5 Item Drop"], {}));
    if (remainingRunaways(runFamiliar) > 0) {
      return true;
    } else {
      set("_duffo_runFamiliarStage", 2);
    }
  }

  if (get("_duffo_runFamiliarStage", 0) === 2) {
    useFamiliar(runFamiliar);
    nepOutfit(new Requirement(["100 Familiar Weight", "5 Item Drop"], {}));
    const beachHeadsUsed: number | string = get("_beachHeadsUsed");
    if (have($item`Beach Comb`) && !beachHeadsUsed.toString().split(",").includes("10")) {
      cliExecute("beach head familiar");
    }
    if (Witchess.have() && !get("_witchessBuff")) {
      cliExecute("witchess");
    }
    if (get("_poolGames") < 3 && !get("_duffo_noPoolTable", false)) {
      withVIPClan(() => {
        if (getClanLounge()["Clan pool table"] !== undefined) {
          while (get("_poolGames") < 3) cliExecute("pool aggressive");
        } else set("_duffo_noPoolTable", true);
      });
    }

    if (
      remainingRunaways(runFamiliar) +
        (have($skill`Meteor Lore`) && get("_meteorShowerUses") < 5 ? 4 : 0) >
      0
    ) {
      return true;
    } else {
      set("_duffo_runFamiliarStage", 3);
    }
  }

  // TODO: Add potions stage.

  return false;
}

const pantsgivingBonuses = new Map<number, number>();
function pantsgiving() {
  if (!have($item`Pantsgiving`)) return new Map<Item, number>();
  const count = get("_pantsgivingCount");
  const turnArray = [5, 50, 500, 5000];
  const index =
    myFullness() === fullnessLimit()
      ? get("_pantsgivingFullness")
      : turnArray.findIndex((x) => count < x);
  const turns = turnArray[index] || 50000;

  if (turns - count > estimatedTurns()) return new Map<Item, number>();

  const cachedBonus = pantsgivingBonuses.get(turns);
  if (cachedBonus) return new Map([[$item`Pantsgiving`, cachedBonus]]);

  const expectedSinusTurns = getWorkshed() === $item`portable Mayo Clinic` ? 100 : 50;
  const expectedUseableSinusTurns = globalOptions.ascending
    ? Math.min(
        estimatedTurns() - haveEffect($effect`Kicked in the Sinuses`),
        expectedSinusTurns,
        estimatedTurns() - (turns - count)
      )
    : expectedSinusTurns;
  const sinusVal = expectedUseableSinusTurns * 1.0 * baseMeat;
  const fullnessValue =
    sinusVal +
    get("valueOfAdventure") * 6.5 -
    (mallPrice($item`jumping horseradish`) + mallPrice($item`Special Seasoning`));
  const pantsgivingBonus = fullnessValue / (turns * 0.9);
  pantsgivingBonuses.set(turns, pantsgivingBonus);
  return new Map<Item, number>([[$item`Pantsgiving`, pantsgivingBonus]]);
}
const haveSomeCheese = getFoldGroup($item`stinky cheese diaper`).some((item) => have(item));
function cheeses() {
  return haveSomeCheese &&
    !globalOptions.ascending &&
    get("_stinkyCheeseCount") < 100 &&
    estimatedTurns() >= 100 - get("_stinkyCheeseCount")
    ? new Map<Item, number>(
        getFoldGroup($item`stinky cheese diaper`).map((item) => [
          item,
          get("valueOfAdventure") * (10 - bestAdventuresFromPants) * (1 / 100),
        ])
      )
    : [];
}

function snowSuit(equipMode: BonusEquipMode) {
  // Ignore for EMBEZZLER
  // Ignore for DMT, assuming mafia might get confused about the drop by the weird combats
  if (
    !have($item`Snow Suit`) ||
    get("_carrotNoseDrops") >= 3 ||
    [BonusEquipMode.EMBEZZLER, BonusEquipMode.DMT].some((mode) => mode === equipMode)
  )
    return new Map<Item, number>([]);

  return new Map<Item, number>([[$item`Snow Suit`, saleValue($item`carrot nose`) / 10]]);
}

function mayflowerBouquet(equipMode: BonusEquipMode) {
  // +40% meat drop 12.5% of the time (effectively 5%)
  // Drops flowers 50% of the time, wiki says 5-10 a day.
  // Theorized that flower drop rate drops off but no info on wiki.
  // During testing I got 4 drops then the 5th took like 40 more adventures
  // so let's just assume rate drops by 11% with a min of 1% ¯\_(ツ)_/¯

  // Ignore for EMBEZZLER
  // Ignore for DMT, assuming mafia might get confused about the drop by the weird combats
  if (
    !have($item`Mayflower bouquet`) ||
    [BonusEquipMode.EMBEZZLER, BonusEquipMode.DMT].some((mode) => mode === equipMode)
  )
    return new Map<Item, number>([]);

  const sporadicMeatBonus = (40 * 0.125 * (equipMode === BonusEquipMode.BARF ? baseMeat : 0)) / 100;
  const averageFlowerValue =
    saleValue(
      ...$items`tin magnolia, upsy daisy, lesser grodulated violet, half-orchid, begpwnia`
    ) * Math.max(0.01, 0.5 - get("_mayflowerDrops") * 0.11);
  return new Map<Item, number>([
    [
      $item`Mayflower bouquet`,
      (get("_mayflowerDrops") < 10 ? averageFlowerValue : 0) + sporadicMeatBonus,
    ],
  ]);
}

function dropsItems(equipMode: BonusEquipMode) {
  const isFree = [BonusEquipMode.FREE, BonusEquipMode.DMT].includes(equipMode);
  return new Map<Item, number>([
    [$item`familiar scrapbook`, 50],
    [$item`mafia thumb ring`, !isFree ? 500 : 0],
    [$item`lucky gold ring`, 400],
    [$item`Mr. Cheeng's spectacles`, 250],
    [$item`pantogram pants`, get("_pantogramModifier").includes("Drops Items") ? 100 : 0],
    [$item`Mr. Screege's spectacles`, 180],
    ...snowSuit(equipMode),
    ...mayflowerBouquet(equipMode),
  ]);
}
