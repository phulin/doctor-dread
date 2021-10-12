import {
  availableAmount,
  buy,
  chew,
  cliExecute,
  drink,
  drinksilent,
  eat,
  equip,
  fullnessLimit,
  getCampground,
  getChateau,
  getProperty,
  getWorkshed,
  haveEffect,
  inebrietyLimit,
  itemAmount,
  mallPrice,
  maximize,
  myAdventures,
  myClass,
  myFamiliar,
  myFullness,
  myInebriety,
  myLevel,
  myMaxhp,
  mySpleenUse,
  print,
  retrieveItem,
  setProperty,
  spleenLimit,
  sweetSynthesis,
  toInt,
  use,
  useFamiliar,
  useSkill,
} from "kolmafia";
import {
  $class,
  $classes,
  $effect,
  $familiar,
  $item,
  $items,
  $skill,
  get,
  have,
  maximizeCached,
} from "libram";
import { acquire } from "./acquire";
import { estimatedTurns, globalOptions } from "./globalvars";
import { cheaper, clamp, ensureEffect, setChoice } from "./lib";

const MPA = get("valueOfAdventure");

const saladFork = $item`Ol' Scratch's salad fork`;
const frostyMug = $item`Frosty's frosty mug`;

function eatSafe(qty: number, item: Item) {
  acquire(qty, $item`Special Seasoning`);
  acquire(qty, item);
  if (!eat(qty, item)) throw "Failed to eat safely";
}

function drinkSafe(qty: number, item: Item) {
  const prevDrunk = myInebriety();
  ensureEffect($effect`Ode to Booze`);
  acquire(qty, item);
  if (!drink(qty, item)) throw "Failed to drink safely";
  if (item.inebriety === 1 && prevDrunk === qty + myInebriety() - 1) {
    // sometimes mafia does not track the mime army shot glass property
    setProperty("_mimeArmyShotglassUsed", "true");
  }
}

function propTrue(prop: string | boolean) {
  if (typeof prop === "boolean") {
    return prop as boolean;
  } else {
    return get(prop);
  }
}

function useIfUnused(item: Item, prop: string | boolean, maxPrice: number) {
  if (!propTrue(prop)) {
    if (mallPrice(item) <= maxPrice) {
      acquire(1, item, maxPrice);
      use(1, item);
    } else {
      print(`Skipping ${item.name}; too expensive (${mallPrice(item)} > ${maxPrice}).`);
    }
  }
}

const valuePerSpleen = (item: Item) => (adventureGain(item) * MPA - mallPrice(item)) / item.spleen;
let savedBestSpleenItem: Item | null = null;
let savedPotentialSpleenItems: Item[] | null = null;
function getBestSpleenItems() {
  if (savedBestSpleenItem === null || savedPotentialSpleenItems === null) {
    savedPotentialSpleenItems = $items`octolus oculus, transdermal smoke patch, antimatter wad, voodoo snuff, blood-drive sticker`;
    savedPotentialSpleenItems.sort((x, y) => valuePerSpleen(y) - valuePerSpleen(x));
    for (const spleenItem of savedPotentialSpleenItems) {
      print(`${spleenItem} value/spleen: ${valuePerSpleen(spleenItem)}`);
    }
    savedBestSpleenItem = savedPotentialSpleenItems[0];
  }

  return { bestSpleenItem: savedBestSpleenItem, potentialSpleenItems: savedPotentialSpleenItems };
}

function eatSpleen(qty: number, item: Item) {
  if (mySpleenUse() < 5) throw "No spleen to clear with this.";
  acquire(qty, item);
  eatSafe(qty, item);
}

function drinkSpleen(qty: number, item: Item) {
  if (mySpleenUse() < 5) throw "No spleen to clear with this.";
  drinkSafe(qty, item);
}

function adventureGain(item: Item) {
  if (item.adventures.includes("-")) {
    const [min, max] = item.adventures.split("-").map((s) => parseInt(s, 10));
    return (min + max) / 2.0;
  } else {
    return parseInt(item.adventures, 10);
  }
}

function fillSomeSpleen() {
  const { bestSpleenItem } = getBestSpleenItems();
  print(`Spleen item: ${bestSpleenItem}`);
  fillSpleenWith(bestSpleenItem);
}

export function fillAllSpleen(): void {
  const { potentialSpleenItems } = getBestSpleenItems();
  for (const spleenItem of potentialSpleenItems) {
    print(`Filling spleen with ${spleenItem}.`);
    fillSpleenWith(spleenItem);
  }
}

