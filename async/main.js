function setDailyRhythm(wakeUpTime, bedTime) {

    const goodMorning = () => alert('Доброе утро, Вася!');
    const goodNight = () => alert('Спокойной ночи, Вася!');

    const checkWakeUp = setAlarm(wakeUpTime, goodMorning);
    const checkBed = setAlarm(bedTime, goodNight);

    setInterval(checkWakeUp, 10000);
    setInterval(checkBed, 10000);
}

function setAlarm(time, callback) {
    return function () {
        const now = new Date();
        const hours = now.getHours().toString();
        const minutes = now.getMinutes().toString();
        let resultTime = "";
        
        if (minutes.length < 2)
           resultTime = hours + ":" + 0 + minutes;
        else resultTime = hours + ":" + minutes;

        if (resultTime === time) {
            callback();
        }
    }
}


setDailyRhythm('7:30','19:07');
