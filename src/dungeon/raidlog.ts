import { myClass, myId, myName, myPrimestat, totalTurnsPlayed, visitUrl } from "kolmafia";
import { $class, $stat } from "libram";

export const dreadMonsters = [
  "bugbear",
  "werewolf",
  "ghost",
  "zombie",
  "vampire",
  "skeleton",
] as const;
export type DreadMonster = typeof dreadMonsters[number];

export function isDreadMonster(x: string): x is DreadMonster {
  return (dreadMonsters as readonly string[]).includes(x);
}

export const dreadElements = ["hot", "cold", "sleazy", "stinky", "spooky"] as const;
export type DreadElement = typeof dreadElements[number];

export function isDreadElement(x: string): x is DreadElement {
  return (dreadElements as readonly string[]).includes(x);
}

export function monsterPair(monster: DreadMonster): DreadMonster {
  switch (monster) {
    case "bugbear":
      return "werewolf";
    case "werewolf":
      return "bugbear";
    case "ghost":
      return "zombie";
    case "zombie":
      return "ghost";
    case "vampire":
      return "skeleton";
    case "skeleton":
      return "vampire";
  }
}

export function monsterSingular(monster: string): DreadMonster {
  return monster === "werewolves" ? "werewolf" : (monster.slice(0, -1) as DreadMonster);
}

export function monsterPlural(monster: DreadMonster): string {
  if (monster === "werewolf") return "werewolves";
  else return `${monster}s`;
}

export type DreadZone = "forest" | "village" | "castle";

export function monsterZone(monster: DreadMonster): DreadZone {
  switch (monster) {
    case "bugbear":
    case "werewolf":
      return "forest";
    case "ghost":
    case "zombie":
      return "village";
    case "vampire":
    case "skeleton":
      return "castle";
  }
}

export type DreadNoncombat =
  | "Cabin"
  | "Tallest Tree"
  | "Burrows"
  | "Village Square"
  | "Skid Row"
  | "Old Duke's Estate"
  | "Tower"
  | "Great Hall"
  | "Dungeons";

export function noncombatZone(noncombat: DreadNoncombat): DreadZone {
  switch (noncombat) {
    case "Cabin":
    case "Tallest Tree":
    case "Burrows":
      return "forest";
    case "Village Square":
    case "Skid Row":
    case "Old Duke's Estate":
      return "village";
    case "Tower":
    case "Great Hall":
    case "Dungeons":
      return "castle";
  }
}

export type DreadBanish = {
  effect: [DreadZone, DreadMonster | DreadElement];
  choiceSequence: [number, number][]; // Sequence of [choice id, choice] pairs to get to the banish.
  reasonCantPerform?: () => string | null;
};

export type DreadNoncombatInfo = {
  noncombat: DreadNoncombat;
  messages: string[];
  index: number; // Index for clan_dreadsylvania.php?action=forceloc&loc=XXX
  banishes: DreadBanish[];
};

export type DreadZoneInfo = {
  zone: DreadZone;
  fullName: string;
  noncombats: DreadNoncombatInfo[];
};

// TODO: Note whether key is needed to get there.

