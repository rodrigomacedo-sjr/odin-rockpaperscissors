let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

const MAX_POINTS = 5;

const ROCK_EMOJI = "🪨";
const PAPER_EMOJI = "📄";
const SCISSORS_EMOJI = "✂️";

let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", function(e) {
  let humanChoice = String(e.target.innerText);

  if (humanChoice.length != 2) return;

  let roundWinner = playRound(humanChoice);

  displayWinner(roundWinner);
  updateScores(roundWinner);
  displayScores();
  displayHeader();

  if (someoneWon()) {
    showResults();
  }
});

let restartButton = document.querySelector("#restartButton");

restartButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  currentRound = 1;
  displayScores();
  displayHeader();
  clearExtras();
});

function someoneWon() {
  return humanScore >= MAX_POINTS || computerScore >= MAX_POINTS;
}

function clearExtras() {
  let log = document.querySelector("#log");
  log.textContent = ``;

  let result = document.querySelector("#round-result");
  result.textContent = ``;

  let endCard = document.querySelector("#end-card");
  endCard.style.visibility = "hidden"

  let endText = document.querySelector("#end-text");
  endText.textContent = "";

}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return ROCK_EMOJI;
  if (randomNumber === 1) return PAPER_EMOJI;
  if (randomNumber === 2) return SCISSORS_EMOJI;
}

function getWinner(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) return "none";
  else if (
    (humanChoice === ROCK_EMOJI && computerChoice === SCISSORS_EMOJI) ||
    (humanChoice === PAPER_EMOJI && computerChoice === ROCK_EMOJI) ||
    (humanChoice === SCISSORS_EMOJI && computerChoice === PAPER_EMOJI)
  )
    return "human";
  else return "computer";
}

function resetScores() {
  humanScore = 0;
  computerScore = 0;
}

function updateScores(winner) {
  if (winner === "human") humanScore += 1;
  else if (winner === "computer") computerScore += 1;
}

function displayScores() {
  let playerScore = document.querySelector("#player-score");
  let enemyScore = document.querySelector("#computer-score");
  playerScore.textContent = `You: ${humanScore}`;
  enemyScore.textContent = `Him: ${computerScore}`;
}

function showResults() {
  if (humanScore > computerScore) humanWon();
  else computerWon();
}

function humanWon() {
  let endCard = document.querySelector("#end-card");
  endCard.style.visibility = "visible";

  let endText = document.querySelector("#end-text");
  endText.textContent = "Congratulations human, you win!";
}

function computerWon() {
  let endCard = document.querySelector("#end-card");
  endCard.style.visibility = "visible";

  let endText = document.querySelector("#end-text");
  endText.textContent = "Oh no! Better luck next time!";
}

function playRound(humanChoice) {
  currentRound++;

  let computerChoice = getComputerChoice();

  displayRound(humanChoice, computerChoice);

  return getWinner(humanChoice, computerChoice);
}

function displayRound(humanChoice, computerChoice) {
  let log = document.querySelector("#log");
  log.textContent = `${humanChoice} x ${computerChoice}`;
}

function displayWinner(winner) {
  let roundResult = document.querySelector("#round-result");
  switch (winner) {
    case "none":
      roundResult.textContent = `TIE`;
      roundResult.style.color = "black";
      break;
    case "human":
      roundResult.textContent = `WIN`;
      roundResult.style.color = "green";
      break;
    case "computer":
      roundResult.textContent = `LOSS`;
      roundResult.style.color = "red";
      break;
  }
}

function displayHeader() {
  let roundNumber = document.querySelector("#round-number");
  roundNumber.textContent = `${currentRound}`;
}
