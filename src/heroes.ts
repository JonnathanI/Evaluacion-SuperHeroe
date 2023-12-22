
import { DamagePoints, DefensePoints, Superhero } from "./types";

class MagicSuperhero implements Superhero<DamagePoints> {
  constructor(public name: string, public health: number) {}

  performAction(enemy: Superhero<any>): DamagePoints {
    console.log(`${this.name} attacks with magic at ${enemy.name}`);
    return 10;
  }
}

class StrengthSuperhero implements Superhero<DefensePoints> {
  constructor(public name: string, public health: number) {}

  performAction(enemy: Superhero<any>): DefensePoints {
    console.log(`${this.name} hits strongly at ${enemy.name}`);
    return 8;
  }
}

export { MagicSuperhero, StrengthSuperhero };

