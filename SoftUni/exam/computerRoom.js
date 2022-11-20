function computerRoom(input) {
    let month = input[0];
    let hoursSpend = Number(input[1]);
    let peopleCount = Number(input[2]);
    let dayTime = input[3];
    let pricePerHour = 0;
 
    if ((month === 'march' || month === 'april' || month === 'may') && dayTime == 'day') {
        pricePerHour = 10.5;
        if (peopleCount >= 4) {
            pricePerHour = pricePerHour * 0.9;
        }
        if (hoursSpend >= 5) {
            pricePerHour = pricePerHour * 0.5;
        }
    } else if ((month === 'march' || month === 'april' || month === 'may') && dayTime == 'night') {
        pricePerHour = 8.4;
        if (peopleCount >= 4) {
            pricePerHour = pricePerHour * 0.9;
        }
        if (hoursSpend >= 5) {
            pricePerHour = pricePerHour * 0.5;
        }
    } else if ((month === 'june' || month === 'july' || month === 'august') && dayTime == 'day') {
        pricePerHour = 12.6;
        if (peopleCount >= 4) {
            pricePerHour = pricePerHour * 0.9;
        }
        if (hoursSpend >= 5) {
            pricePerHour = pricePerHour * 0.5;
        }
    } else if ((month === 'june' || month === 'july' || month === 'august') && dayTime == 'night') {
        pricePerHour = 10.2;
        if (peopleCount >= 4) {
            pricePerHour = pricePerHour * 0.9;
        }
        if (hoursSpend >= 5) {
            pricePerHour = pricePerHour * 0.5;
        }
    } 
    
    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${(pricePerHour * hoursSpend * peopleCount).toFixed(2)}`);
}