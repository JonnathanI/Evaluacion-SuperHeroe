
type DamagePoints = number;
type DefensePoints = number;

interface Superhero<T> {
  name: string;
  health: number;
  performAction: (enemy: Superhero<any>) => T;
}

export { DamagePoints, DefensePoints, Superhero };

