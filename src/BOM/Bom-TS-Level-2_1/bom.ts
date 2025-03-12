function countdownToZero(): void {
  const messageDiv = document.querySelector(".message") as HTMLDivElement;
  const countElement = document.getElementById("count") as HTMLDivElement;

  if (countElement && messageDiv) {
    let counter: number = 10;

    const interval = setInterval(() => {
      countElement.textContent = counter.toString();
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        messageDiv.style.display = "none";
      }
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", countdownToZero);
