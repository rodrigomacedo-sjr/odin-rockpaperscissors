# Rock Paper Scissors
Project developed as part of The Odin Project Foundations Course.
Basic JavaScript logic and DOM manipulation.

## New, UI version
### TODO

- [x] 1. Remove logic that plays exactly five rounds.
- [x] 2. Create three buttons, one for each selection. Add an event listener to the buttons that calls the `playRound` function with the correct `playerSelection`.
- [x] 3. Add a `div` for displaying results. Change `console.log`s into DOM methods.
- [x] 4. Display the running score, and announce a winner once one player reaches 5 points.

## CLI Version, Pseudo-code
Main code flow.
The whole game runs inside this function.

```
playGame
  resetScores
  loop 5 times
    playRound
    displayWinner
    updateScore
    displayScore
  showResult
  playAgain
```

```
resetScores
  humanScore = 0
  computerScore = 0
```

Simple, high level flow of the round.

```
playRound
  humanChoice is getHumanChoice
  computerChoice is getComputerChoice

  displayRound

  return getWinner, passing choices as parameter
```

```
displayRound
  print choices
```

```
displayWinner
  print winner
```

```
getHumanChoice
  loop forever
  prompt the user
    'choose between rock, paper or scissors'
  if the user input matches one of the valid choices case insensitive
    return rock paper or scissor accordingly
```

```
getComputerChoice
  random number between 1 and 3 inclusive
  return rock, paper or scissors accordingly
```

```
getWinner, humanChoice and computerChoice as parameters
  rock paper scissors game logic
    if choices are equal
      return tie
    else if humanChoice = rock and computerChoice = scissor
      return human
    else if humanChoice = paper and computerChoice = rock
      return human
    else if humanChoice = scissors and computerChoice = paper
      return human
    else
      return computer
```

```
updateScore, winner as a parameter
  if winner is human
    humanScore += 1
  if winner is computer
    computerScore += 1
  return
```

```
displayScore
  Human : humanScore - computerScore : Computer
```

```
showResult
  if human won
    print 'congratulation human!'
  if computer won
    print 'oh no! better luck next time!'
  if tie
    print 'oof! that was close'
```

```
playAgain
  prompt the user
    'do you want to play again?'
  if the user input matches [y, yes] case insensitive
    humanScore = 0
    computerScore = 0
  else
    show 'thanks for playing'
```
