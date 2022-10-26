function onTimeForTheExam(input) {
    const examHour = Number(input[0]); //9
    const examMin = Number(input[1]); //30
    const arriveHour = Number(input[2]); //9
    const arriveMinutes = Number(input[3]); //50

    let examTime = examHour * 60 + examMin; // 9*60 + 30 = 570
    let arrivalTime = arriveHour * 60 + arriveMinutes; // 9*60 + 50 = 590
    let timeDifference = examTime - arrivalTime; // 570 - 590 = -20

    let earlyHour = 0;
    let earlyMin = 0;
    let lateHour = 0;
    let lateMin = 0;

    // On time
    if (timeDifference >= 0 && timeDifference <= 30) {
        if (timeDifference == 0) {
            console.log('On time');
        } else {
            console.log('On time');
            console.log(`${timeDifference} minutes before the start`);
        }
    }
    // Early
    else if (timeDifference > 30) {
        earlyHour = Math.floor(timeDifference / 60);
        earlyMin = timeDifference % 60;
        if (timeDifference > 30 && timeDifference <= 59) {
            console.log('Early');
            console.log(`${timeDifference} minutes before the start`);
        } else if (earlyMin < 10) {
            console.log('Early');
            console.log(`${earlyHour}:0${earlyMin} hours before the start`);
        } else {
            console.log('Early');
            console.log(`${earlyHour}:${earlyMin} hours before the start`);
        }
        // Late
    } else {
        timeDifference = Math.abs(timeDifference); // 20
        lateHour = Math.floor(timeDifference / 60); // 00
        lateMin = timeDifference % 60; // 20
        if (timeDifference <= 59) {
            console.log('Late');
            console.log(`${timeDifference} minutes after the start`);
        } else if (lateMin < 10) {
            console.log('Late');
            console.log(`${lateHour}:0${lateMin} hours after the start`);
        } else {
            console.log('Late');
            console.log(`${lateHour}:${lateMin} hours after the start`);
        }
    }
}

onTimeForTheExam(["9", "30", "9", "50"])

/*
На първият ред отпечатайте:
· "Late", ако студентът пристига по-късно от часа на изпита.
· "On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
· "Early", ако студентът пристига повече от 30 минути преди часа на изпита.

Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
· "mm minutes before the start" за идване по-рано с по-малко от 1.
· "hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
· "mm minutes after the start" за закъснение под час.
· "hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".
*/