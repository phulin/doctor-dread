import { itemAmount, print, toInt, visitUrl } from "kolmafia";
import { $item, $items, getAverageAdventures } from "libram";

const advancedCocktails = [
  ...$items`pink pony, slip 'n' slide, fuzzbump, ocean motion, ducha de oro`,
  ...$items`horizontal tango, roll in the hay, a little sump'm sump'm`,
  ...$items`slap and tickle, rockin' wagon, perpendicular hula, calle de miel`,
];

const carriagemanBooze = [...advancedCocktails, $item`open sauce`];

export function carriagemanSheets(): number {
  const pageText = visitUrl("clan_dreadsylvania.php?place=carriage");
  const match = pageText.match(/The carriageman is currently ([0-9,]+) sheets to the wind/);
  if (!match) {
    throw "Regex failed on carriageman page.";
  }

  return parseInt(match[1].replace(",", ""));
}

/**
 * Feed carriageman up to {target} sheets.
 * @param target Target level to feed the carriageman.
 * @returns Final sheet level of carriageman.
 */
export function feedCarriageman(target = 2000): number {
  let sheets;
  while ((sheets = carriagemanSheets()) < target) {
    print(`Carriageman currently ${sheets} sheets to the wind.`);
    const item = carriagemanBooze.find((item) => itemAmount(item) > 0);
    if (!item) break;

    const count = Math.min(
      itemAmount(item),
      Math.ceil((target - sheets) / getAverageAdventures(item))
    );

    const responseText = visitUrl(
      `clan_dreadsylvania.php?action=feedbooze&whichbooze=${toInt(item)}&boozequantity=${count}`
    );
    if (!responseText.includes("The Carriageman gladly accepts your booze")) {
      throw "Failed to feed booze!";
    }
  }

  return sheets;
}
