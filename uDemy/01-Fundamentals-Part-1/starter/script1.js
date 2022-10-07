let js = `amazing`
//console.log(40 + 8 + 23 - 18)

//value is a piece of data
//console.log(`Jonas`) // Jonas is a value
//console.log(23)     // 23 is a value


// Value is a box in witch we can store stuff in it and call it by name
// With Variables you can change the name of the value just once
// Variable names can contain numbers, letters, $ and underscore
// Dont start variables with upper case letters
// let firstName = `Mariela` // declaring a value, will store this value in the variable
// console.log(firstName)

// let myFirstJob = `programmer`
// let myCurrentJob = `teacher`
// let job1  X
// let job2  X
//console.log(myFirstJob)

/* DATA TYPES
VALUE - 2 types
OBJECT                  PRIMITIVE
let me = {              let firstName = `Jonas`
    name: `Jonas`       let age = 30
}

7 PRIMITIVE DATA TYPES
MOST IMPORTANT
1. Numbers. Floating point numbers -> Used for decimals and integers
let age = 23
2.Strings. Sequence og characters -> Used for text
let firstName = `Jonas`
3.Boolean. Logical type that can only be true or false -> Used for taking decisions
let fullAge = true
REST
4. Undefined. Value taken by a variable that is not yet defined (empty value)
let children
5.Null. ALso means `empty value`
6.Symbol (ES2015). Value that is unique and cannot be changed  [not useful for now]
7. BigInt (ES2020). Larger integers than the Number type can hold

!! JS has dynamic typing: We do not have to manually define the data type of the value
stored in a variable. Instead, data types are determined automatically
VALUE HAS TYPE, NOT VARIABLE

true // Boolean
let javaS = true // storing boolean in variable "let"
console.log(javaS) // the value holds the data type not the variable

// console.log(typeof true) // console logs "boolean", shows the type of the value
console.log(typeof javaS) // -> boolean
// console.log(typeof 23) // -> number
// console.log(typeof `Jonas`) // -> string

javaS = `Yes!` // when we change the value, we dont need to add the "let"
console.log(typeof javaS) // changed the value to string from boolean

let year // empty variable, holds the value of undefined
console.log(year); //undefined is both the value and the type
console.log(typeof year) //undefined

year = 1998
console.log(year) // has value -> 1998
console.log(typeof year) // has type of a number

console.log(typeof null) // type of null is object?! no sense, error! */

// let age = 24 // use "let" when we change/mutate/reassign the value later on.
// age = 25

// const birthYear = 1998; // cant be changed/reassign/mutated
// birthYear = 1999

// const job // cant leave it without value

// var job = `programmer` //works as let, but dont use it!
// job = `doctor`

// lastName = `Markova`
// console.log(lastName);

// MATH Operators
// const now = 2037
// const ageJonas = now - 1998
// const ageSarah = now - 2020
// console.log(ageJonas, ageSarah)

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 meand 2 to the power of 3 = 2 * 2 * 2

// const firstName = `Mariela`
// const lastName = `Markowa`
// console.log(firstName + ` ` + lastName)
// console.log(`${firstName} ${lastName}`)

// Assigment operators
// let x = 10 + 5 // "=" is operator. x is 15
// x += 10 // "+=" means x = x + 10 = 25
// x *= 4 // x = x * 4 = 100
// x++ // x = x + 1 = 101
// x-- //x = x - 1 = 99
// console.log(x)

// Comparison operators, used for booleans
// console.log(ageJonas > ageSarah) // 39 > 17 = true
// console.log(ageJonas < ageSarah) // 39 < 17 = false
// // >, <, >=, <=
// console.log(ageSarah >= 16) // true

// const isFullAge = ageSarah >= 18;
// console.log(`hello`)

// Operator Precedence
// MDN web docs precedence for info about the order/precedence of the operations
// const now = 2037
// const ageJonas = now - 1998
// const ageSarah = now - 2020

// console.log(now - 1998 > now - 2020)
// console.log(25 - 10 - 5)

