"use strict"
class Weapon {
  constructor(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.durability = obj.durability;
    this.range = obj.range;
    this.originalDurability = obj.durability;
  }

  takeDamage(damage) {
    if (this.durability - damage > 0)
      this.durability = this.durability - damage;
    else this.durability = 0;
  }

  getDamage() {
    if (this.durability <= this.originalDurability * 0.3 && this.durability != this.originalDurability){
      this.attack = this.attack / 2;
    }
    if (this.durability === 0) {
      this.attack = 0;
    }
  }

  isBroken() {
    if (this.durability > 0)
      return false
    else return true;

  }
}

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});

const ax = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: 1,
});

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: 200,
  range: 4,
});

const knife = new Weapon({
  name: "Нож",
  attack: 5,
  durability: 300,
  range: 1,
});

const stick = new Weapon({
  name: "Посох",
  attack: 8,
  durability: 300,
  range: 2,
});

const superStick = new Weapon({
  name: "Посох Бури",
  attack: 10,
  durability: 300,
  range: 3,
});







//Проверки методов и пограничных значений
console.log(sword);
sword.takeDamage(5);
console.log(sword.durability); // 5
sword.takeDamage(50);
console.log(sword.durability); // 0
console.log(arm);
arm.takeDamage(20);
console.log(arm.durability); // Infinity
console.log(bow);
bow.takeDamage(20);
console.log(bow.durability); // 180
bow.takeDamage(200);
console.log(bow.durability); // 0
console.log(bow.durability); // 0
console.log(bow.getDamage());
console.log(bow.attack);// 0
console.log(arm.durability); // Infinity
console.log(arm.getDamage());
console.log(arm.attack);// 1
console.log(bow.durability); // 0
console.log(bow.isBroken()); // true
console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false
