"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let solutions = [];
    let solution = null;
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0)
      console.log("Дискриминант меньше 0, корней нет!");
    else if (discriminant === 0){
      solution = - b / (2 * a);
      console.log(solution);
      return solution;
    } else {
      solution = (- b + Math.sqrt(discriminant)) / (2 * a);
      solutions.unshift(solution);
      solution = (- b - Math.sqrt(discriminant)) / (2 * a);
      solutions.unshift(solution);
      console.log(solutions);
      return solutions;
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let result;
    let year = dateOfBirthday.getFullYear();
    let month = dateOfBirthday.getMonth();
    let day = dateOfBirthday.getDate();

    let today = new Date();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();

    if ((currentYear - year > 18) || ((currentYear - year === 18) && (currentMonth > month)) || ((currentYear - year === 18) && (currentMonth === month) && (currentDay >= day)))
      result = `Не желаете ли олд-фэшн, ${name}?`;
    else
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    console.log(result);
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sum = 0;
    let amount = marks.length;
    if (amount >= 5) {
      console.log("Оценок больше 5, будут считаться только первые 5");
      amount = 5;
    }

    for (let i = 0; i < amount; i++) {
      sum += marks[i];
    }
    let averageMark = sum / amount;
    return averageMark;
}
