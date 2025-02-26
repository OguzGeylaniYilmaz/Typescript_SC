type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

const meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(
  meineTopVier[2].release_jahr + " und " + meineTopVier[3].release_jahr
);
console.log(meineTopVier[3].formate[2]);
console.log(meineTopVier[3].title.substring(17, 21));

const newMusic:Musik = {
  kunstler : "AC DC",
  title:"Thunderstruck",
  release_jahr:1990,
  formate:["CS", "LP", "Download"],
  gold:true,
}

meineTopVier.push(newMusic);
console.log(meineTopVier);
