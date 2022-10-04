function foodDelivery(input){
    let chickenPrice = 10.35
    let fishPrice = 12.40
    let vegPrice = 8.15
    let delivery = 2.50

    let chickenMenu = Number(input[0]) * 10.35
    let fishMenu = Number(input[1]) * 12.40
    let vegMenu = Number(input[2]) * 8.15

    let totalMenuPrice = chickenMenu + fishMenu + vegMenu
    let dessert = totalMenuPrice * 0.20

    let totalDeliveryPrice = totalMenuPrice + dessert + delivery

    console.log(totalDeliveryPrice)
 
}

foodDelivery(["2 ","4 ","3 "])

/* • Пилешко меню – 10.35 лв.
• Меню с риба – 12.40 лв.
• Вегетарианско меню – 8.15 л

· Брой пилешки менюта – цяло число в интервала [0 … 99]
· Брой менюта с риба – цяло число в интервала [0 … 99]
· Брой вегетариански менюта – цяло число в интервала [0 … 99] */