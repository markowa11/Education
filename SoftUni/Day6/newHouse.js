function newHouse(input) {
    const flower = input[0];
    const quantity = Number(input[1]);
    const budget = Number(input[2]);
    let discount = 0;
    let finalPrice = 0;
    let flowerPrice = 0;

    if (flower == 'Roses') {
        flowerPrice = 5;
        if (quantity > 80) {
            discount = 0.9;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    } else if (flower == 'Dahlias') {
        flowerPrice = 3.8;
        if (quantity > 90) {
            discount = 0.85;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    } else if (flower == 'Tulips') {
        flowerPrice = 2.8;
        if (quantity > 80) {
            discount = 0.85;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    } else if (flower == 'Narcissus') {
        flowerPrice = 3;
        if (quantity < 120) {
            discount = 1.15;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    } else if (flower == 'Gladiolus') {
        flowerPrice = 2.5;
        if (quantity < 80) {
            discount = 1.2;
            finalPrice = flowerPrice * quantity * discount;
        } else {
            finalPrice = flowerPrice * quantity;
        }
    }

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`);
    }
}

newHouse(['Roses', '55', '250']);

/*

цвете Роза -5, Далия- 3.80, Лале- 2.80, Нарцис-3, Гладиола-2.50


· Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена

· Ако Нели купи повече от 90 Далии - 15% отстъпка от крайната цена

· Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена

· Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%

· Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%



· Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."

· Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."

Сумата да бъде форматирана до втория знак след десетичната запетая.
*/