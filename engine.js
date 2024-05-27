const moves = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Rock/Paper/Scissor").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper') ||
        (humanChoice === 'rock' && computerChoice === 'scissor')) {
        console.log('You win:', humanChoice, 'beats', computerChoice);
        return 'human';
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw");
        return 'draw';
    } else {
        console.log('You lose:', computerChoice, 'beats', humanChoice);
        return 'computer';
    }
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const winner = playRound(getHumanChoice(), getComputerChoice());
        if (winner === 'human') {
            humanScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
        console.log('Score: Human -', humanScore, 'Computer -', computerScore);
    }
}

playGame();
