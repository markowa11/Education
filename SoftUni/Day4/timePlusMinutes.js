function timeMinutes(input) {
    let hour = Number(input[0])
    let minutes = Number(input[1])

    let minutesPlus = minutes + 15


    if (minutesPlus >= 60) {
        hour = hour + 1
        minutesPlus = minutesPlus - 60
    }

    if (hour > 23) {
        hour = 0;
    }

    if (minutesPlus < 10) {
        console.log(`${hour}:0${minutesPlus}`)
    } else {
        console.log(`${hour}:${minutesPlus}`)
    }
}


timeMinutes(["0", "01"]) // --> 0:16
// timeMinutes(["11", "08"]) // --> 11:23
// timeMinutes(["1", "46"]) //--> 2:01

/*
Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. 
Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. 
Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо
*/