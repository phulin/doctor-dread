import { inebrietyLimit, myAdventures, myInebriety, myTurncount } from "kolmafia";
import { $item, $monster, have } from "libram";

export const globalOptions: {
  ascending: boolean;
  stopTurncount: number | null;
  nightcap: boolean;
  preferredMonster: Monster;
} = {
  stopTurncount: null,
  ascending: false,
  nightcap: false,
  preferredMonster: $monster`jock`,
};

export function estimatedTurns(): number {
  return globalOptions.stopTurncount
    ? globalOptions.stopTurncount - myTurncount()
    : (myAdventures() + (globalOptions.ascending && myInebriety() <= inebrietyLimit() ? 60 : 0)) *
        (have($item`mafia thumb ring`) ? 1.04 : 1);
}
