export type IngredientQuantity = {
  numerator: number;
  denominator: number;
  unit?: string;
};

export type Ingredient = {
  recipeId: number;
  subheading: number;
  displayOrder: number;
  label: string;
  quantity?: IngredientQuantity[];
};
