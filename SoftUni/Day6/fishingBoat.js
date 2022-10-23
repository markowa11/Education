function fishingBoat(input) {
    const budget = Number(input[0])
    const season = input[1]
    const fisherman = Number(input[2])
    let priceBoat = 0
    let discount = 0
    let totalPrice = 0

    if (season == `Spring`) {
        priceBoat = 3000
        if (fisherman <= 6) {
            discount = 0.9
            totalPrice = priceBoat * discount
            if (fisherman % 2 == 0 && season != `Autumn`) {
                totalPrice *= 0.95
            }
        } else if (fisherman >= 7 && fisherman <= 11) {
            discount = 0.85
            totalPrice = priceBoat * discount
            if (fisherman % 2 == 0 && season != `Autumn`) {
                totalPrice *= 0.95
            }
        } else if (fisherman >= 12) {
            discount = 0.75
            totalPrice = priceBoat * discount
            if (fisherman % 2 == 0 && season != `Autumn`) {
                totalPrice *= 0.95
            }
        }

    } else if (season == `Summer` || season == `Autumn`) {
        priceBoat = 4200
        if (fisherman <= 6) {
            discount = 0.9
            totalPrice = priceBoat * discount
            if (fisherman % 2 == 0 && season != `Autumn`) {
                totalPrice *= 0.95
            }
        } else if (fisherman >= 7 && fisherman <= 11) {
            discount = 0.85
            totalPrice = priceBoat * discount
            if (fisherman % 2 == 0 && season != `Autumn`) {
                totalPrice *= 0.95
            }
        } else if (fisherman >= 12) {
            discount = 0.75
            totalPrice = priceBoat * discount
            if (fisherman % 2 == 0 && season != `Autumn`) {
                totalPrice *= 0.95
            }
        }
    } else if (season == `Winter`) {
        priceBoat = 2600
        if (fisherman <= 6) {
            discount = 0.9
            totalPrice = priceBoat * discount
            if (fisherman % 2 == 0 && season != `Autumn`) {
                totalPrice *= 0.95
            }
        } else if (fisherman >= 7 && fisherman <= 11) {
            discount = 0.85
            totalPrice = priceBoat * discount
            if (fisherman % 2 == 0 && season != `Autumn`) {
                totalPrice *= 0.95
            }
        } else if (fisherman >= 12) {
            discount = 0.75
            totalPrice = priceBoat * discount
            if (fisherman % 2 == 0 && season != `Autumn`) {
                totalPrice *= 0.95
            }
        }
    }

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);
    }

}

fishingBoat(["3000", "Summer", "11"])

/*
В зависимост от броя си групата ползва отстъпка:
· Ако групата е до 6 човека включително – отстъпка от 10%.
· Ако групата е от 7 до 11 човека включително – отстъпка от 15%.
· Ако групата е от 12 нагоре – отстъпка от 25%.

Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка.

*/