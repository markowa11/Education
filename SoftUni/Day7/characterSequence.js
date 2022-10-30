function characterSequence(input) {
    let text = input[0]

    for (i = 0; i < text.length; i++) {  // text.length отпечатва дължината на текста
        console.log(text[i])             // логваме тtext[i] за да изпълним условието на фор цикъла в дължина на текста
    }
}

characterSequence(["softuni"])