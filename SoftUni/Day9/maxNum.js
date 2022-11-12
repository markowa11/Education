function maxNum(input) {
    let acc = 0
    let index = 0
    let command = input[index]
    index++

    while (command !== "NoMoreMoney") {
        let curNum = Number(command)

        if (curNum < 0) {
            console.log("Invalid operation!")
            break
        }

        acc += curNum
        console.log(`Increase: ${curNum.toFixed(2)}`)
        command = input[index]
        index++

    }

    console.log(`Total: ${acc.toFixed(2)}`)
}

maxNum(["5.51",

    "69.42",

    "100",

    "NoMoreMoney"])


    // Increase: 5.51 Increase: 69.42 Increase: 100.00 Total: 174.93