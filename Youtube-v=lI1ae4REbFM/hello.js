// watch?v=lI1ae4REbFM

console.log(`hello world`)

// variables = comments
name = `Mariela`
sentence = `how is your day?`
console.log(name)
console.log(sentence)

// operators
food = 20
tipPercentage = 0.2
tipAmount = food * tipPercentage

console.log(tipAmount)

// user input = prompt for browser coding (replit.com)
fruit = prompt(`what is your favorite fruit?`)

console.log(fruit)

// user imput 2
food = prompt(`how much was the food?`)
tipPercentage = 0.2
tipAmount = food * tipPercentage

console.log(`your tip amoutn is: ${tipAmount}.`)

// user imput 3
food = prompt(`how much was the food?`)
tipPercentage = prompt(`tip %?`) / 100
tipAmount = food * tipPercentage

console.log(`your tip amoutn is: ${tipAmount}$.`)

// user imput 4
food = prompt(`how much was the food?`)
tipPercentage = prompt(`tip %?`) / 100
tipAmount = food * tipPercentage
total = food + tipAmount


console.log(`your total is: ${total}$.`)
//outcome 204

// user imput 5
food = Number(prompt(`how much was the food?`))
tipPercentage = Number(prompt(`tip %?`) / 100)
tipAmount = food * tipPercentage
total = food + tipAmount


console.log(`your total is: ${total}$.`)
//outcome 24

//user imput 6
food = Number(prompt(`how much was the food?`))
tipPercentage = Number(prompt(`tip %?`) / 100)
tipAmount = food * tipPercentage
console.log(`Tip: ${tipAmount}$`)
total = food + tipAmount


console.log(`Total: ${total}$.`);