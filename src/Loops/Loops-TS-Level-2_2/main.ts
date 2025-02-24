document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("numInput") as HTMLInputElement
    const button = document.getElementById("generateButton") as HTMLButtonElement
    const output = document.getElementById("output") as HTMLParagraphElement

    if (!input || !button || !output) return;

    button.addEventListener("click", () => {
        const count = Number(input.value);
        
        
        output.textContent = `L${"o".repeat(count)}p`;
    });
});
