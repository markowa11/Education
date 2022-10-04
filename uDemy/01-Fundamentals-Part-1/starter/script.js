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
const now = 2037
const ageJonas = now - 1998
const ageSarah = now - 2020
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 meand 2 to the power of 3 = 2 * 2 * 2

const firstName = `Mariela`
const lastName = `Markowa`
console.log(firstName + ` ` + lastName)
console.log(`${firstName} ${lastName}`)

// Assigment operators 
let x = 10 + 5 // "=" is operator. x is 15
x += 10 // "+=" means x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ // x = x + 1 = 101
x-- //x = x - 1 = 99
console.log(x)

// Comparison operators, used for booleans 
console.log(ageJonas > ageSarah) // 39 > 17 = true
console.log(ageJonas < ageSarah) // 39 < 17 = false
// >, <, >=, <=
console.log(ageSarah >= 16) // true 

const isFullAge = ageSarah >= 18;

// 1:59:03;;