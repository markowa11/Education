function opBetweenNumbers(input) {
    const num1 = Number(input[0])
    const num2 = Number(input[1])
    const operator = input[2]
    let result = 0
    let evenOrOdd

    if (operator == '+') {
        result = num1 + num2
        if (result % 2 == 0) {
            evenOrOdd = 'even'
        } else {
            evenOrOdd = 'odd'
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`)

    } else if (operator == '-') {
        result = num1 - num2
        if (result % 2 == 0) {
            evenOrOdd = 'even'
        } else {
            evenOrOdd = 'odd'
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`)

    } else if (operator == '*') {
        result = num1 * num2
        if (result % 2 == 0) {
            evenOrOdd = 'even'
        } else {
            evenOrOdd = 'odd'
        }
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`)

    } else if (operator == '/') {
        if (num2 != 0) {
            result = num1 / num2;
            console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
        } else {
            console.log(`Cannot divide ${num1} by zero`);
        }


    } else if (operator == '%') {
        if (num2 != 0) {
            result = num1 % num2;
            console.log(`${num1} ${operator} ${num2} = ${result}`);
        } else {
            console.log(`Cannot divide ${num1} by zero`);
        }
    }
}


// opBetweenNumbers(["10", "12", "+"])
// opBetweenNumbers(["10", "1", "-"])
// opBetweenNumbers(["7", "3", "*"])
// opBetweenNumbers(["112", "0", "/"])
opBetweenNumbers(["10", "0", "%"])


/*
Да се отпечата на конзолата един ред:
· Ако операцията е събиране, изваждане или умножение:
o "{N1} {оператор} {N2} = {резултат} – {even/odd}"
· Ако операцията е деление:
o "{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая
· Ако операцията е модулно деление:
o "{N1} % {N2} = {остатък}"
· В случай на деление с 0(нула):
o "Cannot divide {N1} by zero"
*/