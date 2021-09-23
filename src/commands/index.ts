import { Command } from "./command";
import { farmCommand } from "./farm";
import { helpCommand } from "./help";
import { limitCommand } from "./limit";
import { statusCommand } from "./status";

export default {
  farm: farmCommand,
  help: helpCommand,
  limit: limitCommand,
  status: statusCommand,
} as { [index: string]: Command };
