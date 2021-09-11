let greeting = function() {
  let user = prompt("Welcome! What's your name?", "Enter name here");
  if (user != null) {
    prompt ("Hi " + user + "! Want to play a guessing-game?");
  }
}
greeting();

const random = Math.floor(Math.random() * 25) + 1;
let number = parseInt (prompt('Guess a number from 1 to 25: '));

const guessNumber = function() {
  while(number !== random) {
  number = parseInt(prompt('Not correct. Try again!: '));
    }
    if(number == random) {
        alert("Congratulations, you've guessed the correct number!");
    }
  }

guessNumber();
