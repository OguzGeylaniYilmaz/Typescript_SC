export async function waitForTwoSeconds() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("Thanx 4 the patience 💜");
      resolve();
    }, 2000); // Warte für 2 Sekunden
  });
}
