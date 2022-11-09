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

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const jonas = {
//     fistName: `Jonas`,
//     lastName: `Markow`,
//     age: 23,                                   // object jonas has 6 properties
//     job: `teacher`,
//     friends: [`Max`, `Caroline`]
// }

// const jonas = {
//     fistName: `Mariela`,
//     lastName: `Markowa`,
//     age: 23,
//     job: `teacher`,
//     friends: [`Max`, `Caroline`, `jax`]
// }
// // console.log(jonas)
// // console.log(jonas.friends)
// // console.log(jonas[`age`])

// // const nameKey = `Name`
// // console.log(jonas[`fist` + nameKey])
// // console.log(jonas[`last` + nameKey])

// // const interest = prompt(`What do you want to know about Mariela?`)
// // console.log(jonas[interest])

// // if (jonas[interest]) {
// //     console.log(jonas[interest])
// // } else {
// //     console.log(`Wrong request!`)
// // }

// // jonas.location = `Bulgaria`
// // console.log(jonas)

// // challange
// // `Mariela has 3 friends and his bf is called Martina`

// console.log(jonas.fistName + `has 3 friends and hif bj is called ` + jonas.friends[0])
// console.log(`${jonas.fistName} has ${jonas.friends.length} friends and his bf is ${jonas.friends[0]}`)

// const jonas = {
//     fistName: `Mariela`,
//     lastName: `Markowa`,
//     birthYear: 1998,
//     job: `teacher`,
//     friends: [`Max`, `Caroline`, `jax`],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2023 - birthYear
//     // }

//     // calcAge: function () {
//     //     return 2023 - this.birthYear
//     // }

//     calcAge: function () {
//         this.age = 2023 - this.birthYear
//         return this.age
//     }
// }

// console.log(jonas.calcAge())

// console.log(jonas.calcAge())
// console.log(jonas.calcAge())
// console.log(jonas.age)

// challange
// `Mariela is a 24-year old teacher, and he has a/no drivers license` 


const jonas = {
    fistName: `Mariela`,
    lastName: `Markowa`,
    birthYear: 1998,
    job: `teacher`,
    friends: [`Max`, `Caroline`, `jax`],
    hasDriversLicense: true,
    calcAge: function () {
        return 2023 - this.birthYear
    },
    getSummary: function () {
        return `${this.fistName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} drivers license`
    }
}

console.log(jonas.getSummary())
