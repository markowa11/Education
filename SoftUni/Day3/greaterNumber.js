function greaterNumber(input) {
    let number1 = Number(input[0])
    let number2 = Number(input[1])

    if (number1 > number2) {
        console.log(Number(input[0]))
    } else {
        console.log(Number(input[1]))
    }
}

greaterNumber(["5", "3"])
