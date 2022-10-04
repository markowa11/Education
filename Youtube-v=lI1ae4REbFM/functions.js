//FUNCTIONS
function sayMyName() { // this is a function called "sayMyName" with 0 arguments. It logs out your name in the console.
    console.log(`Marji`)
}
//sayMyName() // calling a function by "()"

function sayMyName2(name) { // this is a function called "sayMyName2" with 1 argument called "name". It logs out yout name in the console.
    console.log(name)
}
//sayMyName2(`Marji`)

function greeting(name) {
    //greet = `hi ` + name + `, nice to meet you!`
    //templet literals
    greet = `Hi ${name}, nice to meet you!`
    console.log(greet)
}
//greeting(`Marji`)

function sum(a, b) {
    //return
    return a + b
}
num1 = sum(1, 2)
//console.log(num1)

function calculateTipAndFoodAmount(food, tip) {
    let tipPercentage = tip / 100
    let tipAmount = food * tipPercentage
    let total = sum(food, tipAmount)
    return total
}

// console.log(calculateTipAndFoodAmount(300, 20))

//Arrow function with explicit return
const summArrow = (a, b) => {
    return a + b
}

// arrow function with implicit return !! Remove the curly braces!!

const summArrow2 = (a, b) => a + b
// console.log(summArrow2(10, 50))

/*return function makes the whole function reusable.
You can use the same function in multiple places.*/
function sum(a, b) {
    return a + b

}
num1 = sum(1, 2)
// console.log(num1)


function calculateTotal(food, tip) {
    tipPercentage = tip / 100
    tipAmount = food * tipPercentage
    total = sum(food, tipAmount)
    return total
}
//console.log(calculateTotal(100, 20));

//EXERCISE
function add(a, b) {
    return a + b
}
console.log(add(1, 2))

function sub(a, b) {
    return a - b
}
console.log(sub(2, 2));

function div(a, b) {
    return a / b 
}
console.log(div(20, 5))

function mul(a, b) {   
    return a * b
}
console.log(mul(5, 4))
