const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const upperDrinks = drinks.map((drink) => drink.toUpperCase());

console.log(upperDrinks);

drinks.map((drink) => console.log(`I like ${drink}`));


