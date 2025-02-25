const words:string[] = ["Abendbrot", "Brueckentag", "Erklaerungsnot", "Fingerspitzengefuehl", "Fremdschaemen", "Geborgenheit", "Geschmacksverirrung", "Schweinehund", "Kopfkino", "Kummerspeck", "Schnapsidee", "Torschlusspanik", "verabredet", "verschlimmbessern", "Vorfreude", "Weltschmerz", "Zeitgeist", "Zugzwang"]

const maxAttempts: number = 6;
let attemptsLeft: number = maxAttempts;
let selectedWord: string = words[Math.floor(Math.random() * words.length)].toUpperCase();
let guessedLetters: Set<string> = new Set();
let timer: number = 0;
let timerInterval: number;


const wordDisplay = document.getElementById("word-display") as HTMLParagraphElement;
const attemptsLeftDisplay = document.getElementById("attempts-left") as HTMLSpanElement;
const keyboard = document.getElementById("keyboard") as HTMLDivElement;
const resetButton = document.getElementById("reset-button") as HTMLButtonElement;
const message = document.getElementById("message") as HTMLParagraphElement;
const timeDisplay = document.getElementById("time") as HTMLSpanElement;


const germanLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ";

// Tastaturtasten erstellen
function createKeyboard(): void {
    for (const letter of germanLetters) {
        const button = document.createElement("button");
        button.textContent = letter;
        button.addEventListener("click", () => handleGuess(letter));
        keyboard.appendChild(button);
    }
}

// Das Wort auf dem Bildschirm anzeigen (Beispiel: _ _ _ _ _)
function displayWord(): void {
    let display = "";
    for (const letter of selectedWord) {
        if (guessedLetters.has(letter)) {
            display += letter;
        } else {
            display += "_";
        }
        display += " ";
    }
    wordDisplay.textContent = display.trim();
}

// Verbleibende Testrechte aktualisieren
function updateAttempts(): void {
    attemptsLeftDisplay.textContent = attemptsLeft.toString();
}

// Hat der Spieler gewonnen?
function checkWin(): boolean {
    return selectedWord.split("").every(letter => guessedLetters.has(letter));
}

// Hat der Spieler verloren?
function checkLose(): boolean {
    return attemptsLeft <= 0;
}

// Neues Spiel starten
function resetGame(): void {
    selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    guessedLetters.clear();
    attemptsLeft = maxAttempts;
    displayWord();
    updateAttempts();
    message.textContent = "";
    // Schaltflächen wieder aktivieren
    keyboard.querySelectorAll("button").forEach(button => {
        button.classList.remove("disabled","wrong","correct");
    });

    clearInterval(timerInterval);
    timer = 0;
    timeDisplay.textContent = "0";
    startTimer();
}

function startTimer(): void {
    timerInterval = setInterval(() => {
        timer++;
        timeDisplay.textContent = timer.toString();
    }, 1000);
}



// Buchstaben-Rateprozess
function handleGuess(letter: string): void {
    if (guessedLetters.has(letter)) {
        message.textContent = "Du hast diesen Buchstaben bereits geraten.";
        return;
    }

    guessedLetters.add(letter);

    const button = Array.from(keyboard.querySelectorAll("button")).find(btn => btn.textContent === letter);
    if (button) {
        button.classList.add("disabled");
        if (!selectedWord.includes(letter)) {
            button.classList.add("wrong"); //- wenn falsch ist
        } else {
            button.classList.add("correct"); //- wenn wahl ist
        }
    }



    if (!selectedWord.includes(letter)) {
        attemptsLeft--;
        message.textContent = `Der Buchstabe ${letter} ist nicht im Wort.`;
    } else {
        message.textContent = `Gut gemacht! Der Buchstabe ${letter} ist im Wort.`;
    }

    displayWord();
    updateAttempts();

    if (checkWin()) {
        message.textContent = `Herzlichen Glückwunsch, du hast gewonnen! Zeit: ${timer} Sekunden.`;
        clearInterval(timerInterval);
        resetGame();
    } else if (checkLose()) {
        message.textContent = `Leider verloren. Das Wort war "${selectedWord}". Zeit: ${timer} Sekunden.`;
        clearInterval(timerInterval);

    }
}


resetButton.addEventListener("click", resetGame);


createKeyboard();
displayWord();
updateAttempts();
startTimer();