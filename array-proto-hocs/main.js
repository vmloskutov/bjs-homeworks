"use strict"
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every(function(value, index) { return value === arr2[index]})
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memoize(fn, limit) {

  const results = [];

  for (let i = 0; i < results.length; i++){
    if (compareArrays(results[i].args, arguments)) {

      return results.result;
    }
  }

  if (results.length > limit)
    results.shift();

  let memory = {args: arguments , result: fn};
  results.push(memory);
  return fn;

}



const sum = (a, b) => a + b;

const mSum = memoize(sum, 2); // 2 результата хранятся в памяти

// Вызов этих функций даёт один и тот же результат
console.log(sum( 3, 4 )); // 7
/*
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
console.log(mSum( 3, 4 )); // 7
console.log(mSum( 3, 4 )); // 7
console.log(mSum( 1, 3 )); // 4);
