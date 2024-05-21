const moves = ['rock', 'paper', 'scissor'];
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Rock/Paper/Scissor").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissor' && computerChoice == 'paper' || humanChoice == 'rock' && computerChoice == 'scissor') {
        console.log('You win:', humanChoice, 'beats', computerChoice);
    }
    else if (humanChoice == computerChoice) {
        console.log("It's a draw");
    }
    else {
        console.log('You lose:', computerChoice, 'beats', humanChoice);
    }
}
playRound(getHumanChoice(), getComputerChoice());