import { canAdv } from "canadv.ash";
import {
  abort,
  autosellPrice,
  buy,
  cliExecute,
  familiarWeight,
  haveEquipped,
  haveSkill,
  mallPrice,
  myBjornedFamiliar,
  myEnthronedFamiliar,
  myFamiliar,
  myLocation,
  myPath,
  myTurncount,
  numericModifier,
  print,
  retrieveItem,
  toUrl,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $locations,
  $skill,
  get,
  getKramcoWandererChance,
  Guzzlr,
  have,
  maximizeCached,
  MaximizeOptions,
  PropertiesManager,
  property,
  set,
  SongBoom,
  SourceTerminal,
} from "libram";
import { estimatedTurns } from "./globalvars";

export enum BonusEquipMode {
  FREE,
  EMBEZZLER,
  BARF,
  DMT,
}

export const propertyManager = new PropertiesManager();

export const baseMeat =
  SongBoom.have() &&
  (SongBoom.songChangesLeft() > 0 || SongBoom.song() === "Total Eclipse of Your Meat")
    ? 275
    : 250;

const MPA = get("valueOfAdventure");

export function safeInterrupt(): void {
  if (get<boolean>("duffo_interrupt", false)) {
    set("duffo_interrupt", false);
    abort("User interrupt requested. Stopping Garbage Collector.");
  }
}

export function setChoice(adventure: number, value: number): void {
  propertyManager.setChoices({ [adventure]: value });
}

