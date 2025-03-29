# New, UI version
## TODO
- [x] 1. Remove logic that plays exactly five rounds.
2. Create three buttons, one for each selection. Add an event listener to the buttons that calls the `playRound` function with the correct `playerSelection`.
3. Add a `div` for displaying results. Change `console.log`s into DOM methods.
4. Display the running score, and announce a winner once one player reaches 5 points.


# Old, comand-line version
Rock Paper Scissors Pseudo-code

---- program flow ----
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
