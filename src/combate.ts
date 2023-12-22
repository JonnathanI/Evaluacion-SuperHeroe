
import { Superhero } from "./types";

function simulateBattle(
  magicHero: Superhero<any>,
  strengthHero: Superhero<any>
): void {
  console.log(`${magicHero.name} vs ${strengthHero.name}`);
  while (magicHero.health > 0 && strengthHero.health > 0) {
    const magicAction = magicHero.performAction(strengthHero);
    const strengthAction = strengthHero.performAction(magicHero);

    strengthHero.health -= magicAction;
    magicHero.health -= strengthAction;

    console.log(
      `${magicHero.name} has ${magicHero.health} health. ${strengthHero.name} has ${strengthHero.health} health.`
    );
  }

  console.log("End of the battle");
}

export { simulateBattle };
