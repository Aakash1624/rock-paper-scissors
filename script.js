const userScoreEL = document.getElementById("user-score");
const compScoreEL = document.getElementById("comp-score");
const userChoiceEl = document.getElementById("user-choice");
const compChoiceEl = document.getElementById("comp-choice");
const gameResultEl = document.getElementById("game-result");
const resultsContainer = document.querySelector(".results-container");

//1 - Get User Choice

//2 - Generate computer Choice
function getComputerChoice() {
  const weapons = ["rock", "paper", "scissor"];
  const randomNumber = Math.trunc(Math.random() * weapons.length);

  return weapons[randomNumber];
}
//3 - Get Result
let result = "";
let userScore = 0;
let compScore = 0;
function playGame(userChoice) {
  const compChoice = getComputerChoice();

  if (userChoice === compChoice) {
    result = "DRAW";
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "scissor" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    result = "WON";
  } else {
    result = "LOSS";
  }

  resultsContainer.style.display = "flex";
  userChoiceEl.innerText = userChoice;
  compChoiceEl.innerText = compChoice;

  gameResultEl.innerText = `GAME ${result}`;
  if (result === "WON") {
    // gameResultEl.classList.remove("loss");
    // gameResultEl.classList.remove("draw");
    // gameResultEl.classList.add("won");
    gameResultEl.className = `game-result won`;
    userScore = userScore + 1;
    userScoreEL.innerText = userScore;
  } else if (result === "LOSS") {
    // gameResultEl.classList.remove("won");
    // gameResultEl.classList.remove("draw");
    // gameResultEl.classList.add("loss");
    gameResultEl.className = `game-result loss`;
    compScore = compScore + 1;
    compScoreEL.innerText = compScore;
  } else if (result == "DRAW") {
    // gameResultEl.classList.remove("loss");
    // gameResultEl.classList.remove("won");
    // gameResultEl.classList.add("draw");
    gameResultEl.className = `game-result draw`;
  }
}
//4 - Display Result
