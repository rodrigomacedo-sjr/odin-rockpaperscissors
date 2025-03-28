let humanScore = 0;
let computerScore = 0;

const MAX_POINTS = 5;

playGames();

function playGames() {
  while (playAgain()) {
    resetScores();
    let currentRound = 1;
    while (true) {
      displayHeader(currentRound);
      let roundWinner = playRound();
      displayWinner(roundWinner);
      updateScores(roundWinner);
      displayScores();

      currentRound += 1;

      if (humanScore >= MAX_POINTS || computerScore >= MAX_POINTS) {
        break;
      }
    }
    showResults();
  }
  console.log("Thanks for playing!");
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  if (randomNumber === 2) return "scissors";
}

function getHumanChoice() {
  while (true) {
    let answer = prompt("Rock, paper or scissors?").toLowerCase();
    if (answer === "rock" || answer === "paper" || answer === "scissors")
      return answer;

    alert("Please comply");
  }
}

function getWinner(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) return "tie";
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
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
  console.log(`Human : ${humanScore} - ${computerScore} : Computer`);
}

function showResults() {
  if (humanScore > computerScore)
    console.log("Congratulations human, you win!");
  else if (computerScore > humanScore)
    console.log("Oh no! Better luck next time!");
  else console.log("Yonks! That was a tie!");
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  displayRound(humanChoice, computerChoice);

  return getWinner(humanChoice, computerChoice);
}

function displayRound(humanChoice, computerChoice) {
  console.log(`Human choose: ${humanChoice}`);
  console.log(`Computer choose: ${computerChoice}`);
}

function displayWinner(winner) {
  console.log(`Winner of the round was: ${winner.toUpperCase()}`);
}

function playAgain() {
  let answer = prompt("Do you want to start a new game?").toLowerCase();
  if (answer === "y" || answer === "yes") return true;
  else return false;
}

function displayHeader(roundNumber) {
  console.log(`--- ROUND ${roundNumber} ---`);
}
