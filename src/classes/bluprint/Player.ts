// /* eslint-disable @typescript-eslint/prefer-readonly */

// /** Class: Player
//  * Context:
//  * In an RPG game, player is one of the most important component.
//  * Player is the  character controlled by human players or AI agents.
//  * It has a name, health points and mana points.
//  * The player can move to different locations in the game world.
//  * The player can interact with objects (e.g., NPCs) and use items
//  */

// export class Player {
//   /**************************
//    **    Members          **
//    ************************/
//   public readonly id: string; // unique identifier for each player
//   private _name: string; // player's name
//   private _health = 100; // current health point
//   private _maxHealth = 100; // maximum possible health point
//   private _mana = 50; // current mana point
//   private _location?: string; // location where the player currently is at

//   /**************************
//    **    Constructor     **
//    ************************/
//   constructor(id: string, name: string) {
//     this.id = id;
//     this._name = name;
//   }

//   get name(): string {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }

//   get health(): number {
//     return this._health;
//   }
//   set health(value: number) {
//     if (isNaN(value)) throw new Error("Invalid input! Health must be a number.");
//     else if (value < 0) throw new RangeError("Invalid input! Health cannot be negative.");
//     else this._health = Math.floor(value);
//   }

//   get maxHealth(): number {
//     return this._maxHealth;
//   }
//   set maxHealth(value: number) {
//     this._maxHealth = Math.ceil(value);
//   }

//   get manaCost(): number {
//     return 20;
//   } // cost of using magic item

//   moveTo(loc: string): void {
//     this._location = loc;
//   }

//   /**
//    * @param targetLoc - the location that the player wants to go
//    * @return true if the movement is successful, false otherwise
//    */
//   tryMoveTo(targetLoc: string): boolean {
//     // If there is no location assigned or the targeted location is not the same as the current one, move to it
//     if (!this._location || this._location === targetLoc) {
//       this.moveTo(targetLoc);
//       return true;
//     } else {
//       console.log(`You are already at ${this._location}.`);
//       return false;
//     }
//   }

//   attack(enemy: Enemy): void {}

//   useItem(item: Item): void {
//     const cost = item.manaCost;
//     if (this.hasMana(cost)) {
//       item.use();
//       this.removeMana(cost);
//     } else {
//       console.log("Not enough mana.");
//     }
//   }

//   addMana(amount: number): void {
//     this._mana += amount;
//   }
//   removeMana(amount: number): void {
//     this._mana -= amount;
//   }
//   hasMana(needed: number): boolean {
//     return this._mana >= needed;
//   }

//   toString(): string {
//     let str = `Name: ${this._name}\n`;
//     str += `Location: ${this._location}\n`;
//     str += `Health: ${this._health}/${this._maxHealth}\n`;
//     str += `Armor Class: ${this._armorClass}\n`;
//     str += `Damage Immunity: ${this._damageImmunities.join(", ")}\n`;
//     str += `Inventory:\n`;

//     for (let i in this._inventory) {
//       str += "\t" + this._inventory[i].toString() + "\n";
//     }

//     return str;
//   }
// }
