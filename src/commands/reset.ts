import { getClanName, print, userConfirm, visitUrl } from "kolmafia";
import { $item, Dreadsylvania, get, sum } from "libram";
import { Command } from "../command";
import { feedCarriageman } from "../dungeon/carriageman";
import { dreadKilled, dreadZones } from "../dungeon/raidlog";

export default new Command("reset", "dr reset: Reset current clan.", () => {
  if (visitUrl("clan_basement.php").includes("Acquired by:")) {
    print("Can't reset with remaining loot.", "red");
    return;
  }

  if (!get<string>("dr_clans", "").split("|").includes(getClanName())) {
    print("Clan is not in dr_clans.", "red");
    return;
  }

  const stashPage = visitUrl("clan_stash.php");
  const match = stashPage.match(/contains ([0-9,]+) Meat/);
  if (!match) {
    print("Couldn't access clan stash page.", "red");
    return;
  }

  const clanMeat = parseInt(match[1].replace(",", ""));
  if (clanMeat < 1000000) {
    print(`${clanMeat} is not enough meat to reset dungeon.`, "red");
    return;
  }

  const monstersKilled = sum(dreadKilled(), ([, count]) => count);
  const freddies = sum(dreadZones, (zone) =>
    sum(zone.subnoncombats(), (subnoncombat) =>
      sum([...subnoncombat.choices], ([, choice]) =>
        choice.item === $item`Freddy Kruegerand` ? choice.count() : 0
      )
    )
  );
  if (
    !userConfirm(
      `Reset clan ${getClanName()}? Current status:\n` +
        `${monstersKilled} monsters killed.\n` +
        `${freddies} instances of players collecting freddies.`
    )
  ) {
    print("Reset cancelled.", "red");
    return;
  }

  print("Reopening Dreadsylvania!");
  if (!Dreadsylvania.close()) {
    print("Failed to close Dreadsylvania.", "red");
    return;
  }

  if (!Dreadsylvania.open()) {
    print("Failed to open Dreadsylvania.", "red");
    return;
  }

  if (feedCarriageman() < 2000) {
    print("Failed to feed carriageman enough booze. Try using 'dreaddrunk castle'.");
  }
});
