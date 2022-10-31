function cleverLily(input) {
    let age = Number(input[0])
    let priceWasher = Number(input[1])
    let priceToy = Number(input[2])

    let totalMoney = 0
    let toysAmmount = 0
    let giftMoney = 10

    for (i = 1; i <= age; i++) {
        if (i % 2 == 1) {
            toysAmmount++
        } else {
            totalMoney += giftMoney
            totalMoney--
            giftMoney += 10
        }
    }

    totalMoney += priceToy * toysAmmount

    if (totalMoney >= priceWasher) {
        console.log(`Yes! ${(totalMoney - priceWasher).toFixed(2)}`)
    } else {
        console.log(`No! ${(priceWasher - totalMoney).toFixed(2)}`)
    }
}

cleverLily(["21",

    "1570.98",

    "3"])