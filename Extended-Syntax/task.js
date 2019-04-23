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
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}
