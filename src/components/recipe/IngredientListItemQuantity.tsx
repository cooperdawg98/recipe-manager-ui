import { useMemo } from "react";
import type { IngredientQuantity } from "../../types/recipe/Ingredient";
import { improperToMixedFraction } from "../../utils/improperToMixedFraction";
import { canUnitBePlural } from "../../utils/canUnitBePlural";
import { getScaleColor } from "../../utils/getScaleColor";

type IngredientListItemQuantityProps = {
  ingredientQuantity: IngredientQuantity;
  scale: number;
  isAlternate?: boolean;
};

const IngredientListItemQuantity = ({
  ingredientQuantity,
  scale,
  isAlternate = false,
}: IngredientListItemQuantityProps) => {
  const quantity = useMemo(() => {
    return improperToMixedFraction(
      ingredientQuantity.numerator,
      ingredientQuantity.denominator,
      scale
    );
  }, [ingredientQuantity, scale]);

  // Set ingredient label color and weight based on scale
  let ingredientColor = getScaleColor(scale);
  if (scale !== 1) ingredientColor = ingredientColor; // + " font-semibold";

  return (
    <div className="flex flex-row">
      {isAlternate && "("}
      <span id="ingredient quantity" className={ingredientColor + " pr-1"}>
        {quantity.formatted}
      </span>
      {ingredientQuantity.unit && (
        <span id="ingredient unit">
          {ingredientQuantity.unit}
          {canUnitBePlural(ingredientQuantity.unit) && quantity.numeric > 1
            ? "s"
            : ""}
        </span>
      )}
      {isAlternate && ")"}
    </div>
  );
};

export default IngredientListItemQuantity;
