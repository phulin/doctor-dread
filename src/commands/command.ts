export class Command {
  name: string;
  help: string;
  run: (args: string[]) => void;

  constructor(name: string, help: string, run: (args: string[]) => void) {
    this.name = name;
    this.help = help;
    this.run = run;
  }
}
