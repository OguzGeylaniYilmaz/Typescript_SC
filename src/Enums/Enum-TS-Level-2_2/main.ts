enum ClothingColor {
    Gelb = "#FFFF00",
    Orange = "#FFA500",
    Pink = "#FFC0CB",
    Blau = "#0000FF",
    Lila = "#800080",
    Grau = "#808080"
}

const allColors: ClothingColor[] = [
    ClothingColor.Gelb,
    ClothingColor.Orange,
    ClothingColor.Pink,
    ClothingColor.Blau,
    ClothingColor.Lila,
    ClothingColor.Grau
];

const colorContainer = document.getElementById("color-container") as HTMLDivElement;

allColors.forEach(color => {
    const button = document.createElement("button");
    button.textContent = color;
    button.style.backgroundColor = color;
    button.style.color = "#000000";
    button.style.padding = "10px";
    button.style.borderRadius = "25px";
    button.style.margin = "5px";
    button.style.border = "none";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
        alert(`Du hast die Farbe ${color} ausgewählt!`);
    });

    colorContainer.appendChild(button);
});

//# Bonus: Ohne Array allColors

// const colorContainer = document.getElementById("color-container") as HTMLDivElement;

// Object.values(ClothingColor).forEach(color => {
//     const button = document.createElement("button");
//     button.textContent = color;
//     button.style.backgroundColor = color;
//     button.style.color = "#000000";
//     button.style.padding = "10px";
//     button.style.margin = "5px";
//     button.style.border = "none";
//     button.style.cursor = "pointer";

//     button.addEventListener("click", () => {
//         alert(`Du hast die Farbe ${color} ausgewählt!`);
//     });

//     colorContainer.appendChild(button);
// });




