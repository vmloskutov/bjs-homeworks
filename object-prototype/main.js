function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    sound = animal.sound;
    if (sound === undefined)
      return null
    else return sound

}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let summ = 0;
    for (let i = 0; i < marks.length; i++) {
      summ += parseInt(marks[i]);
    }
    console.log(summ);
    console.log(marks.length);
    average = summ / marks.length;
    roundedAverage = Math.round(average);
    console.log(roundedAverage);

    return roundedAverage
}
