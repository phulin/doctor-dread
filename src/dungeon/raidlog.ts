import { getClanId, myId, myName, totalTurnsPlayed, visitUrl } from "kolmafia";

import dreadLayout from "./layout.yml";

export const dreadMonsters = [
  "bugbear",
  "werewolf",
  "ghost",
  "zombie",
  "vampire",
  "skeleton",
] as const;
export type DreadMonsterId = typeof dreadMonsters[number];

export function isDreadMonsterId(x: string): x is DreadMonsterId {
  return (dreadMonsters as readonly string[]).includes(x);
}

export const dreadElements = ["hot", "cold", "sleazy", "stinky", "spooky"] as const;
export type DreadElementId = typeof dreadElements[number];

export function isDreadElementId(x: string): x is DreadElementId {
  return (dreadElements as readonly string[]).includes(x);
}

export type DreadChoice = {
  messages: string[];
  classes?: Class[];
  requirement?: Item;
  item?: Item;
  banish?: [DreadZoneId, DreadMonsterId | DreadElementId];
  effect?: Effect;
  stat?: Stat;
};

type DreadSubnoncombatSchema = {
  name: string;
  id: number;
  locked?: boolean;
  classes: string[];
  choices: {
    [index: number]: {
      message?: string;
      messages?: string[];
      classes?: string[];
      requirement?: string;
      item?: string;
      banish?: [DreadZoneId, DreadMonsterId | DreadElementId];
      effect?: string;
      stat?: string;
    };
  };
};

export class DreadSubnoncombat {
  name: string;
  id: number;
  needsUnlocked: boolean;
  classes?: Class[];
  choices: Map<number, DreadChoice>;

  constructor({ name, id, locked, classes, choices }: DreadSubnoncombatSchema) {
    this.name = name;
    this.id = id;
    this.needsUnlocked = !!locked;
    if (classes) this.classes = classes.map((c) => Class.get(c));
    this.choices = new Map(
      Object.entries(choices).map(([index, choice]) => [
        parseInt(index),
        {
          messages: choice.messages ?? [choice.message as string],
          ...(choice.classes ? { classes: choice.classes.map((c) => Class.get(c)) } : {}),
          ...(choice.requirement ? { requirement: Item.get(choice.requirement) } : {}),
          ...(choice.item ? { item: Item.get(choice.item) } : {}),
          ...(choice.banish ? { banish: choice.banish } : {}),
          ...(choice.effect ? { effect: Effect.get(choice.effect) } : {}),
          ...(choice.stat ? { stat: Stat.get(choice.stat) } : {}),
        },
      ])
    );
  }

  messages(): string[] {
    return ([] as string[]).concat(...Object.values(this.choices).map((choice) => choice.messages));
  }

  isLocked(): boolean {
    return !memoizedRaidlog().includes(`unlocked the ${this.name.toLowerCase()}`);
  }
}

export type DreadNoncombatId =
  | "Cabin"
  | "Tallest Tree"
  | "Burrows"
  | "Village Square"
  | "Skid Row"
  | "Old Duke's Estate"
  | "Tower"
  | "Great Hall"
  | "Dungeons";

type DreadNoncombatSchema = {
  name: DreadNoncombatId;
  id: number; // choice adventure id
  index: number; // index for clan_dreadsylvania.php
  choices: { [index: number]: DreadSubnoncombatSchema };
};

export class DreadNoncombat {
  name: DreadNoncombatId;
  id: number;
  index: number;
  choices: Map<number, DreadSubnoncombat>;

  constructor({ name, id, index, choices }: DreadNoncombatSchema) {
    this.name = name;
    this.id = id;
    this.index = index;
    this.choices = new Map(
      Object.entries(choices).map(([index, choice]) => [
        parseInt(index),
        new DreadSubnoncombat(choice),
      ])
    );
  }