export const dreadZones: DreadZoneInfo[] = [
  {
    zone: "forest",
    fullName: "The Woods",
    noncombats: [
      {
        noncombat: "Cabin",
        messages: [
          "acquired some dread tarragon",
          "made some bone flour",
          "made the forest less stinky",
          "recycled some newspapers",
          "read an old diary",
          "got a Dreadsylvanian auditor's badge",
          "made an impression of a complicated lock",
          "made the forest less spooky",
          "drove some werewolves out of the forest",
          "drove some vampires out of the castle",
          "flipped through a photo album",
        ],
        index: 1,
        banishes: [
          {
            effect: ["forest", "stinky"],
            choiceSequence: [
              [721, 1],
              [722, 3],
            ],
          },
          {
            effect: ["forest", "spooky"],
            choiceSequence: [
              [721, 3],
              [724, 1],
            ],
            reasonCantPerform: () =>
              myClass() === $class`Accordion Thief` ? null : "must be an Accordion Thief",
          },
          {
            effect: ["forest", "werewolf"],
            choiceSequence: [
              [721, 3],
              [724, 2],
            ],
          },
          {
            effect: ["castle", "vampire"],
            choiceSequence: [
              [721, 3],
              [724, 3],
            ],
          },
        ],
      },
      {
        noncombat: "Tallest Tree",
        messages: [
          "knocked some fruit loose",
          "wasted some fruit",
          "made the forest less sleazy",
          "acquired a chunk of moon-amber",
          "drove some ghosts out of the village",
          "rifled through a footlocker",
          "lifted some weights",
          "got a blood kiwi",
          "got a cool seed pod",
        ],
        index: 2,
        banishes: [
          {
            effect: ["forest", "sleazy"],
            choiceSequence: [
              [725, 1],
              [726, 2],
            ],
            reasonCantPerform: () =>
              myPrimestat() === $stat`Muscle` ? null : "must be a muscle class",
          },
          {
            effect: ["village", "ghost"],
            choiceSequence: [
              [725, 2],
              [727, 1],
            ],
          },
        ],
      },
      {
        noncombat: "Burrows",
        messages: [
          "made the forest less hot",
          "got intimate with some hot coals",
          "made a cool iron ingot",
          "made the forest less cold",
          "listened to the forest's heart",
          "drank some nutritious forest goo",
          "drove some bugbears out of the forest",
          "found and sold a rare baseball card",
        ],
        index: 3,
        banishes: [
          {
            effect: ["forest", "hot"],
            choiceSequence: [
              [729, 1],
              [730, 1],
            ],
          },
          {
            effect: ["forest", "cold"],
            choiceSequence: [
              [729, 2],
              [731, 1],
            ],
          },
          {
            effect: ["forest", "bugbear"],
            choiceSequence: [
              [729, 3],
              [732, 1],
            ],
          },
        ],
      },
    ],
  },
  {
    zone: "village",
    fullName: "The Village",
    noncombats: [
      {
        noncombat: "Village Square",
        messages: [
          "drove some ghosts out of the village",
          "collected a ghost pencil",
          "read some naughty carvings",
          "made the village less cold",
          "looted the blacksmith's till",
          "made a cool iron breastplate",
          "made a cool iron helmet",
          "made some cool iron greaves",
          "made the village less spooky",
          "was hung by a clanmate",
          "hung a clanmate",
        ],
        index: 4,
        banishes: [
          {
            effect: ["village", "ghost"],
            choiceSequence: [
              [733, 1],
              [734, 1],
            ],
          },
          {
            effect: ["village", "cold"],
            choiceSequence: [
              [733, 2],
              [735, 1],
            ],
          },
          {
            effect: ["village", "spooky"],
            choiceSequence: [
              [733, 3],
              [736, 1],
            ],
          },
        ],
      },
      {
        noncombat: "Skid Row",
        messages: [
          "made the village less stinky",
          "swam in a sewer",
          "drove some skeletons out of the castle",
          "made the village less sleazy",
          "moved some bricks around",
          "looted the tinker's shack",
          "made a complicated key",
          "polished some moon-amber",
          "made a clockwork bird",
          "got some old fuse",
        ],
        index: 5,
        banishes: [
          {
            effect: ["village", "stinky"],
            choiceSequence: [
              [737, 1],
              [738, 1],
            ],
          },
          {
            effect: ["castle", "skeleton"],
            choiceSequence: [
              [737, 2],
              [740, 1],
            ],
          },
          {
            effect: ["village", "sleazy"],
            choiceSequence: [
              [737, 2],
              [740, 2],
            ],
          },
        ],
      },
      {
        noncombat: "Old Duke's Estate",
        messages: [
          "drove some zombies out of the village",
          "robbed some graves",
          "read some lurid epitaphs",
          "made the village less hot",
          "made a shepherd's pie",
          "raided some naughty cabinets",
          "drove some werewolves out of the forest",
          "got a bottle of eau de mort",
          "made a ghost shawl",
        ],
        index: 6,
        banishes: [
          {
            effect: ["village", "zombie"],
            choiceSequence: [
              [741, 1],
              [742, 1],
            ],
          },
          {
            effect: ["village", "hot"],
            choiceSequence: [
              [741, 2],
              [743, 1],
            ],
          },
          {
            effect: ["forest", "werewolf"],
            choiceSequence: [
              [741, 3],
              [744, 1],
            ],
          },
        ],
      },
    ],
  },
  {
    zone: "castle",
    fullName: "The Castle",
    noncombats: [
      {
        noncombat: "Tower",
        messages: [
          "drove some bugbears out of the forest",
          "drove some zombies out of the village",
          "made a blood kiwitini",
          "drove some skeletons out of the castle",
          "read some ancient secrets",
          "learned to make a moon-amber necklace",
          "made the castle less sleazy",
          "raided a dresser",
          "got magically fingered",
        ],
        index: 8,
        banishes: [
          {
            effect: ["forest", "bugbear"],
            choiceSequence: [
              [749, 1],
              [750, 1],
            ],
          },
          {
            effect: ["village", "zombie"],
            choiceSequence: [
              [749, 1],
              [750, 2],
            ],
          },
          {
            effect: ["castle", "skeleton"],
            choiceSequence: [
              [749, 2],
              [751, 1],
            ],
            reasonCantPerform: () =>
              myPrimestat() === $stat`Mysticality` ? null : "must be a mysticality class",
          },
          {
            effect: ["castle", "sleazy"],
            choiceSequence: [
              [749, 3],
              [752, 1],
            ],
          },
        ],
      },
      {
        noncombat: "Great Hall",
        messages: [
          "drove some vampires out of the castle",
          "twirled on the dance floor",
          "twirled on the dance floor",
          "made the castle less cold",
          "frolicked in a freezer",
          "got some roast beast",
          "made the castle less stinky",
          "got a wax banana",
        ],
        index: 7,
        banishes: [
          {
            effect: ["castle", "vampire"],
            choiceSequence: [
              [745, 1],
              [746, 1],
            ],
          },
          {
            effect: ["castle", "cold"],
            choiceSequence: [
              [745, 2],
              [747, 1],
            ],
          },
          {
            effect: ["castle", "stinky"],
            choiceSequence: [
              [745, 3],
              [748, 2],
            ],
          },
        ],
      },
      {
        noncombat: "Dungeons",
        messages: [
          "made the castle less spooky",
          "did a whole bunch of pushups",
          "took a nap on a prison cot",
          "made the castle less hot",
          "sifted through some ashes",
          "relaxed in a furnace",
          "got some stinking agaric",
          "rolled around in some mushrooms",
        ],
        index: 9,
        banishes: [
          {
            effect: ["castle", "spooky"],
            choiceSequence: [
              [753, 1],
              [754, 1],
            ],
          },
          {
            effect: ["castle", "hot"],
            choiceSequence: [
              [753, 2],
              [755, 1],
            ],
          },
        ],
      },
    ],
  },
];

