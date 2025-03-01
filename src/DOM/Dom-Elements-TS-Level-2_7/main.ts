document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const container = document.querySelector(".umwickeln");
    let counter = 0;

    button?.addEventListener("click", () => {
        if (!container) return;

        const box = document.createElement("div");
        box.textContent = counter.toString();
        box.classList.add("rechteck");

        if (counter % 10 === 0) {
            box.classList.add("weiss");
        }

        container.appendChild(box);
        counter++;
    });
});
      
   
