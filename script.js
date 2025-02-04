console.log("Hello, World!");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return 'rock';
  if (randomNumber === 1) return 'paper';
  if (randomNumber === 2) return 'scissors';
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

  return getWinner, passing choices as parameter

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

displayScore, scores as a parameter
  Human : humanScore - computerScore : Computer

showResult, scores as a parameter
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
