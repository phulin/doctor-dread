import {
  cliExecute,
  cliExecuteOutput,
  myAscensions,
  myDaycount,
  myFamiliar,
  myMeat,
  print,
  use,
  useFamiliar,
  useSkill,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  Clan,
  ensureEffect,
  get,
  have,
  Requirement,
} from "libram";
import { withStash } from "../clan";
import { adventureMacro, Macro } from "../combat";
import { Command } from "../command";
import { DreadElementId, toDreadElementId } from "../dungeon/raidlog";
import { fairyFamiliar } from "../familiar";
import { propertyManager } from "../lib";
import { banderRun, findRun, FreeRun, tryConfigureBanderRuns, tryFillLatte } from "../runs";

const wands = $items`aluminum wand, ebony wand, hexagonal wand, marble wand, pine wand`;

function elementPocket(elementId: DreadElementId): Item {
  return Item.get(`Dreadsylvanian ${elementId} pocket`);
}

/**
 * Zap an item and return results.
 * @param item Item to zap.
 * @returns A tuple of [result, whether the wand blew up].
 */
function zap(item: Item): [Item | null, boolean] {
  const output = cliExecuteOutput(`zap ${item}`);
  const blewUp = !!output.match(/You lose [0-9,]+ hit points/);
  const match = output.match(/You acquire an item: (.*)$/);
  if (!match) return [null, blewUp];

  return [Item.get(match[1]), blewUp];
}

function zapQuestOutfit() {
  let freeRun: FreeRun | null = null;
  if (tryConfigureBanderRuns(new Requirement(["-Combat Rate"], {}))) {
    print(`Using Bander/Boots at stage ${get("_duffo_runFamiliarStage", 0)}!`, "blue");
    if (myFamiliar() === $familiar`Frumious Bandersnatch`) ensureEffect($effect`Ode to Booze`);
    freeRun = banderRun;
  } else {
    tryFillLatte();

    freeRun = findRun();
    if (freeRun) print(`Found run ${freeRun.name}.`, "blue");
    if (freeRun?.prepare) freeRun.prepare();

    useFamiliar(fairyFamiliar());
    new Requirement(["-Combat Rate"], {})
      .merge(freeRun?.requirement ?? new Requirement([], {}))
      .maximize();
  }
  return freeRun;
}

export default new Command(
  "zap",
  "dr zap [element]: Zap an [element] pocket to another element.",
  ([elementString]) => {
    const element = toDreadElementId(elementString);
    if (element === undefined) {
      print(`Unrecognized element ${element}.`, "red");
      return;
    }

    if (!wands.some((item) => have(item)) && !have($item`dead mimic`)) {
      if (myMeat() < 6000) {
        print("Need 6000 meat for zap wand quest.", "red");
        return;
      }

      if (get("lastZapperWandExplosionDay", -3) + 3 <= myDaycount()) {
        print("Zap wand exploded too recently.", "red");
        return;
      }

      // Do the zap wand quest...
      try {
        while (get("lastPlusSignUnlock") !== myAscensions()) {
          const freeRun = zapQuestOutfit();
          if (!have($item`plus sign`)) {
            propertyManager.setChoices({ [451]: 3 });
            adventureMacro(
              $location`The Enormous Greater-Than Sign`,
              freeRun?.macro ?? Macro.kill()
            );
          } else {
            if (!have($effect`Feeling Lost`) && !have($effect`Teleportitis`)) {
              // Get Teleportitis
              if (have($skill`Feel Lost`) && get("_feelLostUsed") < 3) {
                useSkill($skill`Feel Lost`);
              } else {
                propertyManager.setChoices({ [451]: 5 });
                adventureMacro(
                  $location`The Enormous Greater-Than Sign`,
                  freeRun?.macro ?? Macro.kill()
                );
                continue;
              }
            }

            // Adventure with teleportitis.
            propertyManager.setChoices({ [3]: 3 });
            adventureMacro($location`Noob Cave`, freeRun?.macro ?? Macro.kill());
          }
        }
      } finally {
        if (have($effect`Feeling Lost`)) cliExecute("shrug Feeling Lost");
        if (have($effect`Teleportitis`)) cliExecute("shrug Teleportitis");
      }

      use($item`plus sign`);
      while (!have($item`dead mimic`)) {
        const freeRun = zapQuestOutfit();
        propertyManager.setChoices({ [25]: 2 });
        adventureMacro(
          $location`The Dungeons of Doom`,
          freeRun?.macro
            ? Macro.if_("monstername mimic", Macro.kill()).step(freeRun.macro)
            : Macro.kill()
        );
      }

      // We should have a dead mimic now.
      use($item`dead mimic`);
    }

    if (!wands.some((item) => have(item))) {
      print("Failed to get a zap wand for some reason. Maybe your wand blew up recently.", "red");
      return;
    }

    const pyec = $item`Platinum Yendorian Express Card`;
    withStash([pyec], () => {
      let clan = Clan.get();
      const originalClanName = clan.name;
      if (get("dr_clans", "") !== "") {
        const clans = get("dr_clans", "").split("|");
        clan = Clan.join(clans[0]);
      }

      try {
        while (get("_zapCount") < 2 || (have(pyec) && !get("expressCardUsed"))) {
          if (get("_zapCount") === 2 && have(pyec)) use(pyec);
          const pocket = elementPocket(element);
          if (!clan.take([pocket])) {
            print("Failed to withdraw from stash.", "red");
            return;
          }

          const [result, blewUp] = zap(pocket);
          if (result === null) {
            print("Something went wrong with zapping.", "red");
            return;
          }

          if (blewUp) {
            print("Wand blew up.", "red");
            return;
          }

          clan.put([result]);
        }
      } finally {
        Clan.join(originalClanName);
      }
    });
  }
);
