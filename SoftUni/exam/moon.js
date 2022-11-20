function moon(input){
    let toMoon = 384400
    let speed = Number(input[0])
    let fule = Number(input[1])
    let timeOnMoon = 3
    let fuleNeededForKm = 100
    
    let totoalDistance = toMoon * 2
    let time = Math.ceil(totoalDistance / speed)
    let totalTime = time + timeOnMoon
    let totalFule = (fule * totoalDistance) / fuleNeededForKm

    console.log(totalTime)
    console.log(totalFule)
}

moon(["10000",
"5"])
