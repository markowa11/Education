// CODING CHALLANGE #1
/*
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */
// let markHeight = 1.69
// let markWeight = 78
// let johnHeight = 1.95
// let johnWeight = 92

// let markHeight = 1.88
// let markWeight = 95
// let johnHeight = 1.76
// let johnWeight = 85

// let bmiMark = markWeight / markHeight ** 2
// let bmiJhon = johnWeight / (johnHeight * johnHeight)
// console.log(bmiJhon, bmiMark)

// let markHigherBMI = bmiMark > bmiJhon
// console.log(markHigherBMI)

// CODING CHALLANGE #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/
let markHeight = 1.69
let markWeight = 78
let johnHeight = 1.95
let johnWeight = 92

// let markHeight = 1.88
// let markWeight = 95
// let johnHeight = 1.76
// let johnWeight = 85

let bmiMark = markWeight / markHeight ** 2
let bmiJhon = johnWeight / (johnHeight * johnHeight)
console.log(bmiJhon, bmiMark)

if (bmiMark > bmiJhon) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJhon})! `)
} else {
    console.log(`John's BMI (${bmiJhon}) is higher than Mark's (${bmiMark})!`)
}