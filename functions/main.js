"use strict"

function getSolutions(a, b, c) {
  let D = b ** 2 - 4 * a * c;
  if (D < 0)
    return {
      D
    }
  if (D === 0) {
    let x1 = -b / (2 * a);
    return {
      roots: [x1],
      D
    }
  }
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {
      roots: [x1, x2],
      D
    }
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.hasOwnProperty('roots')) {
    switch (result.roots.length) {
      case 1:
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
        break;
      case 2:
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
        break;
    }
  } else {
    console.log("Уравнение не имеет вещественных корней");
  }
}


function getAverageScore(data) {
  let student = new Object();
  for (let subject in data) {
    let summ = 0;
    for (let i = 0; i < data[subject].length; i++){
      summ += data[subject][i];
    }
    student[subject] = summ / data[subject].length;
  }
  // В задание не указано, как должна считаться средняя по всем предметам,
  // поэтому я беру среднюю оценку от средних по всем предметам.
  let summ = 0;
  let count = 0;
  for (let subject in student) {
    summ += student[subject];
    count++;
  }
  student.average = summ / count;
  return(student)
}
