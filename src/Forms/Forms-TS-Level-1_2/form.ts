const inputElement = document.getElementById("jahr") as HTMLInputElement;
const buttonElement = document.getElementById(
  "calculateMyAge"
) as HTMLButtonElement;
const outputElement = document.getElementById("output") as HTMLElement;

buttonElement.addEventListener("click", () => {
    const dasJahr:number = new Date().getFullYear();
    const inputValue = Number((inputElement.value));
    outputElement.innerText = `Mein Alter ist ${dasJahr - inputValue}`

});
