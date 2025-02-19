
function changeTheme(bgColor: string, textColor: string): void {
    document.body.style.background = bgColor;
    document.querySelector("h1")!.style.color = textColor;
}


document.getElementById("ball1")!.addEventListener("click", () => changeTheme("red", "yellow"));
document.getElementById("ball2")!.addEventListener("click", () => changeTheme("blue", "cyan"));
document.getElementById("ball3")!.addEventListener("click", () => changeTheme("green", "lime"));
document.getElementById("ball4")!.addEventListener("click", () => changeTheme("purple", "pink"));