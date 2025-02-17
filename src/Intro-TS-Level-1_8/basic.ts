let x: number = 20,
  y = 30,
  z = 10;

console.log("x + y = ", x + y);
console.log("x - y = ", x - y);
console.log("y - x = ", y - x);
console.log("x * y = ", x * y);
console.log("x / y = ", x / y);

let resultOne: number = (x * y) / z;
console.log("(x*y)/z= ", resultOne);

let a: number = 15,
  b = 9;

console.log("a % b =", a % b);

let c: number = 20;

let resultTwo: number = (a + b) * c;
console.log("(a+b) * c = ", resultTwo);


console.log(++a);

console.log(--b);

let resultThree: number = b - a;
console.log(resultThree);

console.log("resultOne / resultTwo ", resultOne % resultTwo);
