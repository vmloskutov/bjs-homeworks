// Инициализация переменных
let algebra;
let geography;
let physics;
let name;
let message;

//Присвоение оценок
algebra = 5;
geography = 4;
physics = 5;
name = "Владимир";

//Составление приветственного сообщения
message = `Привет, мир! Меня зовут ${name}.`;

//Подсчет среднего
let avg = (algebra + geography + physics) / 3;

//Вывод в консоль
console.log(message);
console.log("Средняя оценка по трем предметам: " + avg);