export function fillSpleenSynthesis(): void {
  const needed = Math.floor((700 - haveEffect($effect`Synthesis: Collection`)) / 30);
  sweetSynthesis(Math.min(needed, spleenLimit() - mySpleenUse()), $effect`Synthesis: Collection`);
}

function fillSpleenWith(spleenItem: Item) {
  if (mySpleenUse() + spleenItem.spleen <= spleenLimit()) {
    // (adventureGain * spleenA + adventures) * 1.04 + 40 = 30 * spleenB + synthTurns
    // spleenA + spleenB = spleenTotal
    // (adventureGain * (spleenTotal - spleenB) + adventures) * 1.04 + 40 = 30 * spleenB + synthTurns
    // 1.04 * adventureGain * (spleenTotal - spleenB) + 1.04 * adventures + 40 = 30 * spleenB + synthTurns
    // 1.04 * adventureGain * spleenTotal - 1.04 * adventureGain * spleenB + 1.04 * adventures + 40 = 30 * spleenB + synthTurns
    // 1.04 * adventureGain * spleenTotal + 1.04 * adventures + 40 = 30 * spleenB + synthTurns + 1.04 * adventureGain * spleenB
    // (1.04 * adventureGain * spleenTotal + 1.04 * adventures + 40 - synthTurns) / (30 + 1.04 * adventureGain) = spleenB
    const synthTurns = haveEffect($effect`Synthesis: Collection`);
    const spleenTotal = spleenLimit() - mySpleenUse();
    const adventuresPerItem = adventureGain(spleenItem);
    const spleenSynth = Math.ceil(
      (1.04 * adventuresPerItem * spleenTotal + estimatedTurns() - synthTurns) /
        (30 + 1.04 * adventuresPerItem)
    );
    if (have($skill`Sweet Synthesis`)) {
      for (let i = 0; i < clamp(spleenSynth, 0, spleenLimit() - mySpleenUse()); i++) {
        sweetSynthesis($effect`Synthesis: Collection`);
      }
    }
    const count = Math.floor((spleenLimit() - mySpleenUse()) / spleenItem.spleen);
    acquire(count, spleenItem);
    chew(count, spleenItem);
  }
}

export function fillStomach(finish: boolean): void {
  if (myLevel() >= 15 && !get("_hungerSauceUsed") && mallPrice($item`Hunger™ Sauce`) < 3 * MPA) {
    acquire(1, $item`Hunger™ Sauce`, 3 * MPA);
    use(1, $item`Hunger™ Sauce`);
  }
  useIfUnused($item`milk of magnesium`, "_milkOfMagnesiumUsed", 5 * MPA);

  const turns = getWorkshed() === $item`portable Mayo Clinic` ? 100 : 50;
  let availableStomach = Math.max(0, fullnessLimit() - myFullness());
  const stewCount = Math.min(
    availableStomach,
    Math.ceil((700 - haveEffect($effect`You've Got a Stew Going!`)) / turns)
  );

  mindMayo(Mayo.zapine, stewCount);
  eatSafe(stewCount, $item`Dreadsylvanian stew`);

  fillSpleenSynthesis();
  fillSomeSpleen();

  while (myFullness() + 5 <= fullnessLimit()) {
    if (have($item`Universal Seasoning`) && !get("_universalSeasoningUsed")) {
      use($item`Universal Seasoning`);
    }
    if (myMaxhp() < 1000) maximizeCached(["0.05 HP", "Hot Resistance"]);
    const count = Math.floor(Math.min((fullnessLimit() - myFullness()) / 5, mySpleenUse() / 5));
    if (mallPrice(saladFork) < (55 * MPA) / 6) {
      acquire(count, saladFork, (55 * MPA) / 6, false);
      eat(Math.min(count, itemAmount(saladFork)), saladFork);
    }
    mindMayo(Mayo.flex, count);
    eatSpleen(count, $item`extra-greasy slider`);
    fillSpleenSynthesis();
    fillSomeSpleen();
  }

  if (finish) {
    availableStomach = Math.max(0, fullnessLimit() - myFullness());
    const glassCount = Math.max(availableStomach, availableAmount($item`glass of raw eggs`));
    mindMayo(Mayo.zapine, glassCount);
    eatSafe(glassCount, $item`glass of raw eggs`);

    availableStomach = Math.max(0, fullnessLimit() - myFullness());
    mindMayo(Mayo.flex, Math.floor(availableStomach / 2));
    eatSafe(Math.floor(availableStomach / 2), $item`tin cup of mulligan stew`);

    availableStomach = Math.max(0, fullnessLimit() - myFullness());
    mindMayo(Mayo.flex, availableStomach);
    eatSafe(availableStomach, cheaper(...$items`meteoreo, ice rice`, $item`Tea, Earl Grey, Hot`));
  }
}

