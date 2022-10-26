function skiTrip(input) {
    const days = Number(input[0])
    const type = input[1]
    const rating = input[2]
    let roomForOne = 18
    let apartment = 25
    let president = 35
    let nights = days - 1

    let totalPrice
    if (type == `room for one person`) {
        totalPrice = roomForOne * nights
    } else if (type == `apartment`) {
        totalPrice = apartment * nights
        if (days < 10) {
            totalPrice *= 0.70
        } else if (days >= 10 && days <= 15) {
            totalPrice *= 0.65
        } else if (days > 15) {
            totalPrice *= 0.50
        }
    } else if (type == `president apartment`)
        totalPrice = president * nights
    if (days < 10) {
        totalPrice *= 0.1
    } else if (days >= 10 && days <= 15) {
        totalPrice *= 0.85
    } else if (days > 15) {
        totalPrice *= 0.8
    }

    if (rating == `positive`) {
        totalPrice *= 1.25
    } else if (rating == `negative`) {
        totalPrice *= 1.1
    }
    console.log(totalPrice.toFixed(2))
}

skiTrip(["14", "apartment", "positive"])