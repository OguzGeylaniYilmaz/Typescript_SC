const userScoreSpan = document.getElementById('user-score') as HTMLSpanElement;
const compScoreSpan = document.getElementById('comp-score') as HTMLSpanElement;
const resultP = document.getElementById('result') as HTMLParagraphElement;
const rockBtn = document.getElementById('rock') as HTMLButtonElement;
const paperBtn = document.getElementById('paper') as HTMLButtonElement;
const scissorsBtn = document.getElementById('scissors') as HTMLButtonElement;
const restartBtn = document.getElementById('restart') as HTMLButtonElement;
const roundsInputs = document.querySelectorAll('input[name="rounds"]') as NodeListOf<HTMLInputElement>;

let userScore = 0;
let compScore = 0;
let roundsToPlay = 5;
let currentRound = 0;

roundsInputs.forEach(input => {
    input.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        roundsToPlay = parseInt(target.value);      
        restartGame();
    });
});

function getComputerChoice(): string {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice: string, computerChoice: string): void {
    userScore++;
    userScoreSpan.innerHTML = userScore.toString();
    resultP.innerHTML = `${userChoice} beats ${computerChoice}. You win! 🎉`;
}

function lose(userChoice: string, computerChoice: string): void {
    compScore++;
    compScoreSpan.innerHTML = compScore.toString();
    resultP.innerHTML = `${userChoice} loses to ${computerChoice}. You lose!  😢`;
}

function draw(userChoice: string, computerChoice: string): void {
    resultP.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw!`;
}

function game(userChoice: string): void {
    if (currentRound >= roundsToPlay) {
        resultP.innerHTML = `Game over! Final score: You ${userScore} - ${compScore} Comp`;
        return;
    }

    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }

    currentRound++;
    if (currentRound >= roundsToPlay) {
        resultP.innerHTML = `Game over! Final score: You ${userScore} - ${compScore} Comp`;
    }
}

function restartGame(): void {
    userScore = 0;
    compScore = 0;
    currentRound = 0;
    userScoreSpan.innerHTML = '0';
    compScoreSpan.innerHTML = '0';
    resultP.innerHTML = 'Make your move!';
}

rockBtn.addEventListener('click', () => game('rock'));
paperBtn.addEventListener('click', () => game('paper'));
scissorsBtn.addEventListener('click', () => game('scissors'));
restartBtn.addEventListener('click', restartGame);