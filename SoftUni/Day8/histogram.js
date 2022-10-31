function histogram(input) {
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0
    let nums = Number(input[0])

    for (i = 1; i <= 1000; i++) {
        let currentN = Number(input[i])
        if (currentN < 200) {
            p1++
        } else if (currentN < 400) {
            p2++
        } else if (currentN < 600) {
            p3++
        } else if (currentN < 800) {
            p4++
        } else if (currentN >= 800) {
            p5++
        }
    }

    console.log((p1 / nums * 100).toFixed(2) + `%`)
    console.log((p2 / nums * 100).toFixed(2) + `%`)
    console.log((p3 / nums * 100).toFixed(2) + `%`)
    console.log((p4 / nums * 100).toFixed(2) + `%`)
    console.log((p5 / nums * 100).toFixed(2) + `%`)
}

histogram(["3", "1", "2", "999"])