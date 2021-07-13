const age = 22; 
const isFemale = true; 
const driverStatus = "bob";
const firstName = "bram";
const totalAmount = 27;

if (age > 17 ) {
    
    document.write ("You're over 18. You're welcome to come in!");

} else {

    document.write("You're under 18. Please wait outside!");
}

if (isFemale) {

    document.write ("You're welcome to join ladies night!");

} else {

    document.write ("Only ladies are welcome tonight, sorry guys!");
}

if ("bob") {

    document.write ("Good on you, you're safe driving home!");

} else {

    document.write ("Please hand in your keys and call a cab!");

}

if (age >= 18 && age <= 25) {

    console.log ("You get 50% off!");

} else {

    document.write ("I'm sorry, no discount for you!");
}

if (firstName === "bram" || firstName === "sarah") {

    document.write ("You get a free beer!")

} else {

    document.write ("Sorry, no free beer for you")
}

if (totalAmount >= 100) {
    
    console.log("gratis flesje champagne.");

} else if (totalAmount > 50) {
  
    console.log("gratis portie nachos");

} else if (totalAmount > 25) {

    console.log("gratis (vega)bitterballen");

} else {

    console.log("Helaas geen korting, maar leuk dat je er bent");

}