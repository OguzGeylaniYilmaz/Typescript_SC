async function fetchPicsumApi() {
  try {
    const response = await fetch("https://picsum.photos/v2/list");
    if (!response.ok) {
      throw new Error("Daten nicht gefunden");
    }

    const data = await response.json();
    if (data) {
      console.log(data);
    }
  } catch (error) {
    console.log("Error", error);
  }
}

fetchPicsumApi();
