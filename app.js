let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const userBadge = document.getElementById("user-label");
const compBadge = document.getElementById("comp-label");

const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getCompChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, compChoice) {
    result_div.innerHTML = `${userChoice} wins over ${compChoice}.`;
    userScore++;
    userScore_span.innerHTML = userScore;
    scoreBoard_div.classList.add('green-glow');
    userBadge.classList.add('green-badge');
    setTimeout(() => {
        scoreBoard_div.classList.remove('green-glow');
        userBadge.classList.remove('green-badge');
    }, 300);
}

function lose(userChoice, compChoice) {
    result_div.innerHTML = `${userChoice} loses to ${compChoice}.`;
    compScore++;
    compScore_span.innerHTML = compScore;
    scoreBoard_div.classList.add('red-glow');
    compBadge.classList.add('red-badge');
    setTimeout(() => {
        scoreBoard_div.classList.remove('red-glow');
        compBadge.classList.remove('red-badge');
    }, 300);
}

function draw() {
    result_div.innerHTML = "It's a draw!";
    scoreBoard_div.classList.add('gray-glow');
    setTimeout(() => scoreBoard_div.classList.remove('gray-glow'), 300);
}

function game(playerChoice) {
    const compChoice = getCompChoice();
    switch (playerChoice + compChoice) {
        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock":
            win(playerChoice, compChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(playerChoice, compChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw();
            break;
    }

}

function main() {
    rock_div.addEventListener("click", () => game("Rock"));
    paper_div.addEventListener("click", () => game("Paper"));
    scissors_div.addEventListener("click", () => game("Scissors"));
}

main();
