function catFood(input){
    let index = 0
    let numberOfcats = Number(input[index])
    index++
    let small = 0
    let big = 0
    let large = 0
    let totalFood = 0

    for(i = 1; i <= numberOfcats; i++){
        let food = Number(input[i])
        totalFood += food

        if(100 <= food && food < 200){
            small += 1
        } else if (200 <= food && food < 300){
            big += 1
        } else if(300 <= food && food <= 400){
            large += 1
        }

    }
    
    let price = (totalFood / 1000) * 12.45

    console.log(`Group 1: ${small} cats.`)
    console.log(`Group 2: ${big} cats.`)
    console.log(`Group 3: ${large} cats.`)
    console.log(`Price for food per day: ${price.toFixed(2)} lv.`)
 
}
catFood(["6",
"102",
"236",
"123",
"399",
"342", 
"222"])
