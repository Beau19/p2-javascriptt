document.getElementById("computer-choice").innerHTML;
document.getElementById("player-choice");
document.getElementById("result");

let computer;
let player;
let result;
let resultOutput;

const possibleChoices = document.querySelectorAll('button');
const randomNumber = Math.floor(Math.random() * 3) + 1;

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
}));

function generateComputerChoice() {
  if (randomNumber => 1) {
    computer = "rock";
  } 
  
  else if (randomNumber => 1) {
    computer = "paper";
  }
  
  else (randomNumber => 1) 
   computer = "scissors";
  }
  return result;

  function getResult() {
    if (computer === player) {
      result = "gelijkspel"
    }

    else if (computer === rock && player === paper) {
            result = "je hebt gewonnen"
    }

    else if (computer === rock && player === scissors) {
      result = "je hebt verloren"
    }

    else if (computer === paper && player === scissors) {
      result = "je hebt gewonnen"
    }

    else if (computer === paper && player === rock) {
      result = "je hebt verloren"
    }
    
    else if (computer === scissors && player === rock) {
      result = "je hebt gewonnen"
    }

    else if (computer === scissors && player === paper) {
      result = "je hebt verloren"
    }
  }
  
