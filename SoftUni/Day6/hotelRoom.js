function hotelRoom(input) {
    const month = input[0]
    const daysStayed = Number(input[1])
    let apartment
    let studio

    if (month == `May` || month == `October`) {
        apartment = 65
        studio = 50
        if (daysStayed > 7 && daysStayed < 14) {
            studio *= 0.95
        } else if (daysStayed >= 14) {
            studio *= 0.7
            apartment *= 0.9
        }
    } else if (month == `June` || month == `September`) {
        apartment = 68.70
        studio = 75.20
        if (daysStayed > 14) {
            apartment *= 0.9
            studio *= 0.8
        }
    } else if (month == `July` || month == `August`) {
        apartment = 77
        studio = 76
        if (daysStayed > 14) {
            apartment *= 0.9
        }
    }

    console.log(`Apartment: ${(apartment * daysStayed).toFixed(2)} lv.`)
    console.log(`Studio: ${(studio * daysStayed).toFixed(2)} lv.`)
}

hotelRoom(["May", "15"])
// hotelRoom(["June", "14"])

/*
· За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
· За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
· За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
· За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление

На първия ред: “Apartment: {цена за целият престой} lv.”
· На втория ред: “Studio: {цена за целият престой} lv.”
*/