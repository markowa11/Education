function maindenParty(input) {

    let loveletter = 0.60
    let rose = 7.20
    let keyHolder = 3.60
    let picture = 18.20
    let surprise = 22
    let priceParty = Number(input[0])
    let aLoveLetters = (input[1])
    let aRose = Number(input[2])
    let aKeyHolders = Number(input[3])
    let aPicture = Number(input[4])
    let aSurprise = Number(input[5])

    let totalPrice = (loveletter * aLoveLetters) + (rose * aRose) + (keyHolder * aKeyHolders) + (picture * aPicture) + (surprise * aSurprise)
    let ammountStuff = aLoveLetters + aRose + aKeyHolders + aPicture + aSurprise

    let afterDiscount = 0
    if (ammountStuff > 25) {
        afterDiscount = totalPrice * 0.35
    }

    let total = totalPrice - afterDiscount
    let spendings = total * 0.10
    let leftMoney = total - spendings

    let money = leftMoney - priceParty
    let moneyForParty = 0

    if (money < priceParty) {
        moneyForParty = priceParty - leftMoney
        console.log(`Not enough money! ${moneyForParty.toFixed(2)} lv needed.`)
    } else if (money > priceParty) {
        moneyForParty = money
        console.log(`Yes! ${moneyForParty.toFixed(2)} lv left.`)
    }
}

// maindenParty([40.8, 20, 25, 30, 50, 10])
maindenParty([320, 8, 2, 5,
    5,
    1])