  zone(): DreadZoneId {
    switch (this.name) {
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

  messages(): string[] {
    return ([] as string[]).concat(
      ...Object.values(this.choices).map((choice) => choice.messages())
    );
  }
}

export const dreadZoneTypes = ["forest", "village", "castle"] as const;
export type DreadZoneId = typeof dreadZoneTypes[number];

type DreadZoneSchema = {
  name: DreadZoneId;
  fullName: string;
  noncombats: DreadNoncombatSchema[];
};

export class DreadZone {
  name: DreadZoneId;
  fullName: string;
  noncombats: DreadNoncombat[];

  constructor({ name, fullName, noncombats }: DreadZoneSchema) {
    this.name = name;
    this.fullName = fullName;
    this.noncombats = noncombats.map((noncombat) => new DreadNoncombat(noncombat));
  }
}

export type DreadBanish = [
  DreadNoncombat,
  number,
  number,
  DreadZoneId,
  DreadMonsterId | DreadElementId
];

export function monsterPair(monster: DreadMonsterId): DreadMonsterId {
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

export function monsterZone(monster: DreadMonsterId): DreadZoneId {
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

export function monsterSingular(monster: string): DreadMonsterId {
  return monster === "werewolves" ? "werewolf" : (monster.slice(0, -1) as DreadMonsterId);
}

export const dreadZones: DreadZone[] = dreadLayout.map(
  (zone: DreadZoneSchema) => new DreadZone(zone)
);

export function dreadZone(name: DreadZoneId): DreadZone {
  return dreadZones.find((zone) => zone.name === name) as DreadZone;
}

let lastRaidlogTurncount = -1;
let lastRaidlogClan = -1;
let savedRaidlog: string | undefined = undefined;
export function memoizedRaidlog(): string {
  if (
    lastRaidlogTurncount !== totalTurnsPlayed() ||
    lastRaidlogClan !== getClanId() ||
    savedRaidlog === undefined
  ) {
    lastRaidlogTurncount = totalTurnsPlayed();
    lastRaidlogClan = getClanId();
    savedRaidlog = visitUrl("clan_raidlogs.php");
  }
  return savedRaidlog;
}

export function dreadBanished(): {
  targetZone: DreadZoneId;
  noncombatZone: DreadZoneId;
  banished: DreadElementId | DreadMonsterId;
}[] {
  const raidlog = memoizedRaidlog();
  const result: {
    targetZone: DreadZoneId;
    noncombatZone: DreadZoneId;
    banished: DreadElementId | DreadMonsterId;
  }[] = [];

  for (const { name: zone, fullName } of dreadZones) {
    const blockquoteRegex = new RegExp(`<b>${fullName}</b>\\s*<blockquote>(.*?)</blockquote>`);
    const blockquoteMatch = raidlog.match(blockquoteRegex);
    const blockquote = blockquoteMatch ? blockquoteMatch[1] : "";

    const elementRegex = /made the (.*?) less (.*?) \(1 turn\)/g;
    let match;
    while ((match = elementRegex.exec(blockquote)) !== null) {
      result.push({
        targetZone: match[1] as DreadZoneId,
        noncombatZone: zone,
        banished: match[2] as DreadElementId,
      });
    }

    const monsterRegex = /drove some (.*?) out of the (.*?) \(1 turn\)/g;
    while ((match = monsterRegex.exec(blockquote)) !== null) {
      result.push({
        targetZone: match[2] as DreadZoneId,
        noncombatZone: zone,
        banished: monsterSingular(match[1]),
      });
    }
  }

  return result;
}

export function dreadNoncombatsUsed(): DreadNoncombatId[] {
  const raidlog = memoizedRaidlog();
  const result: DreadNoncombatId[] = [];

  for (const zone of dreadZones) {
    const blockquoteRegex = new RegExp(`<b>${zone.fullName}</b>\\s*<blockquote>(.*?)</blockquote>`);
    const blockquoteMatch = raidlog.match(blockquoteRegex);
    const blockquote = blockquoteMatch ? blockquoteMatch[1] : "";

    for (const noncombat of zone.noncombats) {
      const messageRes = noncombat
        .messages()
        .map((s) => new RegExp(`${myName()} \\(#${myId()}\\) ${s}`));
      if (messageRes.some((re) => blockquote.match(re))) result.push(noncombat.name);
    }
  }

  return result;
}
