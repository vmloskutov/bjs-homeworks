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

function findAverage(subject) {
  let summ = 0;
  for (let i = 0; i < subject.length; i++){
    summ += subject[i];
  }
  return summ / subject.length
}

function getAverageScore(data) {
  let summ = 0;
  let count = 0;
  let student = new Object();
  for (let subject in data) {
    student[subject] = findAverage(data[subject]);
    summ += student[subject];
    count++;
  }
  student.average = summ / count;
  return(student)
}

function declassify(secret){
  if (secret === 0)
    return "Родриго";
  else return "Эмильо";
}

function getPersonData(secretData) {

  secretData.firstName = secretData.aaa;
  delete secretData.aaa;
  secretData.lastName = secretData.bbb;
  delete secretData.bbb;

  for (let i in secretData) {
    secretData[i] = declassify(secretData[i]);
  }
  return secretData;
}
