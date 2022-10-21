function fruitOrVegetable(input) {
    let food = input[0]

    if (food === `banana` || food === `apple` || food === `kiwi` || food === `cherry` || food === `lemon` || food === `grapes`) {
        console.log(`fruit`)
    } else if (food === `tomato` || food === `carrot` || food === `cucumber` || food === `pepper`) {
        console.log(`vegetable`)
    } else {
        console.log(`unknown`)
    }

}

fruitOrVegetable(["banana"])
/*
Да се напише функция, която получава аргумент име на продукт и проверява дали е плод или зеленчук.

· Плодовете "fruit" имат следните възможни стойности: banana, apple, kiwi, cherry, lemon и grapes

· Зеленчуците "vegetable" имат следните възможни стойности: tomato, cucumber, pepper и carrot

· Всички останали са "unknown"

Да се изведе "fruit", "vegetable" или "unknown" според въведения продук
 */