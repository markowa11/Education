function toyShop(input) {
    let pricePuzzel = 2.60
    let priceDoll = 3
    let priceTeddyBear = 4.10
    let priceMinion = 8.20
    let priceTruck = 2

    let Puzzel = Number(input[1]) * 2.60
    let doll = Number(input[2]) * 3
    let teddyBear = Number(input[3]) * 4.10
    let minion = Number(input[4]) * 8.20
    let truck = Number(input[5]) * 2

    let totalAmount = Puzzel + doll + teddyBear + minion + truck
    // console.log(totalAmount)
    let numberOfToys = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5])
    // console.log(numberOfToys)

    let discount
    if (numberOfToys >= 50) {
        discount = totalAmount * 0.25
    } else {
        discount = 0
    }

    let excursion = Number(input[0])
    // let discount = totalAmount * 0.25
    let finalAmount = totalAmount - discount
    let rent = finalAmount * 0.1
    let profit = finalAmount - rent

    let remainingMonye = profit - excursion
    // console.log(remainingMonye)
    // console.log(profit)

    if (profit < excursion) {
        console.log(`Not enough money! ${(excursion - profit).toFixed(2)} lv needed.`)
    } else {
        console.log(`Yes! ${remainingMonye.toFixed(2)} lv left.`)
    }

}


// toyShop(["40.8", "20", "25", "30", "50", "10"])
toyShop(["320", "8", "2", "5", "5", "1"])