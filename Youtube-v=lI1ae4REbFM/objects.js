/* OBJECTS - type of variable, quite similar to arrays 
but they have something called key-value pairs. */

/* Object Properties
person.name = `leonardo`
person.shirt = `white` */

// const person = {
//     name: `Leonardo`,
//     shirt: `white`
// }
//access object: dot notation
// console.log(person.shirt)
// console.log(person.name)

// bracket notation
// console.log(person[`name`])
// console.log(person[`shirt`])

//asign object
// person.phone = `0894384283`
// console.log(person.phone)

// console.log(person) 

// person2
// const person2 = {
//     name: `Mariela`,
//     age: `24`,
//     shirt: `Black`
// }
// console.log(person2)
// console.log(person2.name)
// console.log(person2.shirt)


/* function with 2 arguments
object
template literals */
function intorducer(name, shirt){
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        dept: 50000
    }
   const intro = `Hi, my name is ${person.name} and the colour of my shirt 
   is ${person.shirt} and my net worth is ${person.assets - person.dept} LV `
   return intro
}
console.log(intorducer(`Mariela`, `black`))
console.log(intorducer(`Leonardo`, `white`))