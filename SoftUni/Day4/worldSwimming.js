function worldSwimmingRecord(input) {
    let recordTime = Number(input[0])
    let distance = Number(input[1])
    let timeForOneMeter = Number(input[2])

    let timeIvanSwimsTheDistance = distance * timeForOneMeter
    let addedTime = Math.floor(distance / 15)
    let addedTime2 = addedTime * 12.5


    let totalTime = timeIvanSwimsTheDistance + addedTime2


    if (totalTime < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordTime).toFixed(2)} seconds slower.`)
    }
}

// worldSwimmingRecord(["10464", "1500", "20"])
worldSwimmingRecord(["55555.67", "3017", "5.03"])
/*
Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
o " Yes, he succeeded! The new world record is {времето на Иван} seconds."
· Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
o "No, he failed! He was {недостигащите секунди} seconds slower."
Резултатът трябва да се форматира до втория знак след десетичната запетая.
*/