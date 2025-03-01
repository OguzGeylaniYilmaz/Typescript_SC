const userInput = document.querySelector("input") as HTMLInputElement;
const buttonInput = document.querySelector("button") as HTMLButtonElement;
const myListInput = document.getElementById("myList") as HTMLUListElement;

buttonInput?.addEventListener("click", () => {
  const inputValue = userInput.value.trim();

  if (inputValue === "") {
    alert("Bitte geben Sie ein Produkt ein!"); // Verhindert leere Eingaben
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = userInput.value;

  myListInput.appendChild(listItem);
  userInput.value = "";
});