// let x, y // declare 2 empty values
// x = y = 25 - 10 - 5 // x = y = 10,
// console.log(x, y) // both x and y = 10, in the conspole --> 10 10

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge)


// STRINGS AND TEMPLATE LITERALS
// const firstName = `Mariela`
// const job = `teacher`
// const birthYear = 1998
// const year = 2022

// const mariela = `I'm ` + firstName + ", a " + (year - birthYear) + " yeras old " + job + "!"
// console.log(mariela) // 2 long and hard to keep track of the spaces between variables and strings

// const marielaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(marielaNew)  // this is template literal -> faster and easier

// console.log(`just a test`)
// console.log(`stirng with
// multiple
// lines`) // ако използваме тези кавички директно ти слага стринга на нов ред без да се налага да пишеш /n/


// TAKING DECISIONS: IF / ELSE STATEMENTS
// const age = 19  // greater or equal

// if (age >= 18) { // в обикновените скоби, винаги слагаме булеан
//     console.log(`Sarah can start driving license 😋`)   // за емоджита уиндоус + точка
// }
// else {
//     console.log(`Sarah cant start driving license`)
// }

// const age = 15  // greater or equal

// if (age >= 18) { // в обикновените скоби, винаги слагаме булеан
//     console.log(`Sarah can start driving license 😋`)   // за емоджита уиндоус + точка
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
// }

/*
if(){

} else{     //control sturcture

}
*/

// const birthYear = 1991

// let century
// if (birthYear <= 2000) {  //в обикновените скоби слагаме кондишън който да се превърне в ture/false
//     century = 20
// } else {
//     century = 21
// }
// console.log(century)


// TYPE CONVERSION AND COERCION
// type conversion manually convert types
// type coercions when JS automatically convert types

// type conversion
// const inputYear = `1998` // still a string
// console.log(Number(inputYear)) // convert the string into number by "Number()"
// console.log(inputYear + 18) // string + number = concatination 199818

// console.log(Number`Marji`) // we get `NaN` = not a number
// console.log(typeof NaN) // NaN = invalid number

// console.log(String(23)) // convert the number into string with `String()`
// console.log(typeof String(23)) // is a string

// // type coercion
// console.log(`I'm ` + 23 + ` years old`)
// console.log(`I'm ` + `23` + ` years old`) // numbers to strings with "+"
// console.log(`23` - `10` - 3) // strings to numbers automatically with "-"

// let n = `1` + `1` // 11
// n = n - 1; // 11 - 1 = 10
// console.log(n) // -> 10


// TRUTHY AND FALSY VALUES
// 5 falsy values: 0, ``, undefined, null, NaN -> will become false when convertet into booleans

// console.log(Boolean(0)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(`Marji`)) // true
// console.log(Boolean(``)) // false
// console.log(Boolean({})) // true

// const money = 0 // converts the zero to false so the console prints the `else` statemant
// if (money) {
//     console.log(`Don't spent it all`)
// } else {
//     console.log(`You should get a job`)
// } // you should get a job

// let height =
// if (height) {
//     console.log(`YAY! Hight is defind`)
// } else {
//     console.log(`Height is UNDEFINED`)
// } // height is undefined so it prints the `else`statemant
// // if height = 0 -> height is undefined because the zero is a falsey value


// EQUALITY OPERATORS: == VS ===
// const age = 18
// if (age === 18)
//     console.log(`You just became an adult!`)

// console.log(18 === 19) // false
// // "===" -> strict doesnt performe type coercion, "==" -> loose and performs type coercion
// console.log(`18` == 18) // this performs type coercion
// // use the ===! and transform the value manually

// const favorite = Number(prompt(`What's your favorite number?`))
// console.log(favorite) // logs as string

// if (favorite === 23) {
//     console.log(`Cool 23 is an amazing number`)
// } else if (favorite === 7) {                      //adds additional statements
//     console.log(`7 is also a cool number`)
// } else if (favorite === 9) {
//     console.log(`9 is also a cool number`)
// } else {
//     console.log(`The number is not 23, 7 or 9`)
// }

// if (favorite !== 23) { // !== different log "why not 23"
//     console.log(`Why not 23?`)
// }