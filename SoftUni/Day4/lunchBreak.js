function lunchBreak(input) {
    let name = input[0]
    let time = Number(input[1])
    let pause = Number(input[2])

    let timeForLunch = pause * (1 / 8)
    let timeForRelax = pause * (1 / 4)


    let leftTimeForSeries = pause - timeForLunch - timeForRelax
    // console.log(leftTimeForSeries)

    if (leftTimeForSeries >= time) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(leftTimeForSeries - time)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(time - leftTimeForSeries)} more minutes.`)
    }
}



lunchBreak(["Game of Thrones", "60", "96"])
// lunchBreak(["Teen Wolf", "48", "60"])

/*
Ако времето е достатъчно да изгледате епизода:
"You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
· Ако времето не Ви е достатъчно:
"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
*/