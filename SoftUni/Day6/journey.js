// function journey(input) {
//     const budget = Number(input[0])
//     const season = input[1]
//     let destination = ``
//     let place = ``

//     if (budget <= 100) {
//         destination = `Bulgaria`
//         if (season == `summer`) {
//             place = `Camp`
//             budget *= 0.3
//         } else if (season == `winter`) {
//             place = `Hotel`
//             budget *= 0.7
//         }
//     } else if (budget <= 1000) {
//         destination = `Balkans`
//         if (season == `summer`) {
//             place = `Camp`
//             budget *= 0.4
//         } else if (season == `winter`) {
//             place = `Hotel`
//             budget *= 0.8
//         }
//     } else if (budget > 1000) {
//         destination = `Europe`
//         place = `Hotel`
//         budget *= 0.9
//     }

//     console.log(`Somewhere in ${destination}`)
//     console.log(`${place}} - ${budget.toFixed(2)}`)
// }

// journey(["50", "summer"])

/*
На конзолата трябва да се отпечатат два реда.
· Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
· Втори ред – "{Вид почивка} – {Похарчена сума}"
o Почивката може да е между "Camp" и "Hotel"
o Сумата трябва да е закръглена с точност до вторият знак след запетаята.
*/

function journey(input) {
    let budget = Number(input[0])
    const season = input[1]
    let destination = ''
    let place = ''

    if (budget <= 100) {
        destination = 'Bulgaria'
        if (season == 'summer') {
            budget *= 0.3
            place = 'Camp'
        } else if (season == 'winter') {
            budget *= 0.7;
            place = 'Hotel'
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        if (season == 'summer') {
            budget *= 0.4
            place = 'Camp'
        } else if (season == 'winter') {
            budget *= 0.8
            place = 'Hotel'
        }
    } else if (budget > 1000) {
        destination = 'Europe'
        budget *= 0.9
        place = 'Hotel'
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${place} - ${budget.toFixed(2)}`)
}

// journey(['50', 'summer']);
// journey(['75', 'winter']);
// journey(['312', 'summer']);
// journey(['678.53', 'winter']);
journey(['1500', 'summer']);