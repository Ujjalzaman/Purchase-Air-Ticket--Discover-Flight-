//flight seat price and totalPrice
function getFlightSeatNumTotalPrice(seatIncrease, flightClass) {
    const flightSeat = document.getElementById(flightClass + "-SeatQuantity");
    const flightSeatNum = parseInt(flightSeat.value);
    let totalFlightSeat = flightSeatNum;
    if (seatIncrease == true) {
        totalFlightSeat = flightSeatNum + 1;
    }
    else {
        if (flightSeatNum > 0) {
            totalFlightSeat =flightSeatNum - 1;
        }
    }
    document.getElementById(flightClass + "-SeatQuantity").value = totalFlightSeat;
    let ticketPrice = 0;
    if(flightClass == "firstClass"){
        ticketPrice = totalFlightSeat * 150;
    }
    else{
        ticketPrice = totalFlightSeat * 100;
    }
    document.getElementById(flightClass + "-seatAmount").innerText = ticketPrice;
    calculatePriceAddcheckOutMemo(false);
}
//calculate total price and add extra part here
function calculatePriceAddcheckOutMemo(checkoutConfirm){
    let totalEconomyAmount = document.getElementById("economy-SeatQuantity").value;
    let totalFirstClassAmount = document.getElementById("firstClass-SeatQuantity").value;
    let totalFirstClassPrice = totalFirstClassAmount*150
    let totalEconomyPrice = totalEconomyAmount *100;
    let totalAmount = totalFirstClassAmount *150 + totalEconomyAmount *100;
    let tax = totalAmount *0.1;
    let grandTotal = totalAmount + tax;
    if(checkoutConfirm == true){                //use checkout and memo form in on one line
        document.getElementById("totalAmountPaid").innerText = totalAmount;
        document.getElementById("taxPaid").innerText = tax;
        document.getElementById("grandTotalPaid").innerText = grandTotal;
        document.getElementById("firstClassReserveSeat").innerText = totalFirstClassAmount;
        document.getElementById("economoyReserveSeat").innerText = totalEconomyAmount;
        document.getElementById("firstClassReserveSeatPrice").innerText = totalFirstClassPrice;
        document.getElementById("economyReserveSeatPrice").innerText = totalEconomyPrice;
    }
    else{
        document.getElementById("totalAmount").innerText = totalAmount;
        document.getElementById("tax").innerText = tax;
        document.getElementById("grandTotal").innerText = grandTotal;
    }
}

//handle --> hidden booking page and display checkout confrim page
document.getElementById("bookNowBtn").addEventListener("click", function(){
    document.getElementById("confirmation").style.display ="block";
    document.getElementById("orderConfirm").style.display = "none";
    calculatePriceAddcheckOutMemo(true);
})