export function ensureEffect(effect: Effect): void {
  if (!have(effect)) cliExecute(effect.default);
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

/**
 * Sum an array of numbers.
 * @param addends Addends to sum.
 */
export function sum(addends: number[]): number {
  return addends.reduce((s, n) => s + n, 0);
}

export function mapMonster(location: Location, monster: Monster): void {
  if (
    haveSkill($skill`Map the Monsters`) &&
    !get("mappingMonsters") &&
    get("_monstersMapped") < 3
  ) {
    useSkill($skill`Map the Monsters`);
  }

  if (!get("mappingMonsters")) throw "Failed to setup Map the Monsters.";

  const mapPage = visitUrl(toUrl(location), false, true);
  if (!mapPage.includes("Leading Yourself Right to Them")) throw "Something went wrong mapping.";

  const fightPage = visitUrl(
    `choice.php?pwd&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=${monster.id}`
  );
  if (!fightPage.includes(monster.name)) throw "Something went wrong starting the fight.";
}

export function argmax<T>(values: [T, number][]): T {
  return values.reduce(([minValue, minScore], [value, score]) =>
    score > minScore ? [value, score] : [minValue, minScore]
  )[0];
}

export function questStep(questName: string): number {
  const stringStep = property.getString(questName);
  if (stringStep === "unstarted" || stringStep === "") return -1;
  else if (stringStep === "started") return 0;
  else if (stringStep === "finished") return 999;
  else {
    if (stringStep.substring(0, 4) !== "step") {
      throw "Quest state parsing error.";
    }
    return parseInt(stringStep.substring(4), 10);
  }
}

interface ZonePotion {
  zone: string;
  effect: Effect;
  potion: Item;
}

const zonePotions: ZonePotion[] = [
  {
    zone: "Spaaace",
    effect: $effect`Transpondent`,
    potion: $item`transporter transponder`,
  },
  {
    zone: "Wormwood",
    effect: $effect`Absinthe-Minded`,
    potion: $item`tiny bottle of absinthe`,
  },
  {
    zone: "RabbitHole",
    effect: $effect`Down the Rabbit Hole`,
    potion: $item`"DRINK ME" potion`,
  },
];

function acceptBestGuzzlrQuest() {
  if (!Guzzlr.isQuestActive()) {
    if (!Guzzlr.haveFullBronzeBonus()) {
      Guzzlr.acceptBronze();
    } else if (Guzzlr.canGold()) {
      Guzzlr.acceptGold();
    } else {
      Guzzlr.acceptBronze();
    }
  }
}

export enum draggableFight {
  BACKUP,
  WANDERER,
}

function untangleDigitizes(turnCount: number, chunks: number): number {
  const turnsPerChunk = turnCount / chunks;
  const monstersPerChunk = Math.sqrt((turnsPerChunk + 3) / 5 + 1 / 4) - 1 / 2;
  return Math.floor(chunks * monstersPerChunk);
}

function digitizedMonstersRemaining(): number {
  if (!SourceTerminal.have()) return 0;

  const digitizesLeft = clamp(3 - get("_sourceTerminalDigitizeUses"), 0, 3);
  if (digitizesLeft === 3) return untangleDigitizes(estimatedTurns(), 3);

  const monsterCount = get("_sourceTerminalDigitizeMonsterCount") + 1;

  const relayArray = get("relayCounters").match(/(d+):Digitize Monster/);
  const nextDigitizeEncounter = relayArray ? parseInt(relayArray[1]) : myTurncount();

  const turnsLeftAtNextMonster = estimatedTurns() - (nextDigitizeEncounter - myTurncount());
  const turnsAtLastDigitize = turnsLeftAtNextMonster + ((monsterCount + 1) * monsterCount * 5 - 3);
  return untangleDigitizes(turnsAtLastDigitize, digitizesLeft + 1);
}

export function setDefaultChoiceHandling(): void {
  // Black forest noncombats; fight blackberry bush
  setChoice(923, 1);
  setChoice(924, 1);
  setChoice(1340, 3); // Doctor bag choice; want to ignore for the day.
}

export function determineDraggableZoneAndEnsureAccess(
  type: draggableFight = draggableFight.WANDERER
): Location {
  // Set choice handling to ensure script doesn't throw up on an NC
  setDefaultChoiceHandling();

  const defaultLocation =
    get("_spookyAirportToday") || get("spookyAirportAlways")
      ? $location`The Deep Dark Jungle`
      : $location`Noob Cave`;
  if (!Guzzlr.have()) return defaultLocation;

  const predictedWanderers =
    digitizedMonstersRemaining() +
    (have($item`"I Voted!" sticker`) ? clamp(3 - get("_voteFreeFights"), 0, 3) : 0);
  const predictedBackups = have($item`backup camera`) ? clamp(11 - get("_backUpUses"), 0, 11) : 0;
  const turnsLeftOnThisQuest = Math.ceil(
    (100 - get("guzzlrDeliveryProgress")) / (10 - get("_guzzlrDeliveries"))
  );

  acceptBestGuzzlrQuest();

  const currentGuzzlrZone = Guzzlr.getLocation() || $location`none`;
  if (
    !testZoneAndUsePotionToAccess() ||
    (!testZoneForWanderers(currentGuzzlrZone) &&
      predictedWanderers > predictedBackups &&
      predictedBackups < turnsLeftOnThisQuest) ||
    (!testZoneForBackups(currentGuzzlrZone) && predictedBackups >= predictedWanderers)
  ) {
    Guzzlr.abandon();
  }
  acceptBestGuzzlrQuest();

  const guzzlZone = Guzzlr.getLocation();
  if (!testZoneAndUsePotionToAccess()) return defaultLocation;
  if (
    !guzzlZone ||
    (type === draggableFight.WANDERER && !testZoneForWanderers(guzzlZone)) ||
    (type === draggableFight.BACKUP && !testZoneForBackups(guzzlZone))
  ) {
    return defaultLocation;
  }

  if (Guzzlr.getTier() === "platinum") {
    zonePotions.forEach((place) => {
      if (guzzlZone.zone === place.zone && !have(place.effect)) {
        if (!have(place.potion)) {
          buy(1, place.potion, 10000);
        }
        use(1, place.potion);
      }
    });
    if (!Guzzlr.havePlatinumBooze()) {
      print("It's time to get buttery", "purple");
      cliExecute("make buttery boy");
    }
  } else {
    const guzzlrBooze = Guzzlr.getBooze();
    if (!guzzlrBooze) {
      return defaultLocation;
    } else if (!have(guzzlrBooze)) {
      print("just picking up some booze before we roll", "blue");
      retrieveItem(guzzlrBooze);
    }
  }
  return guzzlZone;
}

function testZoneAndUsePotionToAccess() {
  const guzzlZone = Guzzlr.getLocation();
  if (!guzzlZone) return false;
  const forbiddenZones: string[] = [""]; //can't stockpile these potions,
  if (!get("_spookyAirportToday") && !get("spookyAirportAlways")) {
    forbiddenZones.push("Conspiracy Island");
  }
  if (!get("_stenchAirportToday") && !get("stenchAirportAlways")) {
    forbiddenZones.push("Dinseylandfill");
  }
  if (!get("_hotAirportToday") && !get("hotAirportAlways")) {
    forbiddenZones.push("That 70s Volcano");
  }
  if (!get("_coldAirportToday") && !get("coldAirportAlways")) {
    forbiddenZones.push("The Glaciest");
  }
  if (!get("_sleazeAirportToday") && !get("sleazeAirportAlways")) {
    forbiddenZones.push("Spring Break Beach");
  }

  const blacklist = $locations`The Oasis, The Bubblin' Caldera, Barrrney's Barrr, The F'c'le, The Poop Deck, Belowdecks, 8-Bit Realm, Madness Bakery, The Secret Government Laboratory`;

  if (myPath() === "Two Crazy Random Summer") {
    // can't access these zones in 2CRS
    blacklist.concat(
      $locations`Domed City of Grimacia, Domed City of Ronaldus, Hamburglaris Shield Generator, The Red Queen's Garden, The Mouldering Mansion, The Rogue Windmill, The Stately Pleasure Dome`
    );
  }

  if (
    forbiddenZones.includes(guzzlZone.zone) ||
    blacklist.includes(guzzlZone) ||
    guzzlZone.environment === "underwater" ||
    !canAdv(guzzlZone, false)
  ) {
    return false;
  } else {
    return true;
  }
}

function testZoneForBackups(location: Location): boolean {
  const backupBlacklist = $locations`The Overgrown Lot, The Skeleton Store, The Mansion of Dr. Weirdeaux`;
  return !backupBlacklist.includes(location) && location.combatPercent >= 100;
}

function testZoneForWanderers(location: Location): boolean {
  const wandererBlacklist = $locations`The Batrat and Ratbat Burrow, Guano Junction, The Beanbat Chamber`;
  return !wandererBlacklist.includes(location) && location.wanderers;
}

export class Requirement {
  maximizeParameters_: string[];
  maximizeOptions_: MaximizeOptions;

  constructor(maximizeParameters_: string[], maximizeOptions_: MaximizeOptions) {
    this.maximizeParameters_ = maximizeParameters_;
    this.maximizeOptions_ = maximizeOptions_;
  }

  maximizeParameters(): string[] {
    return this.maximizeParameters_;
  }

  maximizeOptions(): MaximizeOptions {
    return this.maximizeOptions_;
  }

  merge(other: Requirement): Requirement {
    const optionsA = this.maximizeOptions();
    const optionsB = other.maximizeOptions();
    return new Requirement([...this.maximizeParameters(), ...other.maximizeParameters()], {
      ...optionsA,
      ...optionsB,
      bonusEquip: new Map([
        ...(optionsA.bonusEquip?.entries() ?? []),
        ...(optionsB.bonusEquip?.entries() ?? []),
      ]),
      forceEquip: [...(optionsA.forceEquip ?? []), ...(optionsB.forceEquip ?? [])],
      preventEquip: [...(optionsA.preventEquip ?? []), ...(optionsB.preventEquip ?? [])],
      onlySlot: [...(optionsA.onlySlot ?? []), ...(optionsB.onlySlot ?? [])],
      preventSlot: [...(optionsA.preventSlot ?? []), ...(optionsB.preventSlot ?? [])],
    });
  }

  maximize(): void {
    maximizeCached(this.maximizeParameters_, this.maximizeOptions_);
  }

  static empty = new Requirement([], {});

  static merge(allRequirements: Requirement[]): Requirement {
    return allRequirements.reduce((x, y) => x.merge(y));
  }
}

export function tryFeast(familiar: Familiar): void {
  if (have(familiar)) {
    useFamiliar(familiar);
    use($item`moveable feast`);
  }
}

const valueMap: Map<Item, number> = new Map();

const MALL_VALUE_MODIFIER = 0.9;

export function saleValue(...items: Item[]): number {
  return (
    items
      .map((item) => {
        if (valueMap.has(item)) return valueMap.get(item) || 0;
        if (item.discardable) {
          valueMap.set(
            item,
            mallPrice(item) > Math.max(2 * autosellPrice(item), 100)
              ? MALL_VALUE_MODIFIER * mallPrice(item)
              : autosellPrice(item)
          );
        } else {
          valueMap.set(item, mallPrice(item) > 100 ? MALL_VALUE_MODIFIER * mallPrice(item) : 0);
        }
        return valueMap.get(item) || 0;
      })
      .reduce((s, price) => s + price, 0) / items.length
  );
}

export function coinmasterPrice(item: Item): number {
  // TODO: Get this from coinmasters.txt if more are needed
  switch (item) {
    case $item`viral video`:
      return 20;
    case $item`plus one`:
      return 74;
    case $item`gallon of milk`:
      return 100;
    case $item`print screen button`:
      return 111;
    case $item`daily dungeon malware`:
      return 150;
  }

  return 0;
}

export function kramcoGuaranteed(): boolean {
  return have($item`Kramco Sausage-o-Matic™`) && getKramcoWandererChance() >= 1;
}

export function leprechaunMultiplier(familiar: Familiar): number {
  if (familiar === $familiar`Mutant Cactus Bud`)
    return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item`none`);
  const meatBonus = numericModifier(familiar, "Meat Drop", 1, $item`none`);
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}

