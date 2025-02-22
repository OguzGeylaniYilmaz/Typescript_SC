let sentence =
  "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

const bigPiper = sentence.includes("Piper");
console.log(bigPiper);

const smallPiper = sentence.includes("piper");
console.log(smallPiper);

console.log(sentence.toLowerCase().includes("piper"));

let isPeck = "peck";
console.log(sentence.includes(isPeck, 5));
console.log(sentence.includes(isPeck, 22));
