import { getClanName, myName, print, todayToString } from "kolmafia";
import { Clan, get } from "libram";

import { Command } from "./command";

export const whitelistCommand = new Command(
  "whitelist",
  "dr whitelist [player] [rank?]: Whitelist [player] with rank [rank] (default normal member) to all clans in dr_clans",
  ([player, ...rankComponents]) => {
    const clanNamesJoined = get("dr_clans", "");
    if (clanNamesJoined === "") {
      print("You have not set any clans in the dr_clans property!", "red");
      return;
    }

    if (!player) {
      print(`Invalid player ${player}`, "red");
      return;
    }

    const rank = rankComponents.join(" ");
    if (!rank) {
      print(`Invalid rank ${rank}`, "red");
      return;
    }

    const current = getClanName();

    try {
      const clanNames = clanNamesJoined.split("|");
      for (const clanName of clanNames) {
        const clan = Clan.join(clanName);
        print(`Whitelisting ${player} to ${getClanName()} at rank ${rank}.`);
        if (
          !clan.addPlayerToWhitelist(
            player,
            rank,
            `Added by ${myName()} on ${todayToString()} (Dr. Dread)`
          )
        ) {
          print(`Whitelisting failed in ${getClanName()}!`, "red");
        }
      }
    } finally {
      Clan.join(current);
    }
  }
);