export function noncombatInfo(noncombat: DreadNoncombat): DreadNoncombatInfo {
  for (const zone of dreadZones) {
    for (const testNoncombat of zone.noncombats) {
      if (testNoncombat.noncombat === noncombat) {
        return testNoncombat;
      }
    }
  }
  return null as unknown as DreadNoncombatInfo;
}

let lastRaidlogTurncount = -1;
let savedRaidlog: string | undefined = undefined;
export function memoizedRaidlog(): string {
  if (lastRaidlogTurncount !== totalTurnsPlayed() || savedRaidlog === undefined) {
    lastRaidlogTurncount = totalTurnsPlayed();
    savedRaidlog = visitUrl("clan_raidlogs.php");
  }
  return savedRaidlog;
}

export function dreadBanished(): {
  targetZone: DreadZone;
  noncombatZone: DreadZone;
  banished: DreadElement | DreadMonster;
}[] {
  const raidlog = memoizedRaidlog();
  const result: {
    targetZone: DreadZone;
    noncombatZone: DreadZone;
    banished: DreadElement | DreadMonster;
  }[] = [];

  for (const { zone, fullName } of dreadZones) {
    const blockquoteRegex = new RegExp(`<b>${fullName}</b>\\s*<blockquote>(.*?)</blockquote>`);
    const blockquoteMatch = raidlog.match(blockquoteRegex);
    const blockquote = blockquoteMatch ? blockquoteMatch[1] : "";

    const elementRegex = /made the (.*?) less (.*?) \(1 turn\)/g;
    let match;
    while ((match = elementRegex.exec(blockquote)) !== null) {
      result.push({
        targetZone: match[1] as DreadZone,
        noncombatZone: zone,
        banished: match[2] as DreadElement,
      });
    }

    const monsterRegex = /drove some (.*?) out of the (.*?) \(1 turn\)/g;
    while ((match = monsterRegex.exec(blockquote)) !== null) {
      result.push({
        targetZone: match[2] as DreadZone,
        noncombatZone: zone,
        banished: monsterSingular(match[1]),
      });
    }
  }

  return result;
}

export function dreadNoncombatsUsed(): DreadNoncombat[] {
  const raidlog = memoizedRaidlog();
  const result: DreadNoncombat[] = [];

  for (const zone of dreadZones) {
    for (const noncombat of zone.noncombats) {
      const messageRes = noncombat.messages.map(
        (s) => new RegExp(`${myName()} \\(#${myId()}\\) ${s}`)
      );
      if (messageRes.some((re) => raidlog.match(re))) result.push(noncombat.noncombat);
    }
  }

  return result;
}
