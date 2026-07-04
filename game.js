var secretNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

document.getElementById("guessInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

function checkGuess() {
  var guess = Number(document.getElementById("guessInput").value);
  var message = document.getElementById("message");
  var attemptsDisplay = document.getElementById("attempts");

  attempts = attempts + 1;

  if (guess === secretNumber) {
    message.textContent = "You got it! The number was " + secretNumber + ".";
    message.className = "message correct";
    attemptsDisplay.textContent = "Total attempts: " + attempts;
  } else if (guess > secretNumber) {
    message.textContent = "Too high. Try again.";
    message.className = "message high";
    attemptsDisplay.textContent = "Attempts: " + attempts;
  } else {
    message.textContent = "Too low. Try again.";
    message.className = "message low";
    attemptsDisplay.textContent = "Attempts: " + attempts;
  }
}
