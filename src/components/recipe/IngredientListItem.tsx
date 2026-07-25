import type { Ingredient } from "../../types/recipe/Ingredient";
import IngredientListItemQuantity from "./IngredientListItemQuantity";

type IngredientListItemProps = {
  ingredient: Ingredient;
  scale: number;
};

const IngredientListItem = ({ ingredient, scale }: IngredientListItemProps) => {
  const ingredientQuantities = ingredient.quantity ?? [];

  return (
    <li id="ingredient list item" className="flex flex-row gap-1">
      {ingredientQuantities.map((q, idx) => (
        <IngredientListItemQuantity
          key={idx}
          ingredientQuantity={q}
          scalerValue={scale}
          isAlternate={idx > 0}
        />
      ))}
      <span>{ingredient.label}</span>
    </li>
  );
};

export default IngredientListItem;
