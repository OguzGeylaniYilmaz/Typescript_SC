const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(num: number): boolean {
  return num % 2 === 0;
}

function printOddNumbers(num: number): boolean {
  return num % 2 !== 0;
}

const evenNumbers = zahlen.filter(printEvenNumbers);
const oddNumbers = zahlen.filter(printOddNumbers);

console.log("Even", evenNumbers);
console.log("Odd", oddNumbers);

// Nutzung von Arrow Functions

const evenNumbersArrow = zahlen.filter((num) => num % 2 === 0);
const oddNumbersArrow = zahlen.filter((num) => num % 2 !== 0);

console.log("Even Numbers (Arrow):", evenNumbersArrow);
console.log("Odd Numbers (Arrow):", oddNumbersArrow);
