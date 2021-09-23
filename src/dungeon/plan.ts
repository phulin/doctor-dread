import { DreadBanish, dreadBanished, DreadElement, DreadMonster, dreadNoncombatsUsed } from "./raidlog";

export function planLimitTo(monster: DreadMonster, element: DreadElement | ""):  {
  const noncombatsUsed = dreadNoncombatsUsed();
  const banished = dreadBanished();
}