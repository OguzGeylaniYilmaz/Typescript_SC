document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("numInput") as HTMLInputElement;
  const button = document.getElementById("generateButton") as HTMLButtonElement;
  const output = document.getElementById("output") as HTMLParagraphElement;

  if (!input || !button || !output) return;

  button.addEventListener("click", () => {
    const count = Number(input.value);

    output.textContent = `L${"o".repeat(count)}p`;
  });
});

//# die zweite Lösung

// function generataLoop() {
//   const num = parseInt(
//     (document.getElementById("numInput") as HTMLInputElement).value, 10  
//   );
//   let text = "L";
//   for(let i = 0;i<num;i++)
//   {
//     text += "o";
//   }
//   text += "p";

//   document.getElementById("output")!.textContent = text;
// }
