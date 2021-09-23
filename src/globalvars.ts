import { inebrietyLimit, myAdventures, myInebriety, myTurncount } from "kolmafia";
import { $familiar, have } from "libram";

export const globalOptions: {
  ascending: boolean;
  stopTurncount: number | null;
  nightcap: boolean;
} = {
  stopTurncount: null,
  ascending: false,
  nightcap: false,
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
