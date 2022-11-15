function everest(input) {

    let index = 0;
    let command = input[index];
    index++;
    let days = 1;
    let peakHeight = 8848
    let meeters = 5364;
    let daily = 0

    while (command !== `END`) {
        daily = Number(input[index]);
        index++;

        if (command === `Yes`) {
            meeters += daily;
            days++;
        } else if (command === `No`) {
            days
            meeters += daily;
        }
        if (meeters >= peakHeight) {
            break;
        } else if (days >= 5) {
            break;
        }
        command = (input[index]);
        index++;
    }

    if (meeters >= peakHeight) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${meeters}`);
    }
}


everest(["Yes",
    "535",
    "Yes",
    "849",
    "Yes",
    "499",
    "Yes",
    "400",
    "Yes",
    "500"])






