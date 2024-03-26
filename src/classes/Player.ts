/* eslint-disable @typescript-eslint/prefer-readonly */

/** Class: Player
 * Context:
 * In an RPG game, player is one of the most important component.
 * Player is the  character controlled by human players or AI agents.
 * It has a name, health points and mana points.
 * The player can move to different locations in the game world.
 * The player can interact with objects (e.g., NPCs) and use items
 */

export class Player {
  private name: string;
  private health: number;
  private mana: number;

  constructor(name: string, health: number, mana: number) {
    this.name = name;
    this.health = health;
    this.mana = mana;
  }

  public move(location: string): void {
    // Move the player to the specified location
    console.log(`Player ${this.name} moved to ${location}`);
  }

  public interact(object: any): void {
    // Interact with the specified object
    console.log(`Player ${this.name} interacted with ${object}`);
  }

  public useItem(item: any): void {
    // Use the specified item
    console.log(`Player ${this.name} used ${item}`);
  }

  public getName(): string {
    return this.name;
  }

  public getHealth(): number {
    return this.health;
  }

  public getMana(): number {
    return this.mana;
  }

  public useMagic(): void {
    if (this.mana > 0) {
      this.mana -= 10;
    } else {
      console.log(`Not enough mana! Player only have ${this.mana}  left.`);
    }
  }

  public toString(): string {
    let str = `Name: ${this.name}\n`;
    str += `Health: ${this.health}\n`;
    str += `Mana: ${this.mana}\n`;

    return str;
  }
}
