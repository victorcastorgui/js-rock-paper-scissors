
function playRound(playerSelection, computerSelection) {
  console.log("Computer chooses: " + computerSelection);
  if(computerSelection===playerSelection){
      return "It's a Tie!";
  }else if(playerSelection==="paper"){
      if(computerSelection==="rock"){
          return "You Win! Paper beats Rock."
      }else if(computerSelection==="scissors"){
          return "You Lose! Scissors beats Paper."
      }
  }else if(playerSelection==="scissors"){
      if(computerSelection==="paper"){
          return "You Win! Scissors beats Paper."
      }else if(computerSelection==="rock"){
          return "You Lose! Rock beats Scissors."
      }
  }else if(playerSelection==="rock"){
      if(computerSelection==="scissors"){
          return "You Win! Rock beats Scissors."
      }else if(computerSelection==="paper"){
          return "You Lose! Paper beats Rock."
      }
  }
}

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random()*choice.length)]
}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;

  console.log("Welcome to the Rock, Paper, and Scissors Game!")
  for (let i = 0; i<5; i++){
      const computerSelection = getComputerChoice();
      console.log("Round: " + round++);
      const playerSelection = prompt("Rock, Paper, or Scissors: ").toLowerCase();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);

      if(result==="It's a Tie!"){
        continue;
      }
      if(result === "You Win! Paper beats Rock." || result === "You Win! Scissors beats Paper." || result === "You Win! Rock beats Scissors."){
        playerScore++;
      }else if(result=== "You Lose! Paper beats Rock." || result === "You Lose! Rock beats Scissors." || result === "You Lose! Scissors beats Paper."){
        computerScore++;
      }
      
      console.log("Player Score: " + playerScore);
      console.log("Computer Score: " + computerScore);
  }
  console.log("Final Player Score: " + playerScore);
  console.log("Final Computer Score: " + computerScore);
  if(playerScore>computerScore){
      return "Congrats! You Win The Game.";
  }else if(playerScore===computerScore){
      return "It's a Tie! Nobody Wins."
  }else{
      return "Too Bad! You Lose The Game."
  }
}

console.log(game());