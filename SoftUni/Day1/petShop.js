function petShop(input){
    let dogFoodPrice = 2.50
    let catFoodPrice = 4

    let packageDogFood = input[0]
    let packageCatFood = input[1]

    let totalDodFood = dogFoodPrice * packageDogFood
    let totalCatFood = catFoodPrice * packageCatFood

    let totalAmount = totalCatFood + totalDodFood

    console.log(`${totalAmount} lv.`)
}

petShop(["5", "4"])