function fillLiverAstralPilsner() {
  if (availableAmount($item`astral pilsner`) === 0) {
    return;
  }

  try {
    if (
      !get("_mimeArmyShotglassUsed") &&
      itemAmount($item`mime army shotglass`) > 0 &&
      availableAmount($item`astral pilsner`) > 0
    ) {
      drinkSafe(1, $item`astral pilsner`);
    }
    if (
      globalOptions.ascending &&
      myInebriety() + 1 <= inebrietyLimit() &&
      availableAmount($item`astral pilsner`) > 0
    ) {
      const count = Math.floor(
        Math.min(inebrietyLimit() - myInebriety(), availableAmount($item`astral pilsner`))
      );
      drinkSafe(count, $item`astral pilsner`);
    }
  } catch {
    print(`Failed to drink astral pilsner.`, "red");
  }
}

function fillLiver(finish: boolean) {
  if (myFamiliar() === $familiar`Stooper`) {
    useFamiliar($familiar`none`);
  }

  let availableInebriety = Math.max(0, inebrietyLimit() - myInebriety());
  const whiteCount = Math.min(
    availableInebriety,
    Math.ceil((700 - haveEffect($effect`Whitesloshed`)) / 50)
  );

  drinkSafe(whiteCount, $item`white Dreadsylvanian`);

  fillLiverAstralPilsner();
  fillSpleenSynthesis();
  fillSomeSpleen();

  while (myInebriety() + 5 <= inebrietyLimit()) {
    if (myMaxhp() < 1000) maximize("0.05hp, cold res", false);
    const count = Math.floor(Math.min((inebrietyLimit() - myInebriety()) / 5, mySpleenUse() / 5));
    if (mallPrice(frostyMug) < (55 * MPA) / 6) {
      acquire(count, frostyMug, (55 * MPA) / 6, false);
      drink(Math.min(count, itemAmount(frostyMug)), frostyMug);
    }
    drinkSpleen(count, $item`jar of fermented pickle juice`);
    fillSpleenSynthesis();
    fillSomeSpleen();
  }

  if (finish) {
    availableInebriety = Math.max(0, inebrietyLimit() - myInebriety());
    if (availableInebriety > 0) {
      equip($item`mafia pinky ring`);
      drinkSafe(availableInebriety, $item`Sacramento wine`);
    }
  }
}

