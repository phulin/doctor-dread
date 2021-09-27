import {
  cliExecute,
  getCampground,
  getClanLounge,
  getFuel,
  haveEffect,
  myEffects,
  numericModifier,
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

  mood.potion($item`go-go potion`, 100);

  mood.effect($effect`Bubble Vision`, () => {
    if (haveEffect($effect`Bubble Vision`) === 0) use($item`bottle of bubbles`);
  });

  if (!get("concertVisited") && get("sidequestArenaCompleted") === "fratboy") {
    cliExecute("concert winklered");
  } else if (!get("concertVisited") && get("sidequestArenaCompleted") === "hippy") {
    cliExecute("concert optimist primal");
  }

  if (!get("_clanFortuneBuffUsed")) {
    withVIPClan(() => cliExecute("fortune buff item"));
  }

  if (!have($effect`items.enh`) && SourceTerminal.have() && SourceTerminal.getEnhanceUses() < 3) {
    while (SourceTerminal.getEnhanceUses() < 3) SourceTerminal.enhance($effect`items.enh`);
  }

  if (getCampground()["Asdon Martin keyfob"] !== undefined) {
    if (getFuel() < 37) cliExecute("asdonmartin fuel 1 pie man was not meant to eat");
    mood.effect($effect`Driving Observantly`);
  }

  if (
    !have($effect`Items Are Forever`) &&
    have($item`Kremlin's Greatest Briefcase`) &&
    get("_kgbClicksUsed") < 22
  ) {
    const buffTries = Math.ceil((22 - get("_kgbClicksUsed")) / 3);
    cliExecute(`Briefcase buff ${new Array<string>(buffTries).fill("item").join(" ")}`);
  }

  if (have($item`Bird-a-Day calendar`)) {
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

  if (get("_poolGames") < 3 && !get("_dr_noPoolTable", false) && !have($effect`Hustlin'`)) {
    withVIPClan(() => {
      if (getClanLounge()["Clan pool table"] !== undefined) {
        while (get("_poolGames") < 3) cliExecute("pool stylish");
      } else set("_dr_noPoolTable", true);
    });
  }

  return mood;
}

export function freeFightMood(): Mood {
  const mood = new Mood();

  mood.skill($skill`Drescher's Annoying Noise`);
  mood.skill($skill`Pride of the Puffin`);

  if (getCampground()["Witchess Set"] !== undefined && !get("_witchessBuff")) {
    mood.effect($effect`Puzzle Champ`);
  }

  if (!get<boolean>("_dr_defectiveTokenAttempted", false)) {
    set("_dr_defectiveTokenAttempted", true);
    withStash($items`defective Game Grid token`, () => {
      if (!get("_defectiveTokenUsed") && have($item`defective Game Grid token`))
        use($item`defective Game Grid token`);
    });
  }

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
