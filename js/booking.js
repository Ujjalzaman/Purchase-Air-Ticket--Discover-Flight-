document.getElementById("economy-SeatIncrease").addEventListener("click", function () {
    totalFlightSeat(true, "economy");
})
document.getElementById("economy-SeatDecrease").addEventListener("click", function () {
    totalFlightSeat(false, "economy");
})
//first class seat
document.getElementById("firstClass-SeatIncrease").addEventListener("click", function () {
    totalFlightSeat(true, "firstClass");
})

document.getElementById("firstClass-SeatDecrease").addEventListener("click", function () {
    totalFlightSeat(false, "firstClass");
})

function totalFlightSeat(seatIncrease, flightClass) {
    const economySeat = document.getElementById(flightClass + "-SeatQuantity");
    const economySeatNum = parseInt(economySeat.value);
    let totalEconomySeat = economySeatNum;
    if (seatIncrease == true) {
        totalEconomySeat = totalEconomySeat + 1;
    }
    else {
        if (economySeatNum > 0) {
            totalEconomySeat =totalEconomySeat - 1;
        }
    }
    document.getElementById(flightClass + "-SeatQuantity").value = totalEconomySeat;
    let firstClassAmount = 0;
    if(flightClass == "firstClass"){
        firstClassAmount = totalEconomySeat * 150;
    }
    else{
        firstClassAmount = totalEconomySeat * 100;
    }
    // let firstClassAmount = economySeatNum * 150;
    document.getElementById(flightClass + "-seatAmount").innerText = firstClassAmount;
    totalPrice();
}

function totalPrice(){
    let totalEconomyAmount = document.getElementById("economy-SeatQuantity").value;
    let totalFirstClassAmount = document.getElementById("firstClass-SeatQuantity").value;
    let totalAmount = totalFirstClassAmount *150 + totalEconomyAmount *100;
    document.getElementById("totalAmount").innerText = totalAmount;
    //tax 
    let tax = totalAmount *0.1;
    document.getElementById("tax").innerText = tax;
    let grandTotal = totalAmount + tax;
    document.getElementById("grandTotal").innerText = grandTotal;
}
