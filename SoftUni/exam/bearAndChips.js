function bearAndChips(input){
    let oneBeer = 1.20
    let name = input[0]
    let buget = Number(input[1])
    let bottleBeer = Number(input[2])
    let bagOfChips = Number(input[3])

    let totalBeerPrice = oneBeer * bottleBeer
    let priceChips = totalBeerPrice * 0.45
    let totalChipsPrice = Math.ceil(priceChips * bagOfChips)
    let totalAmmount = totalBeerPrice + totalChipsPrice

    if(buget >= totalAmmount){
        console.log(`${name} bought a snack and has ${(buget - totalAmmount).toFixed(2)} leva left.`)
    } else {
        console.log(`${name} needs ${(totalAmmount - buget).toFixed(2)} more leva!`)
    }


}

bearAndChips(["George",
"10",
"2",
"3"])


/*
цената на един пакет чипс е равна на 45% от общата стойност на закупените бири. 
Общата цена на чипса да се закръгли до по-голямо число.
*/