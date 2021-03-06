/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// Code refactored from prototypes.js in Javascript III

class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }

  // Methods
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(charAttributes) {
    super(charAttributes);
    this.healthPoints = charAttributes.healthPoints;
  }

  // Methods
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humAttributes) {
    super(humAttributes);
    this.team = humAttributes.team;
    this.weapons = humAttributes.weapons;
    this.language = humAttributes.language;
  }

  // Methods
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

class Villain extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }

  // Methods
  attack(object) {
    object.healthPoints -= Math.floor(Math.random() * 5) + 1;
    return `${this.name} savagely attacks ${object.name}.\n${object.name}'s healthpoints are now ${object.healthPoints}`;
  }

  fight(object) {
    while(object.healthPoints > 0 && this.healthPoints > 0) {
      console.log(this.attack(object));
      console.log(object.attack(this));
    }

    if(object.healthPoints <= 0 && this.healthPoints <= 0) {
      return [ object.destroy(), this.destroy() ];
    } else if (object.healthPoints <= 0) {
      return object.destroy();
    } else {
      return this.destroy();
    }
  }
}

class Hero extends Villain {
  constructor(attributes) {
    super(attributes);
  }
}

const bob = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 3,
  },
  healthPoints: 20,
  name: `Bob`,
  team: `Evil Knights of Death`,
  weapons: [
    `Flaming Sword`,
    `Bow of Destruction`,
  ],
  language: `Evilese`,
});

const jane = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 20,
  name: `Jane`,
  team: `Good Wizards of Happiness`,
  weapons: [
    `Blessed Staff of Wizardry`,
    `Friendly Dagger of Pointiness`,
  ],
  language: `Goodish`,
});

console.log(bob.attack(mage));
console.log(jane.attack(archer));
console.log(bob.fight(jane));