import type { Ingredient } from "../../types/recipe/Ingredient";

export const ingredients: Ingredient[] = [
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 1,
    label: "Kosher salt",
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 2,
    label: "penne pasta",
    quantity: [
      {
        numerator: 1,
        denominator: 1,
        unit: "pound",
      },
      {
        numerator: 450,
        denominator: 1,
        unit: "g",
      },
    ],
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 3,
    label: "ground black pepper",
    quantity: [
      {
        numerator: 1,
        denominator: 2,
        unit: "teaspoon",
      },
    ],
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 4,
    label: "medium garlic glove",
    quantity: [
      {
        numerator: 1,
        denominator: 1,
      },
    ],
  },
];
