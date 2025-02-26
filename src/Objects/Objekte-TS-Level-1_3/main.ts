type Apple = {
  color: string;
  size: string;
  isSweet: true;
};

const redApple: Apple = { color: "red", size: "big", isSweet: true };
const greenApple: Apple = { color: "green", size: "small", isSweet: true };
const yellowApple: Apple = { color: "yellow", size: "big", isSweet: true };
const pinkApple: Apple = { color: "pink", size: "small", isSweet: true };
const apples: Apple[] = [redApple, greenApple, yellowApple,pinkApple];

for (let i = 0; i < apples.length; i++) {
  console.log(apples[i].size);
}

apples.forEach((item) => console.log(item.color));
console.log(apples.length);

apples.push(pinkApple);
console.log(apples);
