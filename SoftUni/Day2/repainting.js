function repainting(input){
    let nylon = 1.50
    let paint = 14.50
    let painThinner = 5.00
    let plasticBag = 0.40
    let discount = 30 /100
    let pricePaintAfterPercent = Number(input[1]) * 0.1


    let priceNylon = (Number(input[0]) + 2) * nylon
    let pricePaint = (Number(input[1]) + pricePaintAfterPercent) * paint
    let priceThinner = Number(input[2]) * painThinner
    let hours = Number(input[3])
   

    let totalPriceForSupplies = priceNylon + pricePaint + priceThinner + plasticBag
    let priceForCraftsman = (totalPriceForSupplies * discount) * hours  
    let totalAmount = totalPriceForSupplies + priceForCraftsman

     console.log(totalAmount)
  
}

repainting(["10","11","4","8"])
repainting(["5","10","10","1"])

/* 
· Предпазен найлон - 1.50 лв. за кв. метър
· Боя - 14.50 лв. за литър
· Разредител за боя - 5.00 лв. за литър */

