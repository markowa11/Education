function giftsFromSanta(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let num = Number(input[0])
    let end = ` `

    for (let i = m; i >= n; i--) {

        if (i % 2 === 0 && i % 3 === 0) {
            let adress = Number(input[i])
            end = end + ` ` + i 
            if (i === s) {
                break
                
            }
            console.log (end)
        }
        // console.log (i)
    }
}


giftsFromSanta(["1",
"36",
"12"])



