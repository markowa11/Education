function passwordGuess(input) {
    const password = "s3cr3t!P@ssw0rd"

    if (password === input[0]) {
        console.log(`Welcome`)
    } else {
        console.log(`Wrong password!`)
    }
}

passwordGuess([`qwerty`])
