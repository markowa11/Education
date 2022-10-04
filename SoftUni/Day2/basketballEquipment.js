function basketballEquipment(input){
    let annualFee = Number(input[0])

    let shoes = annualFee * 0.6
    let equipment = shoes * 0.8
    let ball = equipment * 0.25
    let accessoirs = ball * 0.20

    let totalCosts = annualFee + shoes + equipment + ball + accessoirs

    console.log(totalCosts)

}

basketballEquipment(["365"])

/* 
• Баскетболни кецове – цената им е 40% по-малка от таксата за една година
• Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
• Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
• Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка */