function shopping(input) {
    let amountV = Number(input[1])
    let amountP = Number(input[2])
    let amountRP = Number(input[3])
    let budget = Number(input[0])
    let priceV = 250 * amountV

    let priceP = priceV * 0.35
    let priceRP = priceV * 0.1
    // console.log(priceP)
    // console.log(priceRP)

    // let totalAmountV = amountV * priceV
    let totalAmountP = amountP * priceP
    let totalAmountRP = amountRP * priceRP

    let totalAmount = totalAmountP + priceV + totalAmountRP

    let discount = 0.15
    if (amountV > amountP) {
        totalAmount -= totalAmount * discount
    }


    if (totalAmount > budget) {
        console.log(`Not enough money! You need ${(totalAmount - budget).toFixed(2)} leva more!`)
    } else {
        console.log(`You have ${(budget - totalAmount).toFixed(2)} leva left!`)
    }

}



// shopping(["900", "2", "1", "3"])
shopping(["920.45", "3", "1", "1"])
/*
Ако бюджета е достатъчен:
"You have {остатъчен бюджет} leva left!"
· Ако сумата надхвърля бюджета:
"Not enough money! You need {нужна сума} leva more!"
*/