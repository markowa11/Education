// // cat diet

function catDiet(input) {
    let gramProtein = 4
    let gramCal = 9
    let gramVug = 4
    let pM = input[0] / 100
    let pP = input[1] / 100
    let pV = input[2] / 100
    let totalCal = input[3]
    let pW = input[4]

    let totalM = (totalCal * pM) / gramCal
    let totalP = (totalCal * pP) / gramProtein
    let totalV = (totalCal * pV) / gramVug

    let WeightFood = totalM + totalP + totalV
    let calForOneGram = totalCal / WeightFood

    let calAfterWater = (100 - pW) / 100
    let totalCalories = calForOneGram * calAfterWater

    console.log(totalCalories.toFixed(4))
}


catDiet([60, 25, 15, 2500, 60])

/*

60% от тези 6 калории са вода => остават 100% - 60% = 40 %
 В един грам от този тип хранене има
40% от 6 = 2.4 калории

•	Процент на мазнините - цяло число в интервала [0…100]
•	Процент на протеините - цяло число в интервала [0…100]
•	Процент на въглехидратите - цяло число в интервала [0…100]
•	Общ брой калории - цяло число в интервала [1000…15000]
•	Процент на съдържанието на вода - цяло число в интервала [0…100]


(60 % от  2500) / 9 = 166.6 - общите грамове от мазнини
(25 % от  2500) / 4 = 156.25 - общите грамове от протеини
(15 % от 2500) / 4 = 93.75 - общите грамове от въглехидрати
 Теглото на храната = 166.6 + 156.25 + 93.75 = 416.6 грама
 Калории за един грам храна = 2500 / 416.6 = 6 калории

*/


// Maiden Party

// function maindenParty(input) {

//     let loveletter = 0.60
//     let rose = 7.20
//     let keyHolder = 3.60
//     let picture = 18.20
//     let surprise = 22


//     let priceParty = input[0]
//     let aLoveLetters = input[1]
//     let aRose = input[2]
//     let aKeyHolders = input[3]
//     let aPicture = input[4]
//     let aSurprise = input[5]

//     let totalPrice = (loveletter * aLoveLetters) + (rose * aRose) + (keyHolder * aKeyHolders) + (picture * aPicture) + (surprise * aSurprise)
//     let ammountStuff = aLoveLetters + aRose + aKeyHolders + aPicture + aSurprise

//     if (ammountStuff >= 25) {
//         totalPrice *= 0.35
//     } else {
//         totalPrice
//     }

//     let total = totalPrice - afterDiscount
//     let spendings = total * 0.10
//     let leftMoney = total - spendings

//     let moneyForParty = leftMoney - priceParty

//     if (moneyForParty > priceParty) {
//         console.log(`Yes! ${leftMoney} lv left.`)
//     } else {
//         console.log(`Not enough money! ${priceParty - moneyForParty} lv needed.`)
//     }
// }


// maindenParty([40.8, 20, 25, 30, 50, 10])



// •	Ако парите са достатъчни се отпечатва:
// o	"Yes! {оставащите пари} lv left."
// •	Ако парите НЕ са достатъчни се отпечатва:
// o	"Not enough money! {недостигащите пари} lv needed."
// Резултатът трябва да се форматира до втория знак след десетичната запетая.

// •	Любовно послание - 0.60 лв.
// •	Восъчна роза - 7.20 лв.
// •	Ключодържател - 3.60 лв.
// •	Карикатура - 18.20 лв.
// •	Късмет изненада - 22 лв.

// Сума: 20 * 0.60 + 25 * 7.20 + 30 * 3.60 + 50 * 18.20 + 10 * 22 = 1430 лв.
// Брой на артикулите: 20 + 25 + 30 + 50 + 10 = 135
// Проверяваме дали има отстъпка: 135 > 25 => 35% отстъпка
// Отстъпка: 35% от 1430 = 500.50 лв.
// Крайна цена: 1430 – 500.50 = 929.50 лв.
// Разход за хостинг: 10% от 929.50 лв. = 92.95 лв.
// Печалба: 929.50 – 92.95 = 836.55 лв.
// 836.55 > 40.80 => 836.55 – 40.80 = 795.75 лв. остават
