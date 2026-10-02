let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

let resultMessage = document.getElementById("result-message");

let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");

let resetButton = document.getElementById("reset");


function playGame(userChoice) {

    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];


    // Decide result
    let result;
    if (userChoice === computerChoice) {
        result = "Draw";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win";
    }

    else {

        result = "Computer Wins";

    }

    // Show result
    resultMessage.innerHTML = result;

    // Update score
    if (result === "You Win") {

        userScore.innerHTML = Number(userScore.innerHTML) + 1;

    }
    else if (result === "Computer Wins") {

        computerScore.innerHTML = Number(computerScore.innerHTML) + 1;

    }
    // Change result color
    if (result === "You Win") {
        resultMessage.className = "win";
    }
    else if (result === "Computer Wins") {
        resultMessage.className = "lose";
    }
    else {
        resultMessage.className = "draw";
    }

    // Result animation
    resultMessage.style.animation = "none";

    setTimeout(function () {
        resultMessage.style.animation = "resultPop 0.3s ease";
    }, 10);

}

// Rock
rockButton.addEventListener("click", function () {
    playGame("rock");

});


// Paper
paperButton.addEventListener("click", function () {
    playGame("paper");

});

// Scissors
scissorsButton.addEventListener("click", function () {
    playGame("scissors");

});

// Reset
resetButton.addEventListener("click", function () {
    userScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    resultMessage.innerHTML = "Make your move!";
    resultMessage.className = "";

});
