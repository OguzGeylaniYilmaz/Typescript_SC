// function delayMessage(message: string, delay: number): void {
//   setTimeout(() => {
//     console.log(message);
//   }, delay);
// }

function countdownAndMessage(): void {
  console.log("Start: Warten für 3 Sekunden..");

  setTimeout(() => {
    let counter = 10;
    const interval = setInterval(() => {
      console.log(counter);
      counter--;

      if (counter == 8) {
        console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
      }

      if (counter < 1) {
        clearInterval(interval);
        console.log("Endlich Feierabend!");
      }
    }, 1000);
  }, 3000);
}

//* Funktion aufrufen
countdownAndMessage();
