

const randomCities:string[] = ["London","Paris","New York"]
const randomNumbers:number[] = [21,77,111];
const randomNames:string[] = ["Suzy","Julie","Anna"];

console.log(randomCities);
const deletedValue = randomCities.pop();
console.log("Entfernt: ", deletedValue);
console.log(randomCities);


console.log(randomNumbers);
const deletedValue2 = randomNumbers.pop();
console.log("Entfernt: ", deletedValue2);
console.log(randomNumbers);

console.log(randomNames);
const deletedValue3 = randomNames.pop();
console.log("Entfernt: ", deletedValue3);
console.log(randomNames)