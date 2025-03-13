const url: string = "https://picsum.photos/v2/list";

type ImageType = {
  id: number;
  author: string;
};

async function fetchImages() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const gallery = document.getElementById("gallery") as HTMLDivElement;
    gallery.innerHTML = ""; //* Zuerst die Galerie leeren

    data.forEach((image: ImageType) => {
      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.src = `https://picsum.photos/id/${image.id}/400/300`;
      img.alt = `Image by ${image.author}`;

      const figcaption = document.createElement("figcaption");
      figcaption.textContent = image.author;

      figure.appendChild(img);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    });
  } catch (error) {
    console.error("Data retrieval error:", error);
  }
}

fetchImages();
