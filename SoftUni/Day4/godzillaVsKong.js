function godzillaVsKong(input) {
    let budget = Number(input[0])
    let extra = Number(input[1])
    let priceForOneExtraClothes = Number(input[2])

    let decor = budget * 0.1
    let amountClothes = extra * priceForOneExtraClothes

    let discount = 0.1
    if (extra > 150) {
        amountClothes -= amountClothes * discount
    } else {
        amountClothes = amountClothes
    }

    let totalAmountForMovie = amountClothes + decor
    // console.log(totalAmountForMovie)
    let remainingMoney = budget - totalAmountForMovie
    // console.log(remainingMoney)

    if (totalAmountForMovie <= budget) {
        console.log(
            `Action!\nWingard starts filming with ${remainingMoney.toFixed(2)} leva left.`)  // \n ---> на друг ред
    } else {
        console.log(
            `Not enough money!\nWingard needs ${(totalAmountForMovie - budget).toFixed(2)} leva more.`)
    }
}

godzillaVsKong(["20000", "120", "55.5"])

/*
На конзолата трябва да се отпечатат два реда:
· Ако парите за декора и дрехите са повече от бюджета:
o "Not enough money!"
o "Wingard needs {парите недостигащи за филма} leva more."
· Ако парите за декора и дрехите са по малко или равни на бюджета:
o "Action!"
o "Wingard starts filming with {останалите пари} leva left."
Резултатът трябва да е форматиран до втория знак след десетичната запетая.
*/