export function runDiet(): void {
  print(`Using adventure value ${MPA}.`, "blue");

  if (
    get("barrelShrineUnlocked") &&
    !get("_barrelPrayer") &&
    $classes`Turtle Tamer, Pastamancer, Accordion Thief`.includes(myClass())
  ) {
    cliExecute("barrelprayer buff");
  }

  useIfUnused($item`fancy chocolate car`, get("_chocolatesUsed") !== 0, 2 * MPA);

  const loveChocolateCount = Math.max(3 - Math.floor(20000 / MPA) - get("_loveChocolatesUsed"), 0);
  const loveChocolateEat = Math.min(
    loveChocolateCount,
    itemAmount($item`LOV Extraterrestrial Chocolate`)
  );
  use(loveChocolateEat, $item`LOV Extraterrestrial Chocolate`);

  const chocos = new Map([
    [$class`Seal Clubber`, $item`chocolate seal-clubbing club`],
    [$class`Turtle Tamer`, $item`chocolate turtle totem`],
    [$class`Pastamancer`, $item`chocolate pasta spoon`],
    [$class`Sauceror`, $item`chocolate saucepan`],
    [$class`Accordion Thief`, $item`chocolate stolen accordion`],
    [$class`Disco Bandit`, $item`chocolate disco ball`],
  ]);
  const classChoco = chocos.get(myClass());
  const chocExpVal = (remaining: number, item: Item): number => {
    const advs = [0, 0, 1, 2, 3][remaining + (item === classChoco ? 1 : 0)];
    return advs * MPA - mallPrice(item);
  };
  const chocosRemaining = clamp(3 - get("_chocolatesUsed"), 0, 3);
  for (let i = chocosRemaining; i > 0; i--) {
    const chocoVals = Array.from(chocos.values()).map((choc) => {
      return {
        choco: choc,
        value: chocExpVal(i, choc),
      };
    });
    const best = chocoVals.sort((a, b) => b.value - a.value)[0];
    if (best.value > 0) use(1, best.choco);
    else break;
  }

  useIfUnused(
    $item`fancy chocolate sculpture`,
    get("_chocolateSculpturesUsed") < 1,
    5 * MPA + 5000
  );
  useIfUnused($item`essential tofu`, "_essentialTofuUsed", 5 * MPA);

  if (!get("_etchedHourglassUsed") && have($item`etched hourglass`)) {
    use(1, $item`etched hourglass`);
  }

  if (getProperty("_timesArrowUsed") !== "true" && mallPrice($item`time's arrow`) < 5 * MPA) {
    acquire(1, $item`time's arrow`, 5 * MPA);
    cliExecute("csend 1 time's arrow to botticelli");
    setProperty("_timesArrowUsed", "true");
  }

  if (have($skill`Ancestral Recall`) && mallPrice($item`blue mana`) < 3 * MPA) {
    const casts = Math.max(10 - get("_ancestralRecallCasts"), 0);
    acquire(casts, $item`blue mana`, 3 * MPA);
    useSkill(casts, $skill`Ancestral Recall`);
  }

  useIfUnused($item`borrowed time`, "_borrowedTimeUsed", 20 * MPA);

  // fill liver first, as we may use mayo!
  fillLiver(false);
  fillStomach(false);

  if (!get("_distentionPillUsed")) {
    if (
      (have($item`distention pill`, 1) || !get<boolean>("dr_skipPillCheck", false)) &&
      !use($item`distention pill`)
    ) {
      print("WARNING: Out of distention pills.", "red");
    }
  }

  if (!get("_syntheticDogHairPillUsed") && 1 <= myInebriety()) {
    if (
      (have($item`synthetic dog hair pill`, 1) || !get<boolean>("dr_skipPillCheck", false)) &&
      !use($item`synthetic dog hair pill`)
    ) {
      print("WARNING: Out of synthetic dog hair pills.", "red");
    }
  }

  if (3 <= myInebriety() && 3 <= myFullness()) {
    useIfUnused($item`spice melange`, "spiceMelangeUsed", 300000);
  }

  fillLiver(true);
  fillStomach(true);
}

const Mayo = {
  nex: $item`Mayonex`,
  diol: $item`Mayodiol`,
  zapine: $item`Mayozapine`,
  flex: $item`Mayoflex`,
};

function mindMayo(mayo: Item, quantity: number) {
  if (getWorkshed() !== $item`portable Mayo Clinic`) return;
  if (get("mayoInMouth") && get("mayoInMouth") !== mayo.name)
    throw `You used a bad mayo, my friend!`; //Is this what we want?
  retrieveItem(quantity, mayo);
  if (!have($item`Mayo Minder™`)) buy($item`Mayo Minder™`);
  if (get("mayoMinderSetting") !== mayo.name) {
    setChoice(1076, toInt(mayo) - 8260);
    use($item`Mayo Minder™`);
  }
}

export function runNightcap(): void {
  if (myAdventures() > 0) throw "Trying to nightcap with adventures remaining!";
  useFamiliar($familiar`Stooper`);

  if (myInebriety() + 1 === inebrietyLimit()) {
    equip($item`mafia pinky ring`);
    drinkSafe(1, $item`Sacramento wine`);
  }

  if (myInebriety() === inebrietyLimit()) {
    acquire(1, $item`Frosty's frosty mug`, 15 * MPA);
    drink($item`Frosty's frosty mug`);
    acquire(1, $item`jar of fermented pickle juice`);
    if (haveEffect($effect`Ode to Booze`) < 5) useSkill($skill`The Ode to Booze`);
    drinksilent($item`jar of fermented pickle juice`);
    fillAllSpleen();
  }

  if (!getChateau()["artificial skylight"]) {
    buy(1, $item`artificial skylight`);
  }

  if (!getCampground()["clockwork maid"]) {
    use(1, $item`clockwork maid`);
  }

  useFamiliar($familiar`Left-Hand Man`);
  maximize("Adventures", false);
}
