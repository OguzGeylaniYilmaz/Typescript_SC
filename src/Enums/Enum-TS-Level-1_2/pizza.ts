enum PizzaSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Family = "Family",
}

enum PizzaIngredients {
  Cheese = "Cheese",
  Onion = "Onion",
  Salami = "Salami",
  Mushrooms = "Mushrooms",
  Peppers = "Peppers",
  Ham = "Ham",
  Olives = "Olives",
  Tuna = "Tuna",
}

type Pizza = {
  size: PizzaSize;
  ingredients: PizzaIngredients[];
};

const pizza_1: Pizza = {
  size: PizzaSize.Large,
  ingredients: [
    PizzaIngredients.Cheese,
    PizzaIngredients.Mushrooms,
    PizzaIngredients.Onion,
  ],
};

const pizza_2: Pizza = {
    size: PizzaSize.Medium,
    ingredients: [
      PizzaIngredients.Salami,
      PizzaIngredients.Mushrooms,
      PizzaIngredients.Tuna,
    ],
  };

  const pizza_3: Pizza = {
    size: PizzaSize.Small,
    ingredients: [
      PizzaIngredients.Cheese,
      PizzaIngredients.Peppers,
      PizzaIngredients.Olives,
      PizzaIngredients.Salami,
    ],
  };

  const pizza_4: Pizza = {
    size: PizzaSize.Family,
    ingredients: [
      PizzaIngredients.Cheese,
      PizzaIngredients.Peppers,
      PizzaIngredients.Salami,
      PizzaIngredients.Mushrooms,
      PizzaIngredients.Onion,
    ],
  };

  console.log(pizza_1,pizza_2,pizza_3,pizza_4);