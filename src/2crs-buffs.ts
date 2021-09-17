import 'core-js/modules/es.string.match-all';
import 'core-js/modules/es.string.replace-all';

import {
  buy,
  effectModifier,
  haveEffect,
  isNpcItem,
  itemAmount,
  itemType,
  npcPrice,
  numericModifier,
  print,
  use,
  visitUrl,
} from "kolmafia";
import { $effect, $effects, $item, $items, sum } from "libram";

const LISTING_REGEXP = new RegExp("<tr class=\"graybelow\" id=\"stock_([0-9]+)_([0-9]+)\">.*?stock\">([0-9,]+)<\\/td><td class=\"small\">([^<]+)<\\/td>.*?searchprice=([0-9]+)", "g");

function mallShops(
  item: Item,
  sortBy = "price",
  maxPrice = 0,
  limit = 0,
) {
  const pudnuggler = item === $item`none` ? "" : item.name;

  const params = {
    "pudnuggler": pudnuggler,
    "food_sortitemsby": "name",
    "booze_sortitemsby": "name",
    "othercon_sortitemsby": "name",
    "consumable_byme": "0",
    "hats_sortitemsby": "name",
    "shirts_sortitemsby": "name",
    "pants_sortitemsby": "name",
    "weapons_sortitemsby": "name",
    "weaponattribute": "3",
    "weaponhands": "3",
    "acc_sortitemsby": "name",
    "offhand_sortitemsby": "name",
    "wearable_byme": "0",
    "famequip_sortitemsby": "name",
    "nolimits": "0",
    "justitems": "0",
    "sortresultsby": sortBy,
    "max_price": maxPrice.toString(),
    "x_cheapest": limit.toString(),
    "consumable_tier_1": "0",
    "consumable_tier_2": "0",
    "consumable_tier_3": "0",
    "consumable_tier_4": "0",
    "consumable_tier_5": "0",
  };

  const qs = Object.entries(params).map(([k, v]) => `${k}=${v}`).join("&");

  const url = `mall.php?didadv=1&${qs}`;
  const page = visitUrl( url, true );

  if (page === "") throw "Mafia can't look at mall.php :eyes:";

  if (page.includes("This search returned no results.")) return [];

  return [...page.matchAll(LISTING_REGEXP)].map((match) => {
    const stock = Number(match[3].replace(",", ""));
    return {
      shop: Number(match[1]),
      item: Item.get(Number(match[2])),
      stock,
      limit: Number(match[4].replaceAll("&nbsp;", "").replaceAll(",", "").replaceAll("/day", "")) || stock,
      price: Number(match[5]),
    };
  });
}

// Returns [averagePrice, quantity under breakeven]
function averageMallPrice(item: Item, quantity: number, breakEven: number): [number, number] {
  let accumulatedQuantity = 0;
  let accumulatedPrice = 0;
  for (const shop of mallShops(item)) {
    if (shop.price >= breakEven) break;
    if (accumulatedQuantity >= quantity) break;
    const shopQuantity = Math.min(shop.limit, quantity - accumulatedQuantity);
    accumulatedPrice += shopQuantity * shop.price;
    accumulatedQuantity += shopQuantity;
  }

  return [
    accumulatedQuantity === 0 ? 0 : accumulatedPrice / accumulatedQuantity,
    accumulatedQuantity,
  ];
}

function averagePrice(item: Item, quantity: number, breakEven: number): [number, number] {
  if (npcPrice(item) > 0) return [npcPrice(item), quantity];
  else return averageMallPrice(item, quantity, breakEven);
}

class BuffItem {
  item: Item;
  effect: Effect;
  duration: number;
  itemDrop: number;
  familiarWeight: number;
  durationNeeded: number;
  quantityDesired: number;
  value: number;
  quantityAvailable: number;
  price: number;
  unitCost: number;

  constructor(item: Item, turnsRequested: number) {
    this.item = item;
    this.effect = effectModifier(item, "Effect");
    this.duration = numericModifier(item, "Effect Duration");
    this.itemDrop = numericModifier(this.effect, "Item Drop");
    this.familiarWeight = numericModifier(this.effect, "Familiar Weight");
    this.durationNeeded = turnsRequested - haveEffect(this.effect);
    this.quantityDesired = Math.max(
      0,
      Math.ceil(this.durationNeeded / this.duration) - itemAmount(this.item)
    );
    this.value = 5 * this.itemDrop + 15 * this.familiarWeight;

    const [price, quantityAvailable] = averagePrice(
      item,
      this.quantityDesired,
      0.8 * this.duration * this.value
    );
    this.price = price;
    this.quantityAvailable = quantityAvailable;
    this.unitCost = this.price / (this.duration * this.value);
  }
}

