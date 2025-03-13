document.addEventListener("DOMContentLoaded", () => {
  const timeDisplay = document.getElementById("time") as HTMLDivElement;
  const minutesInput = document.getElementById("minutes") as HTMLInputElement;
  const startButton = document.getElementById(
    "start-button"
  ) as HTMLButtonElement;
  const pauseButton = document.getElementById(
    "pause-button"
  ) as HTMLButtonElement;
  const restartButton = document.getElementById(
    "restart-button"
  ) as HTMLButtonElement;

  let totalSeconds: number = 0;
  let countdownInternal: number | null = null;
  let isPaused: boolean = false;

  function updateTimeDisplay(): void {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  function startCountdown(): void {
    const inputMinutes = parseInt(minutesInput.value);
    if (isNaN(inputMinutes) || inputMinutes <= 0) {
      alert("Bitte eine gültige Minutenanzahl eingeben!");
      return;
    }

    totalSeconds = inputMinutes * 60;
    updateTimeDisplay();

    if (countdownInternal != null) clearInterval(countdownInternal);

    isPaused = false;
    countdownInternal = setInterval(() => {
      if (!isPaused && totalSeconds > 0) {
        totalSeconds--;
        updateTimeDisplay();
      } else if (totalSeconds === 0) {
        clearInterval(countdownInternal!);
        countdownInternal = null;
      }
    }, 1000);
  }

  function pause(): void {
    isPaused = !isPaused;
  }

  function restart(): void {
    if (countdownInternal !== null) clearInterval(countdownInternal);
    startCountdown();
  }

  startButton.addEventListener("click", startCountdown);
  pauseButton.addEventListener("click", pause);
  restartButton.addEventListener("click", restart);
});
