const classElements = document.querySelectorAll(".example");

if (classElements.length > 0) {
  const lastElement = classElements[classElements.length - 1] as HTMLElement;

  lastElement.addEventListener("click", () => {
    classElements.forEach((element) => {
      (element as HTMLElement).style.backgroundColor = "black";
      (element as HTMLElement).style.color = "white";
    });
  });
}
