// Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3
// // console.log(calcAverage(4, 3, 5))

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)
// // console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgDolphins})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log(`No one wins`)
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas)

// function checkWinner() {
//     let avgDolphins = (300 + 23 + 71) / 3
//     let avgKoalas = (65 + 54 + 49) / 3

//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins.toFixed(0)} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log(`No team wins`)
//     }
// }

// checkWinner()

// Coding Challenge #2

// function calculator(input) {
//     let bill = Number(input[0])
//     let tip = 0

//     if (bill >= 50 && bill <= 500) {
//         tip = bill * 0.15
//     } else {
//         tip = bill * 0.20
//     }
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
// }

// calculator([125])

// Coding Challenge #3
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall 
// BMI = mass / height ** 2

const bmiMark = {
    firstName: `Mark`,
    lastName: `Miller`,
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        return this.weight / (this.height * 2)
    }
}

const bmiJohn = {
    firstName: `John`,
    lastName: `Smith`,
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        return this.weight / (this.height * 2)
    }
}

if (bmiJohn.calcBMI() > bmiMark.calcBMI()){
    console.log(`${bmiJohn.firstName}'s BMI (${bmiJohn.calcBMI().toFixed(2)}) is higher than ${bmiMark.firstName}'s (${bmiMark.calcBMI().toFixed(2)})!`)
} 
//Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"