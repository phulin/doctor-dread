import { Command } from "./command";
import { farmCommand } from "./farm";
import { freddiesCommand } from "./freddies";
import { helpCommand } from "./help";
import { limitCommand } from "./limit";
import { planCommand } from "./plan";
import { statusCommand } from "./status";
import { whitelistCommand } from "./whitelist";

export default {
  farm: farmCommand,
  freddies: freddiesCommand,
  help: helpCommand,
  limit: limitCommand,
  plan: planCommand,
  status: statusCommand,
  whitelist: whitelistCommand,
} as { [index: string]: Command };
