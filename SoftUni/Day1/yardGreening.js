function yardGreening(input){
    let meterPrice = 7.61
    let discount = 0.18

    let yardGreeningPrice = Number(input[0]) * meterPrice
    let afterDiscount = discount * yardGreeningPrice
    let finalAmount = yardGreeningPrice - afterDiscount

    console.log(`The final price is: ${finalAmount} lv.`)
    console.log(`The discount is: ${afterDiscount} lv.`)
}

yardGreening(["550"])

/* 
"The final price is: {крайна цена на услугата} lv."
· "The discount is: {отстъпка} lv." */