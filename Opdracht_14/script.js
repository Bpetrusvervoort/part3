// DEEL !

const alertButton = document.getElementById("mybutton");

alertButton.addEventListener("click", function() {
    alert("button clicked!")
});

// DEEL 2

// const changeBackground = document.querySelector("body");

// changeBackground.addEventListener("click", function() {
//     const bodyElement = document.body;
//     bodyElement.classList.add("red-background");
// });

// DEEL 3

const toggleBackground = document.querySelector("body");

toggleBackground.addEventListener("click", function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
});