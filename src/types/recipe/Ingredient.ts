export type IngredientQuantity = {
  numerator: number;
  denominator: number;
  unit?: string;
};

export type Ingredient = {
  recipeId: string;
  subheading: number;
  displayOrder: number;
  label: string;
  quantity?: IngredientQuantity[];
};
