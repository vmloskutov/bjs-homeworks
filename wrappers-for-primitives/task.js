"use strict"


//Функция для подсчета месяцев из Даты
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTerm(date) {

  let term = new Date(date);
  let year = term.getFullYear();
  let month = term.getMonth();

  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();

  let result = (year - currentYear) * 12 + (month - currentMonth);

  return result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
// Из условия задачи так и не понял, как должен вводиться 4 парметр.
// Пользователь вводит в месяцах или все-таки дату какую-то??
// Очень непонятно написаны условия.
    percent = 1 / 12 * parseInt(percent) / 100;
    contribution = parseInt(contribution);
    amount = parseInt(amount);

//Для случая, если все-таки вводится кол-во месяцев, как в примере.
//month = parseInt(date);
//Для случая, если вводится конечная дата. Тк посмотрел, что в HTML type прописан date
    let month = calculateTerm(date);

    let returnBackSumm = amount - contribution;
    let monthPayment = returnBackSumm * (percent + percent / (((1 + percent) ** month) - 1));
    let totalAmount = month * monthPayment;
    totalAmount = totalAmount.toFixed(2);
// Так и не разобрался из условия, что хотят от меня на выходе, сделал по примерам.
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}
