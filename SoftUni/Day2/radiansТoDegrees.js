function radiansToDegrees(input) {
    let radians = Number(input[0])
    let degrees = radians * 180 / Math.PI

    console.log(degrees)
}

radiansToDegrees(["3.1416"])

//градус = радиан * 180 / π. Числото π в Java програми е достъпно чрез Math.PI.