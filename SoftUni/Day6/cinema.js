function cinema(input) {
    let projection = input[0]
    let row = Number(input[1])
    let colums = Number(input[2])

    let priceForPremiere = 12
    let priceForNormal = 7.5
    let priceForDiscount = 5

    let income

    if (projection == `Premiere`) {
        income = row * colums * priceForPremiere
    } else if (projection == `Normal`) {
        income = row * colums * priceForNormal
    } else if (projection == `Discount`) {
        income = row * colums * priceForDiscount
    }
    console.log(income.toFixed(2))
}
cinema(["Premiere", "10", "12"])