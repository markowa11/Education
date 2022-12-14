// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments

// const myCountry = {
//     county: `Bulgaria`,
//     capital: `Sofia`,
//     language: `bulgarian`,
//     population: `7 milion`,
//     neighbours: [`Romania`, `Serbia`, `Turkey`]
// }
// console.log(myCountry)

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// const myCountry = {
//     county: `Bulgaria`,
//     capital: `Sofia`,
//     language: `bulgarian`,
//     population: 7,
//     neighbours: [`Romania`, `Serbia`, `Turkey`]
// }

// // console.log(`${myCountry.county} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length}
// // neighbouring countires and a capital called ${myCountry.capital}`)

// console.log(`${myCountry.county} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length}
// neighbouring countires and a capital called ${myCountry.capital}`)

// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

// const myCountry = {
//     county: `Bulgaria`,
//     capital: `Sofia`,
//     language: `bulgarian`,
//     population: 7,
//     neighbours: [`Romania`, `Serbia`, `Turkey`],
//     isIsland: true,

//     describe: function () {
//         return `${this.county} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countires and a capital called ${this.capital}.
//         the country is ${this.isIsland ? `an` : `isnt`} island`
//     }
// }

// console.log(myCountry.describe())

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`)
// }

// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

// const myCountry = {
//     county: `Bulgaria`,
//     capital: `Sofia`,
//     language: `bulgarian`,
//     population: 7,
//     neighbours: [`Romania`, `Serbia`, `Turkey`]
// }

// const populations = [10, 1441, 332, 83];
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages2.push(perc);
// }
// console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway ???

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia'],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++)
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages3.push(perc);
//     i++;
// }
// console.log(percentages3);