function vowelsSum(input) {
    let text = input[0]
    let sum = 0
    /*
буква     a e i o u
стойност  1 2 3 4 5
    */

    for (i = 0; i < text.length; i++) {
        let ch = text[i]

        if (ch == `a`) {
            sum += 1
        } else if (ch == `e`) {
            sum += 2
        } else if (ch == `i`) {
            sum += 3
        } else if (ch == `o`) {
            sum += 4
        } else if (ch == `u`) {
            sum += 5
        }
    }
    console.log(sum)
}

vowelsSum([`Bamboo`])