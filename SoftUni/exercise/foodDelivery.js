function foodDelivery(input){
    let chickenMEnu = 10.35
    let fishMenu = 12.40
    let vegMenu = 8.15
    let delivery = 2.5

    let chickenPrice = Number(input[0]) * chickenMEnu
    let fishPrice = Number(input[1]) * fishMenu
    let vegPrice = Number(input[2]) * vegMenu

    let totalMenuPrice = chickenPrice + fishPrice + vegPrice 
    let dessert = totalMenuPrice * 0.20

    let totalDeliveryPrice= totalMenuPrice + dessert + delivery
    
    console.log(totalDeliveryPrice);
}

foodDelivery(["2","4","3"])

/*
Пилешко меню – 10.35 лв.
Меню с риба – 12.40 лв.
Вегетарианско меню – 8.15 лв.

ВХОД
Брой пилешки менюта – цяло число в интервала [0 … 99]
Брой менюта с риба – цяло число в интервала [0 … 99]
Брой вегетариански менюта – цяло число в интервала [0 … 99]

Изход
Да се отпечата на конзолата един ред: "{цена на поръчката}" */