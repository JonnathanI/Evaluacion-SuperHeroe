import { MagicSuperhero, StrengthSuperhero } from "./heroes";
import { simulateBattle } from "./combate";

const wizardMerlin = new MagicSuperhero("Merlin", 100);
const warriorThor = new StrengthSuperhero("Thor", 100);

simulateBattle(wizardMerlin, warriorThor);
