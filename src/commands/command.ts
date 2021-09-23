export class Command {
  static all: { [index: string]: Command } = {};

  name: string;
  help: string;
  run: (args: string[]) => void;

  constructor(name: string, help: string, run: (args: string[]) => void) {
    this.name = name;
    this.help = help;
    this.run = run;
  }

  register(): void {
    Command.all[this.name] = this;
  }
}