export function fairyMultiplier(familiar: Familiar): number {
  if (familiar === $familiar`Mutant Fire Ant`)
    return numericModifier(familiar, "Fairy Effectiveness", 1, $item`none`);
  const itemBonus = numericModifier(familiar, "Item Drop", 1, $item`none`);
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}

let monsterManuelCached: boolean | undefined = undefined;
export function monsterManuelAvailable(): boolean {
  if (monsterManuelCached !== undefined) return Boolean(monsterManuelCached);
  monsterManuelCached = visitUrl("questlog.php?which=3").includes("Monster Manuel");
  return Boolean(monsterManuelCached);
}

function maxCarriedFamiliarDamage(familiar: Familiar): number {
  // Only considering familiars we reasonably may carry
  switch (familiar) {
    // +5 to Familiar Weight
    case $familiar`Animated Macaroni Duck`:
      return 50;
    case $familiar`Barrrnacle`:
    case $familiar`Gelatinous Cubeling`:
    case $familiar`Penguin Goodfella`:
      return 30;
    case $familiar`Misshapen Animal Skeleton`:
      return 40 + numericModifier("Spooky Damage");

    // +25% Meat from Monsters
    case $familiar`Hobo Monkey`:
      return 25;

    // +20% Meat from Monsters
    case $familiar`Grouper Groupie`:
      // Double sleaze damage at Barf Mountain
      return (
        25 + numericModifier("Sleaze Damage") * (myLocation() === $location`Barf Mountain` ? 2 : 1)
      );
    case $familiar`Jitterbug`:
      return 20;
    case $familiar`Mutant Cactus Bud`:
      // 25 poison damage (25+12+6+3+1)
      return 47;
    case $familiar`Robortender`:
      return 20;
  }

  return 0;
}

