type Music = {
  artist: string;
  title: string;
  release_year: number;
  medium: string[];
  gold: boolean;
};

const myTopFour: Music[] = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

const output = document.getElementById("output");

if (output) {
  myTopFour.forEach((music) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <p> ${music.artist}</p>
    <p> ${music.title}</p>
    <p> ${music.medium.join(", ")}</p> <hr>`;
    output.appendChild(div);
  });
}

// Objekte mit release_year älter als 1975 ausgeben
const oldAlbums = myTopFour.filter(music => music.release_year < 1975);

const oldAlbumsDiv = document.createElement("div");
oldAlbumsDiv.innerHTML = "<h2>Alben vor 1975:</h2>";
output?.appendChild(oldAlbumsDiv);


oldAlbums.forEach((music)=>
{
  const div = document.createElement("div");
  div.innerHTML = `
    <p><strong>Künstler:</strong> ${music.artist}</p>
    <p><strong>Title:</strong> ${music.title}</p>
    <p><strong>Erscheinungsjahr:</strong> ${music.release_year}</p>
    <hr>
  `;
  output?.appendChild(div);
})

