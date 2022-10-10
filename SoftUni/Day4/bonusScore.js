function bonusScore(input) {
    let bonus = 0
    let startingPoints = Number(input[0])

    if (startingPoints <= 100) {
        bonus += 5
    } else if (startingPoints > 1000) {
        bonus += startingPoints * 0.1
    } else {
        bonus += startingPoints * 0.2
    }

    if (startingPoints % 2 == 0) {
        bonus += 1
    } else if (startingPoints % 10 == 5) {
        bonus += 2
    }

    console.log(bonus)
    console.log(startingPoints + bonus)
}


bonusScore(["2703"])

/*
Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки по правилата, описани по-долу. Да се напише функция, която пресмята бонус точките, които получава числото и общия брой точки (числото + бонуса).

· Ако числото е до 100 включително, бонус точките са 5.
· Ако числото е по-голямо от 100, бонус точките са 20% от числото.
· Ако числото е по-голямо от 1000, бонус точките са 10% от числото.
· Допълнителни бонус точки (начисляват се отделно от предходните):
o За четно число à + 1 т.
o За число, което завършва на 5 à + 2
*/

