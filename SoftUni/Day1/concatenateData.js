 function concatenateData(input){
    let name = input[0] 
    let secondName = input[1]
    let age = Number(input[2])
    let city = input[3]

    console.log(`You are ${name} ${secondName}, a ${age}-years old person from ${city}.`)
} 

concatenateData(["Mariela", "Markowa", "23", "Gorna Oryahovica"]) 


//"You are <firstName> <lastName>, a <age>-years old person from <town>."

