let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let y = Math.floor(Math.random() * 3) + 1;
    if (y === 1) {
        return "rock";
    }
    if (y === 2) {
        return "paper";
    }
    if (y === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let sign = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
        while (sign !== "rock" && sign !== "paper" && sign !== "scissors") {
        sign = prompt("Invalid input. Please enter Rock, Paper, or Scissors").toLowerCase();
    }
    
    return sign;
}

function playRound(hChoice, cChoice) {
    let result = '';
    if (hChoice === "rock" && cChoice === "paper") {
        result = "You Lose: Paper beats Rock";
        computerScore++;
    } else if (hChoice === "rock" && cChoice === "scissors") {
        result = "You Win: Rock beats Scissors";
        humanScore++;
    } else if (hChoice === "rock" && cChoice === "rock") {
        result = "You Tie: Rock equals Rock";
    } else if (hChoice === "paper" && cChoice === "paper") {
        result = "You Tie: Paper ties Paper";
    } else if (hChoice === "paper" && cChoice === "pock") {
        result = "You Win: Paper beats Rock";
        humanScore++;
    } else if (hChoice === "paper" && cChoice === "scissors") {
        result = "You Lose: Scissors beats Paper";
        computerScore++;
    } else if (hChoice === "scissors" && cChoice === "paper") {
        result = "You Win: Scissors beats Paper";
        humanScore++;
    } else if (hChoice === "scissors" && cChoice === "rock") {
        result = "You Lose: Rock beats Scissors";
        computerScore++;
    } else if (hChoice === "scissors" && cChoice === "scissors") {
        result = "You Tie: Scissors ties Scissors";
    }

    return result;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const hSelection = getHumanChoice();
        const cSelection = getComputerChoice();
        console.log(`You chose: ${hSelection}, Computer chose: ${cSelection}`);
        // Get the result for the round and print it
        const roundResult = playRound(hSelection, cSelection);
        console.log(roundResult);
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
}

// Start the game
playGame();
