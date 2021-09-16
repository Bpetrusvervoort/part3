let toggleStatus = false; 

let toggleOpen = function() {
    let openUL = document.querySelector(".nav-sidebar ul");

    if (toggleStatus === false) {
        openUL.style.visibility = "visible";}

        if (openUL.style.display === "none"){
            openUL.style.display = "block";}
            
            else { openUL.style.display = "none";
    }
}

document.querySelector(".grey").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgrey";
    toggleOpen();
});

document.querySelector(".red").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    toggleOpen();
});

document.querySelector(".orange").addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
    toggleOpen();
});

document.querySelector(".purple").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
    toggleOpen();
});

document.querySelector(".green").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    toggleOpen();
});
