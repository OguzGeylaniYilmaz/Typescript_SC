type Serie = {
  name: string;
  numberOfEpisodes: number;
  avgRuntime: number;
};

const seriesList: Serie[] = [
  { name: "Breaking Bad", numberOfEpisodes: 62, avgRuntime: 49 },
  { name: "Game of Thrones", numberOfEpisodes: 73, avgRuntime: 60 },
  { name: "The Office", numberOfEpisodes: 201, avgRuntime: 22 },
  { name: "Stranger Things", numberOfEpisodes: 34, avgRuntime: 51 },
  { name: "The Crown", numberOfEpisodes: 40, avgRuntime: 58 },
];

function watchSeries(
  seriesName: string,
  numberOfEpisodes: number,
  avgRuntime: number
): Promise<number> {
  return new Promise((resolve) => {
    const totalTime = numberOfEpisodes * avgRuntime;
    resolve(totalTime);
  });
}

function suggestSeries(): Promise<Serie> {
  return new Promise((resolve) => {
    const randomSerie = Math.floor(Math.random() * 10);
    resolve(seriesList[randomSerie]);
  });
}

async function main() {
  try {
    setInterval(async () => {
      const suggestedSeries = await suggestSeries();
      console.log(`Suggested series: ${suggestedSeries.name}`);

      const totalTime = await watchSeries(
        suggestedSeries.name,
        suggestedSeries.numberOfEpisodes,
        suggestedSeries.avgRuntime
      );
      console.log(
        `Total time to watch ${suggestedSeries.name} is ${totalTime} Minutes `
      );
    }, 3000);
  } catch (error) {
    console.log("Error occurred:", error);
  }
}

main();
