function numbers100(input) {
    if (input[0] < 100) {
        console.log(`Less than 100`)
    } else if ((100 <= input[0]) && (input[0] <= 200)) {
        console.log(`Between 100 and 200`)
    } else if (input[0] > 200) {
        console.log(`Greater than 200`)
    }
}

numbers100(["210"])