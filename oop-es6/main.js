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

console.log("-----------------------------------------");
//------------------------------------------------------------------------------

class StudentLog {
  constructor(name){
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (grade <= 5 && grade >= 1) {
      if (this[subject] === undefined){
        this[subject] = [];
        this[subject].push(grade);
      } else {
        this[subject].push(grade);
      }
    } else {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
    }
    if (this[subject] === undefined) {
      return 0;
    } else {
      return this[subject].length;
    }
  }

  getAverageBySubject(subject) {
    if (this[subject] === undefined) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < this[subject].length; i++) {
        sum += this[subject][i];
      }
      return sum / this[subject].length;
    }
  }

  getTotalAverage() {
    let length = 0;
    let sum = 0;

    for (let subject in this) {
      if (Array.isArray(this[subject])) {
        length += this[subject].length;
        for (let i = 0; i < this[subject].length; i++){
          sum += this[subject][i];
        }
      }
    }
    if (sum === 0)
      return 0;
    else return sum / length;
  }
}
const log2 = new StudentLog('Олег Никифоров');
console.log(log2.getName()) // Олег Никифоров

console.log(log2.addGrade(3, 'algebra'));
// 1

console.log(log2.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log2.addGrade(4, 'algebra'));
// 1

console.log(log2.addGrade(5, 'geometry'));
// 1

console.log(log2.addGrade(25, 'geometry'));

const log1 = new StudentLog('Олег Никифоров');

log1.addGrade(2, 'algebra');
log1.addGrade(4, 'algebra');
log1.addGrade(5, 'geometry');
log1.addGrade(4, 'geometry');

console.log(log1.getAverageBySubject('geometry')); // 4.5
console.log(log1.getAverageBySubject('algebra')); // 3
console.log(log1.getAverageBySubject('math')); // 0

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage());
