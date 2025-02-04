console.log("Hello, World!");

let humanScore = 0;
let computerScore = 0;

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

/*
Rock Paper Scissor Pseudo-code

---- program flow -----
playGame
---- end of program flow -----

playGame
  resetScores
  loop 5 times
    playRound
    displayWinner
    updateScore
    displayScore
  showResult
  playAgain

resetScores
  humanScore = 0 
  computerScore = 0 

playRound
  humanChoice is getHumanChoice
  computerChoice is getComputerChoice

  displayRound 

  return getWinner, passing choices as parameter

displayRound
  display choices

displayWinner
  display winner

getHumanChoice
  loop forever
  prompt the user
    'choose between rock, paper or scissors'
  if the user input matches one of the valid choices case insensitive
    return rock paper or scissor accordingly
    
getComputerChoice
  random number between 1 and 3 inclusive
  return rock, paper or scissors accordingly

getWinner, human and computer choice as parameters
  rock paper scissors game logic
    if choices are equal
      return tie
    else if human = rock, computer scissor
      return human
    else if human = paper, computer rock
      return human
    else if human = scissors, computer paper
      return human
    else
      return computer

updateScore, winner as a paremeter
  if winner is human
    humanScore += 1
  if winner is computer
    computerScore += 1
  return

displayScore
  Human : humanScore - computerScore : Computer

showResult
  if human won
    show 'congratulation human!'
  if computer won
    show 'oh no! better luck next time!'
  if tie
    show 'oof! that was close'

playAgain
  prompt the user
    'do you want to play again?'
  if the user input matches [y, yes] case insensitive
    humanScore = 0
    computerScore = 0
  else
    show 'thanks for playing'
*/
