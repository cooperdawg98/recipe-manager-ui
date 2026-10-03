import { useMemo } from "react";
import type { Ingredient } from "../../types/recipe/Ingredient";
import type { Subheading } from "../../types/recipe/Subheading";
import IngredientListItem from "./IngredientListItem";

type IngredientContainerProps = {
  ingredients: Ingredient[];
  subheadings: Subheading[];
  scale: number;
};

const IngredientContainer = ({
  ingredients,
  subheadings,
  scale,
}: IngredientContainerProps) => {
  const subheadingIds = subheadings.map((s) => s.id).sort((a, b) => a - b);
  const maximumSubheading = Math.max(...subheadingIds);

  // Organizes the ingredients by subheading
  const ingredientsBySubheading = useMemo(() => {
    const hasSubheadingLabel: Ingredient[][] = [];
    let hasNoSubheadingLabel: Ingredient[] = [];

    subheadingIds.forEach((id) => {
      hasSubheadingLabel.push(ingredients.filter((i) => i.subheading === id));
    });

    hasNoSubheadingLabel = ingredients.filter(
      (i) => !subheadingIds.some((s) => i.subheading === s)
    );

    // Adds additional "misc" entry if there are ingredients without a matching subheading
    if (hasNoSubheadingLabel.length === 0) {
      return hasSubheadingLabel;
    } else {
      return [...hasSubheadingLabel, hasNoSubheadingLabel];
    }
  }, [ingredients, subheadingIds]);

  return (
    <div id="ingredients" className="flex flex-col w-full gap-2">
      <div className="bg-verdigris-200 rounded-md w-1/2 pl-2 border-l-4 border-verdigris-500">
        <h2>Ingredients</h2>
      </div>
      <ul
        id="ingredients list"
        className="list-disc list-inside space-y-1 marker:text-verdigris-800 marker:text-xl"
      >
        {subheadingIds.map((subheadingId) => (
          <div key={subheadingId} className="space-y-1">
            {subheadings.some((s) => s.id === subheadingId) && (
              <span className="pt-2 text-xl font-semibold">
                {subheadings.find((s) => s.id === subheadingId)?.label}
              </span>
            )}
            {ingredientsBySubheading[subheadingId - 1]?.map((i, idx) => (
              <IngredientListItem key={idx} ingredient={i} scale={scale} />
            ))}
          </div>
        ))}
        {ingredientsBySubheading.length > maximumSubheading && (
          <span className="pt-2 text-xl font-semibold">Misc</span>
        )}
        {ingredientsBySubheading[maximumSubheading]?.map((i, idx) => (
          <IngredientListItem key={idx} ingredient={i} scale={scale} />
        ))}
      </ul>
    </div>
  );
};

export default IngredientContainer;
