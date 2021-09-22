import { inebrietyLimit, myAdventures, myInebriety, myTurncount } from "kolmafia";
import { $familiar, $monster, have } from "libram";

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
  const thumbRingMultiplier = 1 / 0.96;
  const gnomeMultiplier = have($familiar`Reagnimated Gnome`) ? 1 / 0.78 : 1;
  return globalOptions.stopTurncount
    ? globalOptions.stopTurncount - myTurncount()
    : (myAdventures() + (globalOptions.ascending && myInebriety() <= inebrietyLimit() ? 60 : 0)) *
        thumbRingMultiplier *
        gnomeMultiplier;
}
