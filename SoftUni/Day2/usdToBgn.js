function usdToBgn(input){
    let usdToBgnExchangeRate = 1.79549
    let usd = Number(input[0])
    let bgn = usd * usdToBgnExchangeRate

    console.log(bgn)
}

usdToBgn(["22"])
//1 USD = 1.79549 BG