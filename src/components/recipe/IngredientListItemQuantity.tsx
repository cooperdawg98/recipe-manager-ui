import { useMemo } from "react";
import type { IngredientQuantity } from "../../types/recipe/Ingredient";
import { improperToMixedFraction } from "../../utils/improperToMixedFraction";
import { canUnitBePlural } from "../../utils/canUnitBePlural";

type IngredientListItemQuantityProps = {
  ingredientQuantity: IngredientQuantity;
  scalerValue: number;
  isAlternate?: boolean;
};

const IngredientListItemQuantity = ({
  ingredientQuantity,
  scalerValue,
  isAlternate = false,
}: IngredientListItemQuantityProps) => {
  const quantity = useMemo(() => {
    /*TODO:
      Give numbers a style if being scaled
      scale doesn't handle less than 1 or non-whole numbers
      float vs fraction edge cases -> do we limit the fractions a user can enter? Or handle all cases?
    */
    const numerator = ingredientQuantity.numerator * scalerValue;
    const denominator = ingredientQuantity.denominator;

    if (denominator === 1) {
      return { formatted: `${numerator}`, numeric: numerator };
    } else {
      return improperToMixedFraction(numerator, denominator);
    }
  }, [ingredientQuantity, scalerValue]);

  return (
    <div className="flex flex-row gap-1">
      {isAlternate && "("}
      <span id="ingredient quantity">{quantity.formatted}</span>
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
