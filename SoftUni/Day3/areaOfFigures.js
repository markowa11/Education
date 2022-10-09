function areaOfFigures(input) {
    let type = input[0]
    let a = input[1]
    let b = input[2]

    if (type == "square") {
        let square = (a * a)
        console.log(square.toFixed(3))
    } else if (type == "rectangle") {
        let rectangle = (a * b)
        console.log(rectangle.toFixed(3))

    } else if (type === "circle") {
        let circle = Math.PI * Math.pow(a, 2)
        console.log(circle.toFixed(3))
    } else {
        let triangle = (a * b / 2)
        console.log(triangle.toFixed(3))
    }
}

areaOfFigures(["circle", "6"])