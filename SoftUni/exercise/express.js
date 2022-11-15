function exprfess(input) {
    let weightKg = Number(input[0])
    let deliveryType = input[1]
    let distance = Number(input[2])
    let basePriceForKm = 0.3

    if (1 <= weightKg <= 10) {
        basePriceForKm = 0.05
    } else if (10 <= weightKg <= 40) {
        basePriceForKm = 0.10
    } else if (40 <= weightKg <= 90) {
        basePriceForKm = 0.15
    } else if (90 <= weightKg <= 150) {
        basePriceForKm = 0.20
    }

    let expressDelivery = 0.0

    if (deliveryType == 'express') {
        if (weightKg < 1.0) {
            expressDelivery = 0.80
        } else if (1 <= weightKg <= 10) {
            expressDelivery = 0.40
        } else if (10 <= weightKg <= 40) {
            expressDelivery = 0.05
        } else if (40 <= weightKg <= 90) {
            expressDelivery = 0.
        } else if (90 <= weightKg <= 150) {
            expressDelivery = 0.01
            expressDelivery *= basePriceForKm
        }
    }

    let totalPrice = (basePriceForKm + weightKg * expressDelivery) * distance
    console.log(`The delivery of your shipment with weight of ${weightKg.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`)
}

exprfess(["87",
    "express",
    "130"])


/*
total_price = (base_price_per_km + weight_in_kg * express_delivery_price) * distance_in_km
 
print(f"The delivery of your shipment with weight of {weight_in_kg:.3f} kg. would cost {total_price:.2f} lv.")
*/