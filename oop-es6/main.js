"use strict"
class Weapon {
  constructor() {
    this.name = undefined;
    this.attack = undefined;
    this.durability = undefined;
    this.range = undefined;
    this.originalDurability = this.durability;
  }

  takeDamage(damage) {
    if (this.durability - damage > 0)
      this.durability = this.durability - damage;
    else this.durability = 0;
  }

  getDamage() {
    console.log("____");
    console.log(this.originalDurability);
    console.log("____");
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

class Sword extends Weapon {
  constructor(){
    super();
    this.name = "Меч";
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
    this.originalDurability = this.durability;
  }
}

class Ax extends Sword {
  constructor(){
    super();
    this.name = "Секира";
    this.attack = 27;
    this.durability = 800;
    this.originalDurability = this.durability;
  }
}

class Arm extends Weapon {
  constructor(){
    super();
    this.name = "Рука";
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
    this.originalDurability = this.durability;
  }
}

class Bow extends Weapon {
  constructor(){
    super();
    this.name = "Лук";
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
    this.originalDurability = this.durability;
  }
}

class LongBow extends Bow{
  constructor(){
    super();
    this.name = "Длинный лук";
    this.attack = 15;
    this.range = 4;
    this.originalDurability = this.durability;
  }
}

class Knife extends Weapon {
  constructor(){
    super();
    this.name = "Нож";
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
    this.originalDurability = this.durability;
  }
}

class Stick extends Weapon {
  constructor(){
    super();
    this.name = "Посох";
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
    this.originalDurability = this.durability;
  }
}

class SuperStick extends Bow{
  constructor(){
    super();
    this.name = "Посох Бури";
    this.attack = 10;
    this.range = 3;
    this.originalDurability = this.durability;
  }
}

const bow = new Bow();

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3
bow.takeDamage(181);
console.log(bow.durability);
bow.getDamage();
console.log(bow.attack);
console.log(bow.isBroken());
