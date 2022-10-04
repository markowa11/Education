// ARRAYS - allow you to store multiple values inside of them
//counts from zero
let groceries = [`banana`, `apple`, `orange`, `pear`] // 4 indexes
// console.log(groceries)
// console.log(groceries[0])
// console.log(groceries[1])
// console.log(groceries[3]) //grabbing the fourt index
groceries.push(`strawberry`) // push adds to the array
// //console.log(groceries)

// // Array Slice
// // starts from 0 INCLUSIVE and UP to 2 [0, 1]
// console.log(groceries)
// console.log(groceries.slice(1, 4)) // apple to pear
// console.log(groceries.slice(1, 6)) // apple to strawberry

// ARRAY METHODS [slice, push, indexOf, lenght]
//console.log(groceries.indexOf(`pear`)) 
console.log(groceries.length)
console.table(groceries) // вади таблица