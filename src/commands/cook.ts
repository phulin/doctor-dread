import {
  cliExecute,
  create,
  getRelated,
  getWorkshed,
  print,
  putStash,
  stashAmount,
  takeStash,
} from "kolmafia";
import { $item, $items, Clan, get, have, set } from "libram";

import { Command } from "../command";
import { DreadElementId, dreadElements, toDreadElementId, toElement } from "../dungeon/raidlog";

function elementPocket(elementId: DreadElementId): Item {
  return Item.get(`Dreadsylvanian ${elementId} pocket`);
}

function elementCluster(elementId: DreadElementId): Item {
  return Item.get(`${toElement(elementId)} cluster`);
}

const blacklist = $items`old dry bone`;
const smashables = new Map<DreadElementId, Item[]>(
  dreadElements.map((element) => [
    element,
    Item.all().filter(
      (item) =>
        getRelated(item, "pulverize")[elementCluster(element).name] !== undefined &&
        !blacklist.includes(item)
    ),
  ])
);

export function cook(elementId: DreadElementId): boolean {
  const pocket = elementPocket(elementId);
  const cluster = elementCluster(elementId);

  if (getWorkshed() !== $item`warbear induction oven`) {
    print("Install a warbear induction oven before cooking!", "red");
    return false;
  }

  if (get("_dr_warbearInductionOvenUsed", false)) {
    print("Already used induction oven for the day.");
    return false;
  }

  const originalClan = Clan.get();
  if (get("dr_clans", "") !== "") {
    const clans = get("dr_clans", "").split("|");
    Clan.join(clans[0]);
  }

  try {
    if (!have($item`bone flour`) && !takeStash(1, $item`bone flour`)) {
      print("Failed to get bone flour from stash.", "red");
      return false;
    }

    if (!have(cluster)) {
      const possibleTakes = [...(smashables.get(elementId) ?? []), cluster];
      const target = possibleTakes.find((item) => stashAmount(item) > 0);
      if (target === undefined) {
        print(`None of [${possibleTakes.join(", ")}] in stash to cook with.`, "red");
        return false;
      }

      if (!takeStash(1, target)) {
        print(`Failed to take ${target.name} from stash.`, "red");
        return false;
      }

      if (target !== cluster) cliExecute(`smash 1 ${target}`);
    }

    if (!create(pocket)) {
      print(`Failed to create ${pocket}.`, "red");
      return false;
    }
    if (!putStash(2, pocket)) {
      print("Failed to put pockets back in stash.", "red");
      return false;
    }
    set("_dr_warbearInductionOvenUsed", true);
  } finally {
    Clan.join(originalClan.name);
  }

  return true;
}

const usage = "dr cook [element]: Create a Dreadsylvanian [element] pocket.";

export default new Command("cook", usage, ([element]) => {
  if (element === undefined) {
    print(`Usage: ${usage}`);
    return;
  }

  const elementId = toDreadElementId(element);
  if (elementId === undefined) {
    print(`Unrecognized pocket type [${element}].`, "red");
    return;
  }

  cook(elementId);
});
