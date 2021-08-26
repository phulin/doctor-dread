import {
  cliExecute,
  getClanLounge,
  itemAmount,
  myEffects,
  numericModifier,
  toSkill,
  use,
  useSkill,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
  $item,
  $items,
  $skill,
  $skills,
  get,
  have,
  Mood,
  set,
  Witchess,
} from "libram";
import { questStep, setChoice } from "./lib";
import { withStash } from "./clan";

Mood.setDefaultOptions({
  mpSources: [],
  songSlots: [
    $effects`Polka of Plenty, Ode to Booze`,
    $effects`Fat Leon's Phat Loot Lyric`,
    $effects`Chorale of Companionship`,
    $effects`The Ballad of Richie Thingfinder`,
  ],
});

export function itemMood(): Mood {
  const mood = new Mood();

  mood.skill($skill`Blood Bond`);
  mood.skill($skill`Leash of Linguini`);
  mood.skill($skill`Empathy of the Newt`);

  mood.skill($skill`The Polka of Plenty`);
  mood.skill($skill`The Spirit of Taking`);
  mood.skill($skill`Fat Leon's Phat Loot Lyric`);
  mood.skill($skill`Singer's Faithful Ocelot`);
  mood.skill($skill`The Spirit of Taking`);
  mood.skill($skill`Drescher's Annoying Noise`);
  mood.skill($skill`Pride of the Puffin`);

  if (have($item`Kremlin's Greatest Briefcase`)) {
    mood.effect($effect`Items Are Forever`, () => {
      if (get("_kgbClicksUsed") < 22) {
        const buffTries = Math.ceil((22 - get("_kgbClicksUsed")) / 3);
        cliExecute(`Briefcase buff ${new Array<string>(buffTries).fill("item").join(" ")}`);
      }
    });
  }

  if (!get("concertVisited") && get("sidequestArenaCompleted") === "fratboy") {
    cliExecute("concert winklered");
  } else if (!get("concertVisited") && get("sidequestArenaCompleted") === "hippy") {
    cliExecute("concert optimist primal");
  }

  if (itemAmount($item`Bird-a-Day calendar`) > 0) {
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

  if (getClanLounge()["Clan pool table"] !== undefined) {
    while (get("_poolGames") < 3) cliExecute("pool aggressive");
  }

  mood.potion($item`white candy heart`, 30);

  const goodSongs = $skills`Chorale of Companionship, The Ballad of Richie Thingfinder, The Polka of Plenty`;
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
  const beachHeadsUsed: number | string = get("_beachHeadsUsed");
  if (have($item`Beach Comb`) && !beachHeadsUsed.toString().split(",").includes("10")) {
    mood.effect($effect`Do I Know You From Somewhere?`);
  }
  if (Witchess.have() && !get("_witchessBuff")) {
    mood.effect($effect`Puzzle Champ`);
  }
  if (questStep("questL06Friar") === 999 && !get("friarsBlessingReceived")) {
    cliExecute("friars familiar");
  }
  if (have($item`The Legendary Beat`) && !get("_legendaryBeat")) {
    use($item`The Legendary Beat`);
  }

  return mood;
}
