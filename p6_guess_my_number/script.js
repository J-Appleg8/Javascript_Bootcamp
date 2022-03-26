/////////////////////////
//// Event Listeners ///
///////////////////////

"use strict";

// addEventListener method:
// - First argument is the type of event that its listening for
// - Second argument is a function used to handle the event

// Adding 1 because 19.999 would be the last random number thats truncated
// and would end up being 19
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//////////////////////////////////////////////////
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//////////////////////////////////////////////////
// Event listener for the "Check!" button
document.querySelector(".check").addEventListener("click", function () {
  // Generally when something is retrieved from the UI it returns back as a string
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🛑 No number!");

    // Correct guess
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is not the same as the secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🚨 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//////////////////////////////////////////////////
// Implement the game reset functionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
