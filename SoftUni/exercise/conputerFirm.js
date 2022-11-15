function computerFirm(input) {
    let n = input[0]
    let possibleSales = 0
    let sales = 0
    let rating = 0
    let countOfRating = 0
    index = 0

    for (i = 0; i < n; i++) {
        rating = Number(input[i + 1].slice(-1))
        possibleSales = Number(input[i + 1].slice(0, 2))
        countOfRating += rating

        if (rating === 2) {
            sales += possibleSales * 0
        } else if (rating === 3) {
            sales += possibleSales * 0.5
        } else if (rating === 4) {
            sales += possibleSales * 0.7
        } else if (rating === 5) {
            sales += possibleSales * 0.85
        } else if (rating === 6) {
            sales += possibleSales * 1
        }

        // console.log(sales.toFixed(2))
        // console.log(countOfRating / 2)
    }

    console.log(sales.toFixed(2))
    console.log((countOfRating / n).toFixed(2))
}

computerFirm(["5",
    "122",
    "156",
    "202",
    "214",
    "185"])

