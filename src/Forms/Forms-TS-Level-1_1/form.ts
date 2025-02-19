const inputElement = document.getElementById("numberInput") as HTMLInputElement;
const buttonElement = document.getElementById(
  "calculateBtn"
) as HTMLButtonElement;
const outputElement = document.getElementById("output") as HTMLElement;

buttonElement.addEventListener("click", () => {
  const inputValue = Number((inputElement.value));
  if (!isNaN(inputValue))
    outputElement.textContent = `Ergebnis: ${inputValue * 2}`;
  else {
    outputElement.textContent = "Geben Sie eine gültige Nummer ein";
  }
});
