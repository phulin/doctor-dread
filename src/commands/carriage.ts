import { print } from "kolmafia";
import { Command } from "../command";
import { feedCarriageman } from "../dungeon/carriageman";

export default new Command("carriage", "dr carriage: Feed carriageman booze.", () => {
  const sheets = feedCarriageman();
  if (sheets >= 2000) {
    print(`Success! Fed carriageman to ${sheets}.`, "blue");
  } else {
    print(
      `Failure: carriageman only fed to ${sheets}. Try picking up some more ACC drinks?`,
      "red"
    );
  }
});
