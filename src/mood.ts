import {
  availableAmount,
  cliExecute,
  effectModifier,
  haveEffect,
  mallPrice,
  myEffects,
  mySpleenUse,
  numericModifier,
  spleenLimit,
  sweetSynthesis,
  toSkill,
  use,
  useSkill,
} from "kolmafia";
import {
  $class,
  $effect,
  $item,
  $items,
  $skill,
  $skills,
  get,
  have,
  Mood,
  set,
  SourceTerminal,
} from "libram";
import { questStep, setChoice } from "./lib";
import { withStash, withVIPClan } from "./clan";
import { acquire } from "./acquire";

Mood.setDefaultOptions({
  mpSources: [],
  reserveMp: 50,
  /* songSlots: [
    $effects`Polka of Plenty, Ode to Booze`,
    $effects`Fat Leon's Phat Loot Lyric`,
    $effects`Chorale of Companionship`,
    $effects`The Ballad of Richie Thingfinder`,
  ], */
});

export function itemMood(): Mood {
  const mood = new Mood();

  mood.skill($skill`Blood Bond`);
  mood.skill($skill`Leash of Linguini`);
  mood.skill($skill`Empathy of the Newt`);

  mood.skill($skill`The Spirit of Taking`);
  mood.skill($skill`Fat Leon's Phat Loot Lyric`);
  mood.skill($skill`Singer's Faithful Ocelot`);
  mood.skill($skill`Drescher's Annoying Noise`);
  mood.skill($skill`Pride of the Puffin`);

  if (!get("concertVisited") && get("sidequestArenaCompleted") === "fratboy") {
    cliExecute("concert winklered");
  } else if (!get("concertVisited") && get("sidequestArenaCompleted") === "hippy") {
    cliExecute("concert optimist primal");
  }

  return mood;
}

export function freeFightMood(): Mood {
  const mood = new Mood();

  if (!get<boolean>("_duffo_defectiveTokenAttempted", false)) {
    set("_duffo_defectiveTokenAttempted", true);
    withStash($items`defective Game Grid token`, () => {
      if (!get("_defectiveTokenUsed") && have($item`defective Game Grid token`))
        use($item`defective Game Grid token`);
    });
  }

  mood.potion($item`white candy heart`, 30);

  const goodSongs = $skills`Chorale of Companionship, The Ballad of Richie Thingfinder, Fat Leon's Phat Loot Lyric`;
  for (const effectName of Object.keys(myEffects())) {
    const effect = Effect.get(effectName);
    const skill = toSkill(effect);
    if (skill.class === $class`Accordion Thief` && skill.buff && !goodSongs.includes(skill)) {
      cliExecute(`shrug ${effectName}`);
    }
  }

  if ((get("daycareOpen") || get("_daycareToday")) && !get("_daycareSpa")) {
    cliExecute("daycare mysticality");
  }
  if (have($item`redwood rain stick`) && !get("_redwoodRainStickUsed")) {
    use($item`redwood rain stick`);
  }

  if (questStep("questL06Friar") === 999 && !get("friarsBlessingReceived")) {
    cliExecute("friars familiar");
  }

  return mood;
}

function fillSpleenSynthesis() {
  const needed = Math.floor(
    (haveEffect($effect`Riboflavin'`) - haveEffect($effect`Synthesis: Collection`)) / 30
  );
  sweetSynthesis(Math.min(needed, spleenLimit() - mySpleenUse()), $effect`Synthesis: Collection`);
}

export function boostItemDrop(): void {
  if (numericModifier("Item Drop") < 1850 && !get("_clanFortuneBuffUsed")) {
    withVIPClan(() => cliExecute("fortune buff item"));
  }

  if (
    numericModifier("Item Drop") < 1850 &&
    !have($effect`items.enh`) &&
    SourceTerminal.have() &&
    SourceTerminal.getEnhanceUses() < 3
  ) {
    while (SourceTerminal.getEnhanceUses() < 3) SourceTerminal.enhance($effect`items.enh`);
  }

  if (
    numericModifier("Item Drop") < 1850 &&
    !have($effect`Items Are Forever`) &&
    have($item`Kremlin's Greatest Briefcase`) &&
    get("_kgbClicksUsed") < 22
  ) {
    const buffTries = Math.ceil((22 - get("_kgbClicksUsed")) / 3);
    cliExecute(`Briefcase buff ${new Array<string>(buffTries).fill("item").join(" ")}`);
  }

  if (numericModifier("Item Drop") < 1850 && have($item`Bird-a-Day calendar`)) {
    if (!have($skill`Seek out a Bird`)) {
      use(1, $item`Bird-a-Day calendar`);
    }

    if (
      have($skill`Visit your Favorite Bird`) &&
      !get("_favoriteBirdVisited") &&
      (numericModifier($effect`Blessing of your favorite Bird`, "Meat Drop") > 0 ||
        numericModifier($effect`Blessing of your favorite Bird`, "Item Drop") > 0)
    ) {
      useSkill($skill`Visit your Favorite Bird`);
    }

    if (
      have($skill`Seek out a Bird`) &&
      get("_birdsSoughtToday") < 6 &&
      (numericModifier($effect`Blessing of the Bird`, "Meat Drop") > 0 ||
        numericModifier($effect`Blessing of the Bird`, "Item Drop") > 0)
    ) {
      // Ensure we don't get stuck in the choice if the count is wrong
      setChoice(1399, 2);
      useSkill($skill`Seek out a Bird`, 6 - get("_birdsSoughtToday"));
    }
  }

  if (numericModifier("Item Drop") < 1850 && mySpleenUse() < spleenLimit()) {
    fillSpleenSynthesis();
    const mojoFilterCount = 3 - get("currentMojoFilters");
    acquire(mojoFilterCount, $item`mojo filter`, 15000, false);
    if (have($item`mojo filter`)) {
      use(Math.min(mojoFilterCount, availableAmount($item`mojo filter`)), $item`mojo filter`);
      fillSpleenSynthesis();
    }
  }

  // TODO: More generic potion support
  if (
    numericModifier("Item Drop") < 1850 &&
    !have($effect`Always be Collecting`) &&
    effectModifier($item`rubber nubbin`, "Effect") === $effect`Always be Collecting` &&
    mallPrice($item`rubber nubbin`) <
      5 * numericModifier($item`rubber nubbin`, "Effect Duration") * 50
  ) {
    use($item`rubber nubbin`);
  }
}
