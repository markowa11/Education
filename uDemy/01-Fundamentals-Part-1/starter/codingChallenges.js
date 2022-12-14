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

// if (bmiMark > bmiJhon) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJhon})! `)
// } else {
//     console.log(`John's BMI (${bmiJhon}) is higher than Mark's (${bmiMark})!`)
// }

/* CОDING CHALLANGE #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101 Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

// const averageDolphins = (96 + 108 + 89) / 3
// const averageKoalas = (88 + 91 + 110) / 3
// const minimumScore = 100

// if (averageDolphins > averageKoalas) {
//     console.log(`Team Dolphins wins the trophy!`)
// } else {
//     console.log(`Team Koalas wins the trophy!`)
// }

// const averageDolphins = (97 + 112 + 101) / 3
// const averageKoalas = (109 + 95 + 123) / 3
// const minimumScore = 100

// if ((averageDolphins > averageKoalas) && averageDolphins >= minimumScore) {
//     console.log(`Team Dolphins wins the trophy!`)
// } else if (((averageDolphins < averageKoalas) && averageKoalas >= minimumScore)) {
//     console.log(`Team Koalas wins the trophy`)
// } else if (averageDolphins = averageKoalas >= minimumScore) {
//     console.log(`It's a draw!`)
// } else {
//     console.log(`No one wins the trophy this year!`)
// }

//§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// const averageDolphins = (97 + 112 + 101) / 3
// const averageKoalas = (109 + 95 + 106) / 3
// const minimumScore = 100
// console.log(averageDolphins, averageKoalas)

// if ((averageDolphins > averageKoalas) && averageDolphins >= minimumScore) {
//     console.log(`Team Dolphins wins the trophy!`)
// } else if ((averageDolphins < averageKoalas) && averageKoalas >= minimumScore) {
//     console.log(`Team Koalas wins the trophy`)
// } else if ((averageDolphins === averageKoalas) && averageDolphins >= minimumScore) {
//     console.log(`It's a draw!`)
// } else {
//     console.log(`No one wins the trophy this year!`)
// }


// CODING CHALLANGE #4

// const bill = 275
// const tip

// const bill = 275
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
// } else {
//     tip = bill * 0.20
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
// }
