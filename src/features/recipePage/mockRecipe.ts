import type { Direction } from "../../types/recipe/Direction";
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

export const directions: Direction[] = [
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 1,
    directionText:
      "In a medium saucepan of boiling salted water, cook penne until just short of al dente, about 1 minute less than the package recommends.",
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 2,
    directionText:
      "Meanwhile, in a large skillet, combine oil, garlic, and pepper flakes. Cook over medium heat until garlic is very lightly golden, about 5 minutes. (Adjust heat as necessary to keep it gently sizzling.)",
    image: "y",
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 3,
    directionText:
      "Add tomatoes, stir to combine, and bring to a bare simmer. When pasta is ready, transfer it to sauce using a strainer or slotted spoon. (Alternatively, drain pasta through a colander, reserving 1 cup of cooking water. Add drained pasta to sauce.)",
    image: "y",
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 4,
    directionText:
      "Add about 1/4 cup pasta water to sauce and increase heat to bring pasta and sauce to a vigorous simmer. Cook, stirring and shaking the pan and adding more pasta water as necessary to keep sauce loose, until pasta is perfectly al dente, 1 to 2 minutes longer. (The pasta will cook more slowly in the sauce than it did in the water.)",
    image: "y",
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 5,
    directionText:
      "Continue cooking pasta until sauce thickens and begins to coat noodles, then remove from heat and toss in cheese and parsley, stirring vigorously to incorporate. Stir in a drizzle of fresh olive oil, if desired. Season with salt and serve right away, passing more cheese at the table.",
  },
];
