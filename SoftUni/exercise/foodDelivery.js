// function foodDelivery(input){
//     let chickenMEnu = 10.35
//     let fishMenu = 12.40
//     let vegMenu = 8.15
//     let delivery = 2.5

//     let chickenPrice = Number(input[0]) * chickenMEnu
//     let fishPrice = Number(input[1]) * fishMenu
//     let vegPrice = Number(input[2]) * vegMenu

//     let totalMenuPrice = chickenPrice + fishPrice + vegPrice
//     let dessert = totalMenuPrice * 0.20

//     let totalDeliveryPrice= totalMenuPrice + dessert + delivery

//     console.log(totalDeliveryPrice);
// }

// foodDelivery(["2","4","3"])

// /*
// Пилешко меню – 10.35 лв.
// Меню с риба – 12.40 лв.
// Вегетарианско меню – 8.15 лв.

// ВХОД
// Брой пилешки менюта – цяло число в интервала [0 … 99]
// Брой менюта с риба – цяло число в интервала [0 … 99]
// Брой вегетариански менюта – цяло число в интервала [0 … 99]

// Изход
// Да се отпечата на конзолата един ред: "{цена на поръчката}" */


// function fruitShop(input) {
//     let type = input[0];
//     let day = input[1];
//     let quanity = Number(input[2]);
//     let finalPrice = 0;
//     if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
//         switch (type) {
//             case "banana": console.log((finalPrice = quanity * 2.50).toFixed(2)); break;
//             case "apple": console.log((finalPrice = quanity * 1.20).toFixed(2)); break;
//             case "orange": console.log((finalPrice = quanity * 0.85).toFixed(2)); break;
//             case "grapefruit": console.log((finalPrice = quanity * 1.45).toFixed(2)); break;
//             case "kiwi": console.log((finalPrice = quanity * 2.70).toFixed(2)); break;
//             case "pineapple": console.log((finalPrice = quanity * 5.50).toFixed(2)); break;
//             case "grapes": console.log((finalPrice = quanity * 3.85).toFixed(2)); break;
//         }
//     }

//     else if (day === "Sunday" || day === "Saturday") {
//         switch (type) {
//             case "banana": console.log((finalPrice = quanity * 2.70).toFixed(2)); break;
//             case "apple": console.log((finalPrice = quanity * 1.25).toFixed(2)); break;
//             case "orange": console.log((finalPrice = quanity * 0.90).toFixed(2)); break;
//             case "grapefruit": console.log((finalPrice = quanity * 1.60).toFixed(2)); break;
//             case "kiwi": console.log((finalPrice = quanity * 3).toFixed(2)); break;
//             case "pineapple": console.log((finalPrice = quanity * 5.60).toFixed(2)); break;
//             case "grapes": console.log((finalPrice = quanity * 4.20).toFixed(2)); break;

//         }

//     }


// }
// fruitShop(["tomato",
//     "Friday",
//     "2"])

// function record(input) {
//     let recordSeconds = Number(input[0])
//     let distanceMeters = Number(input[1])
//     let timePer1m = Number(input[2])

//     let ivanTime = distanceMeters * timePer1m
//     let drawBack = (Math.floor((distanceMeters / 15)) * 12.5)

//     let totalTime = (ivanTime + drawBack).toFixed(2)
//     if (totalTime > recordSeconds) {
//         console.log(`No, he failed! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`)
//     } else {
//         console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`)
//     }

// }

// record(["55555.67", "3017", "5.03"])

// function summerOutfit(input) {
//     let degrees = Number(input[0]);
//     let timeOfDay = input[1];

//     let outfit = "";
//     let shoes = "";

//     if (timeOfDay === "Morning") {
//         if (degrees >= 10 && degrees <= 18) {
//             outfit == "Sweatshirt";
//             shoes == "Sneakers"
//         } else if (degrees > 18 && degrees <= 24) {
//             outfit == "Sweatshirt";
//             shoes == "Moccasins";
//         } else if (degrees >= 25) {
//             outfit == "T-shirt";
//             shoes == "Sandals";
//         }
//     } else if (timeOfDay === "Afternoon") {
//         if (degrees >= 10 && degrees <= 18) {
//             outfit == "Shirt";
//             shoes == "Moccasins";
//         } else if (degrees > 18 && degrees <= 24) {
//             outfit == "T-shirt";
//             shoes == "Sandals";
//         } else if (degrees > 25) {
//             outfit == "Swim suit";
//             shoes == "Barefoot";
//         }
//     } else if (timeOfDay === "Evening") {
//         if (degrees >= 10 && degrees <= 18) {
//             outfit == "Shirt";
//             shoes == "Mocasins";
//         } else if (degrees > 18 && degrees <= 24) {
//             outfit == "Shirt";
//             shoes == "Moccasins";
//         } else if (degrees > 25) {
//             outfit == "Shirt";
//             shoes == "Moccasins";
//         }
//     }

// }
// summerOutfit(["16", "Morning"])