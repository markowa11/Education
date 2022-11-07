// `use strict`;

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log(`i can drive`)

// // const interface = `Audio`
// // const private = 453

// FUNCTIONS

// // declarations
// function calcage2(birthday) {
//     return 2022 - birthday
// }
// const age2 = calcage2(1998)
// console.log(age2)

// // expresions
// const calcage1 = function (birth) {
//     return 2022 - birth
// }
// const age1 = calcage1(1998)
// console.log(age1)

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)