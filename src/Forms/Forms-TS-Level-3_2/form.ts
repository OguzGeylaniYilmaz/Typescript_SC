

const textInput = document.getElementById("textInput") as HTMLInputElement;
const sizeInput = document.getElementById("sizeInput") as HTMLInputElement;
const fontSelect = document.getElementById("fontSelect") as HTMLSelectElement;
const outputText = document.getElementById("outputText") as HTMLElement;


function changeFontsSize() {
    outputText.innerText = textInput.value;
    outputText.style.fontSize = `${sizeInput.value}px`;
    outputText.style.fontFamily = fontSelect.value;
}

textInput.addEventListener("input", changeFontsSize);
sizeInput.addEventListener("input", changeFontsSize);
fontSelect.addEventListener("change", changeFontsSize);