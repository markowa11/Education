function suppliesForSchool(input) {
    let pens = 5.80
    let markers = 7.20
    let detergent =  1.20

    let packagePens = Number(input[0]) * pens
    let packageMarkers = Number(input[1]) * markers
    let literDetergent = Number(input[2]) * detergent

    let priceForAllSupplies = packageMarkers + packagePens + literDetergent
    let discount = Number(input[3]) / 100
    let priceWithDiscount = priceForAllSupplies - (priceForAllSupplies * discount) 

    console.log(priceWithDiscount)

}

suppliesForSchool(["2","3","4","25"])

/*
• Пакет химикали - 5.80 лв.
• Пакет маркери - 7.20 лв.
• Препарат - 1.20 лв (за литър)

· Брой пакети химикали 
· Брой пакети маркери 
· Литри препарат за почистване на дъска
· Процент намаление

Изход
Да се отпечата на конзолата колко пари ще са нужни на Ани, за да си плати сметката. */
