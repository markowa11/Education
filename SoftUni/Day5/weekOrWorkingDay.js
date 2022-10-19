function weekOrWork(input) {
    let day = input[0]

    if (day === `Monday` || day === `Tuesday` || day === `Wednesday` || day === `Thursday` || day === `Friday`) {
        console.log(`Working day`)
    } else if (day === `Sunday` || day === `Saturday`) {
        console.log(`Weekend`)
    } else {
        console.log(`Error`)
    }
}

weekOrWork([`Sunday`])