function maxFamiliarDamage(familiar: Familiar): number {
  switch (familiar) {
    case $familiar`Cocoabo`:
      return familiarWeight(familiar) + 3;
    case $familiar`Feather Boa Constrictor`:
      // Double sleaze damage at Barf Mountain
      return (
        familiarWeight(familiar) +
        3 +
        numericModifier("Sleaze Damage") * (myLocation() === $location`Barf Mountain` ? 2 : 1)
      );
    case $familiar`Ninja Pirate Zombie Robot`:
      return Math.floor((familiarWeight(familiar) + 3) * 1.5);
  }
  return 0;
}

export function maxPassiveDamage(): number {
  // Only considering passive damage sources we reasonably may have
  const vykeaMaxDamage =
    get("_VYKEACompanionLevel") > 0 ? 10 * get("_VYKEACompanionLevel") + 10 : 0;

  const crownMaxDamage = haveEquipped($item`Crown of Thrones`)
    ? maxCarriedFamiliarDamage(myEnthronedFamiliar())
    : 0;

  const bjornMaxDamage = haveEquipped($item`Buddy Bjorn`)
    ? maxCarriedFamiliarDamage(myBjornedFamiliar())
    : 0;

  const familiarMaxDamage = maxFamiliarDamage(myFamiliar());

  return vykeaMaxDamage + crownMaxDamage + bjornMaxDamage + familiarMaxDamage;
}

export function gnomeWeightValue(): number {
  // Assume rough weight of 160
  const gnomeWeight = 160;
  return MPA * (0.001 / (1 - 0.001 * gnomeWeight) ** 2);
}
