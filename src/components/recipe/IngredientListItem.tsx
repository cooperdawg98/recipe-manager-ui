import type { Ingredient } from "../../types/recipe/Ingredient";
import IngredientListItemQuantity from "./IngredientListItemQuantity";

type IngredientListItemProps = {
  ingredient: Ingredient;
  scale: number;
};

const IngredientListItem = ({ ingredient, scale }: IngredientListItemProps) => {
  const ingredientQuantities = ingredient.quantity ?? [];

  return (
    <li id="ingredient list item">
      <div className="inline-flex flex-row gap-1">
        {ingredientQuantities.map((q, idx) => (
          <IngredientListItemQuantity
            key={idx}
            ingredientQuantity={q}
            scale={scale}
            isAlternate={idx > 0}
          />
        ))}
        <span>{ingredient.label}</span>
      </div>
    </li>
  );
};

export default IngredientListItem;
