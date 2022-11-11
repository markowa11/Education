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


// const jonas = {
//     fistName: `Mariela`,
//     lastName: `Markowa`,
//     birthYear: 1998,
//     job: `teacher`,
//     friends: [`Max`, `Caroline`, `jax`],
//     hasDriversLicense: true,
//     calcAge: function () {
//         return 2023 - this.birthYear
//     },
//     getSummary: function () {
//         return `${this.fistName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} drivers license`
//     }
// }

// console.log(jonas.getSummary())


// FOR LOOP

// console.log(`Lifting weights repetition 1`)
// console.log(`Lifting weights repetition 2`)
// console.log(`Lifting weights repetition 3`)
// console.log(`Lifting weights repetition 4`)
// console.log(`Lifting weights repetition 5`)

// for loop ceeps runong while condition is true
// for (let rep = 1; rep <= 10; rep++) {  // (variable, condition, the way the variable changes)
//     console.log(`Lifting weights repetition ${rep}`)
// }


// const jonas = [
//     `Jonas`,
//     `Shmetmann`,
//     2037 - 1991,
//     `teacher`,
//     [`Max`, `Peter`, `Steven`],
//     true
// ]

// const types = []

// // console.log(jonas[0])
// // console.log(jonas[1])
// // console.log(jonas[2])
// // jonas[5], does not exist

// // for (let i = 0; i < 5; i++) {          // counter variable
// //     console.log(jonas[i])
// // }

// for (let i = 0; i < jonas.length; i++) {  // `i` --> counter variable
//     console.log(jonas[i], typeof jonas[i])

//     // filling types array
//     // types[i] = typeof jonas[i]
//     types.push(typeof jonas[i])
// }

// console.log(types)

// const birthYears = [1991, 2007, 1969, 2020]
// const ages = []

// for (let i = 0; i < birthYears.length; i++) {
//     ages.push(2037 - birthYears[i])
// }
// console.log(ages)

// CONTINUE AND BREAK

//continue
// for (let i = 0; i < jonas.length; i++) {  // `i` --> counter variable
//     if (typeof jonas[i] !== `string`) continue  // !== not a

//     console.log(jonas[i], typeof jonas[i])
// }

// for (let i = 0; i < jonas.length; i++) {  // `i` --> counter variable
//     if (typeof jonas[i] === `number`) break  // !== not a

//     console.log(jonas[i], typeof jonas[i])
// }


// LOOPING BACKWARDS
// last 0, 1.... 5
// now 5, 4... 0
// const jonas = [
//     `Jonas`,
//     `Shmetmann`,
//     2037 - 1991,
//     `teacher`,
//     [`Max`, `Peter`, `Steven`],
//     true
// ]

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i])
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`--Starting exercise ${exercise}--`)

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exersice ${exercise}: lifting weights ${rep}`)
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {  // (variable, condition, the way the variable changes)
//     console.log(`Lifting weights repetition ${rep}`)
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep}`)
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1   // това е като брейк иначе ще е безкраен луууп
//     if (dice === 6) console.log(`Loop is about to end...`)
// }