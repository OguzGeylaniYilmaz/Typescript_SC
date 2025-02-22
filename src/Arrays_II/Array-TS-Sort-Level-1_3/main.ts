const numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(
  numArray1.sort(function (a, b) {
    return a - b;
  })
);

console.log(
  numArray1.sort(function (a, b) {
    return b - a;
  })
);
