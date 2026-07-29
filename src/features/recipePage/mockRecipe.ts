import type { ImageType } from "../../types/ImageType";
import type { Direction } from "../../types/recipe/Direction";
import type { Ingredient } from "../../types/recipe/Ingredient";

export const headerImage: ImageType = {
  src: "https://www.seriouseats.com/thmb/PDh2rLFXAiYSNg9XclL406vf9M8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__03__20160211-pasta-arrabiata-vicky-wasik-011-c6de80337920468886b7d6a8c0323544.jpg",
  caption: "Credit Serious Eats / Vicky Wasik",
  alt: "Overhead view of a black bowl of penne with arrabiata sauce.",
};

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
    image: {
      src: "https://www.seriouseats.com/thmb/LOty0FvVpvLbgeXiRV8vu68dLV0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__02__20160211-pasta-arrabiata-vicky-wasik-001-91dc57bd9151441c8dea1e976de54ca2.jpg",
      caption: "Credit Serious Eats / Vicky Wasik",
    },
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 3,
    directionText:
      "Add tomatoes, stir to combine, and bring to a bare simmer. When pasta is ready, transfer it to sauce using a strainer or slotted spoon. (Alternatively, drain pasta through a colander, reserving 1 cup of cooking water. Add drained pasta to sauce.)",
    image: {
      src: "https://www.seriouseats.com/thmb/eVIOtLvsXg1zyYB4FCVKxIswLzA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__02__20160211-pasta-arrabiata-vicky-wasik-002-433c059de5604b7a9b1a68d266edda65.jpg",
      caption: "Credit Serious Eats / Vicky Wasik",
    },
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 4,
    directionText:
      "Add about 1/4 cup pasta water to sauce and increase heat to bring pasta and sauce to a vigorous simmer. Cook, stirring and shaking the pan and adding more pasta water as necessary to keep sauce loose, until pasta is perfectly al dente, 1 to 2 minutes longer. (The pasta will cook more slowly in the sauce than it did in the water.)",
    image: {
      src: "https://www.seriouseats.com/thmb/XarKNk4fZMH8etiB3uA0dm15_Ys=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__02__20160211-pasta-arrabiata-collage-vicky-wasik-011-679690c9d5f54020902189a51e1fe54f.jpg",
      caption: "Credit Serious Eats / Vicky Wasik",
    },
  },
  {
    recipeId: 1,
    subheading: 1,
    displayOrder: 5,
    directionText:
      "Continue cooking pasta until sauce thickens and begins to coat noodles, then remove from heat and toss in cheese and parsley, stirring vigorously to incorporate. Stir in a drizzle of fresh olive oil, if desired. Season with salt and serve right away, passing more cheese at the table.",
  },
];
