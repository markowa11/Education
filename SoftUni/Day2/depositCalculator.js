function depositCalculator(input) {
    let depositAmount = Number(input[0])
    let depositMonts = Number(input[1])
    let interestProcent = Number(input[2]) / 100

    let finalAmount = depositAmount + depositMonts * ((depositAmount * interestProcent) / 12)

    console.log(finalAmount)
}

depositCalculator(["200", "3", "5.7"])

//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)