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
    
    console.log("Free champagne for you!");

} else if (totalAmount > 50) {
  
    console.log("Free nachos for you!");

} else if (totalAmount > 25) {

    console.log("Free bitterballen for you!");

} else {

    console.log("I'm sorry, no free stuff for you!");

}