


const selectElement = document.getElementById("mySelect") as HTMLSelectElement;
const outputElement = document.getElementById("outputElement") as HTMLElement;

selectElement.addEventListener("change", () => {
  outputElement.textContent = `Sie haben ausgewählt ${selectElement.value}`;
});
