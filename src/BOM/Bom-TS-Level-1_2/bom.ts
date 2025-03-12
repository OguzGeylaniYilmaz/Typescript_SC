const time = document.querySelector(".zeit") as HTMLDivElement;
const startButton = document.getElementById("btn") as HTMLButtonElement;

function countdownToZero() {
  let percentage: number = 100;
  time.textContent = `${percentage}%`;

  const interval = setInterval(() => {
    percentage -= 1;
    time.textContent = `${percentage}%`;

    if (percentage <= 0) {
      clearInterval(interval);
    }
  }, 100);
}

startButton?.addEventListener("click", countdownToZero);
