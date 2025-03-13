const url: string = "https://jsonplaceholder.typicode.com/posts/1/comments";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Fehler: ${response.status} ${response.statusText}`);
    }

    return response.json();
  })
  .then((singleResponse: Comment[]) => {
    console.log(singleResponse);

    singleResponse.forEach((comment: Comment) => {
      console.log(comment.email);
    });
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((posts: Post[]) => {
    console.log("Alle Posts:", posts);

    if (posts.length === 0) {
      console.warn("Error: Die API hat keine Posts zurückgegeben.");
      return;
    }

    // Höchste Post-ID finden
    const maxId = Math.max(...posts.map((post) => post.id));
    console.log("Höchste Post-ID:", maxId);

    // Kürzesten Titel finden
    const shortestTitle = posts.reduce((shortest, post) =>
      post.title.length < shortest.title.length ? post : shortest
    );
    console.log("Kürzester Titel:", shortestTitle.title);

    // Längsten Body finden
    const longestBody = posts.reduce((longest, post) =>
      post.body.length > longest.body.length ? post : longest
    );
    console.log("Längster Body:", longestBody.body);
  })
  .catch((error) => {
    console.error("Fehler beim Abrufen der Posts:", error);
  });
