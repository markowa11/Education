function fishTank(input){
    let tankVolume = Number(input[0]) * Number(input[1]) * Number(input[2])
    let volumInLiter = tankVolume / 1000
    let usedSpace = Number(input[3]) / 100

    let neededLitersForTank = volumInLiter * (1 - usedSpace)

    console.log(neededLitersForTank)
 
}

fishTank(["85 ","75 ","47 ","17 "])

/*
Изход
Да се отпечата на конзолата едно число:
· литрите вода, които ще събира аквариума. */