const itemBlacklist = new Set([
  ...$items`orange-frosted astral cupcake, recording of Chorale of Companionship, natto marble soda`,
  ...$items`irritability potion, necrotizing body spray, handful of pine needles, resolution: be luckier`,
  ...$items`Wickers bar, salamander slurry, Bit O' Quail Spleen, bottled inspiration`,
  ...$items`oil of oiliness, Yummy Tummy bean`,
]);

const effectBlacklist = new Set($effects`Empathy, Leash of Linguini, Fat Leon's Phat Loot Lyric`);

export function main(args = ""): void {
  const turnsRequested = parseInt(args);
  if (!Number.isFinite(turnsRequested)) throw "Bad turn request!";

  print(`Building buffs up to ${turnsRequested} turns.`, "blue");

  const effectItems = new Map<Effect, BuffItem[]>();
  for (const item of Item.all()) {
    const effect = effectModifier(item, "Effect");
    if (itemType(item) !== "potion" || effect === $effect`none`) continue;
    if (
      numericModifier(effect, "Item Drop") === 0 &&
      numericModifier(effect, "Familiar Weight") === 0
    ) {
      continue;
    }
    if (effectBlacklist.has(effect) || itemBlacklist.has(item)) continue;
    if (!item.tradeable && !isNpcItem(item)) continue;
    const buffItem = new BuffItem(item, turnsRequested);
    if (buffItem.duration * (buffItem.quantityAvailable + itemAmount(buffItem.item)) < 5000) {
      continue;
    }
    effectItems.set(buffItem.effect, [...(effectItems.get(buffItem.effect) ?? []), buffItem]);
  }

  for (const buffItems of effectItems.values()) {
    buffItems.sort((x, y) => x.unitCost - y.unitCost);
  }

  const effectItemsList = [...effectItems].sort(([, [x]], [, [y]]) => -(x.value - y.value));

  const projectedItem = sum(effectItemsList, ([effect]) => numericModifier(effect, "Item Drop"));
  const projectedFamiliar = sum(effectItemsList, ([effect]) =>
    numericModifier(effect, "Familiar Weight")
  );
  print(
    `Projected total: ${projectedItem.toFixed(0)}% item, ${projectedFamiliar.toFixed(
      0
    )} lbs weight.`
  );

  let totalPrice = 0;
  for (const [effect, [buffItem]] of effectItemsList) {
    if (haveEffect(effect) > turnsRequested) continue;
    const buyCost = buffItem.quantityAvailable * buffItem.price;
    if (buyCost > 3000000) {
      throw `Something went wrong with buy: ${buffItem.quantityAvailable} ${
        buffItem.item
      } @ ${buffItem.price.toFixed(0)}`;
    }
    const cost = buffItem.quantityAvailable * buffItem.price;
    const totalDuration =
      buffItem.duration *
      Math.min(buffItem.quantityAvailable + itemAmount(buffItem.item), buffItem.quantityDesired);
    const value = buffItem.value * totalDuration;
    totalPrice += cost;

    print(
      `Buying ${buffItem.quantityAvailable} ${buffItem.item.plural} @ ${buffItem.price.toFixed(
        0
      )} for ${totalDuration} of ${effect}, total cost ${cost.toFixed(
        0
      )}, total value ${value.toFixed(0)}.`
    );

    if (isNpcItem(buffItem.item)) {
      if (buffItem.quantityDesired > 0) {
        print(`WARNING: Manually handle ${buffItem.item} for ${buffItem.effect}.`, "orange");
      }
      continue;
    }

    const bought = buy(
      buffItem.quantityAvailable,
      buffItem.item,
      buffItem.value * buffItem.duration
    );
    if (bought < buffItem.quantityAvailable) {
      print(`WARNING: Only bought ${bought} ${buffItem.item}.`, "orange");
    }

    use(Math.min(buffItem.quantityDesired, itemAmount(buffItem.item)), buffItem.item);
    if (haveEffect(effect) < turnsRequested) {
      print(`WARNING: Couldn't get enough turns of ${effect}.`, "orange");
    }
  }
  print(`Total price: ${totalPrice}.`, "blue");
}
