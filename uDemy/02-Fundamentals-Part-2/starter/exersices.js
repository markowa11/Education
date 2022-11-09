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

const myCountry = {
    county: `Bulgaria`,
    capital: `Sofia`,
    language: `bulgarian`,
    population: 7,
    neighbours: [`Romania`, `Serbia`, `Turkey`],
    isIsland: true,

    describe: function () {
        return `${this.county} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countires and a capital called ${this.capital}.
        the country is ${this.isIsland ? `an` : `isnt`} island`
    }
}

console.log(myCountry.describe())