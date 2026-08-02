import { useState } from "react";
import CaptionedImage from "../../components/CaptionedImage";
import DirectionsListItem from "../../components/recipe/DirectionsListItem";
import IngredientListItem from "../../components/recipe/IngredientListItem";
import RecipeSourceLabel from "../../components/recipe/RecipeSourceLabel";
import ScaleControls from "../../components/recipe/ScaleControls";
import TimeEstimateCard from "../../components/recipe/TimeEstimateCard";
import { SourceType } from "../../types/recipe/RecipeSource";
import {
  directions,
  headerImage,
  ingredients,
  recipeEntry,
} from "./mockRecipe";

const recipePage = () => {
  const [scale, setScale] = useState(1);

  const handleScaleChange = (newScaleValue: number) => {
    setScale(newScaleValue);
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center px-4 py-4">
      <div id="header" className="flex flex-col w-full gap-4 pb-4">
        <h1 id="title">{recipeEntry.title}</h1>
        <p>
          This simple pasta dish is made with a sauce that's spicy enough to
          earn its "angry" moniker.
        </p>
        <div className="flex flex-row w-full justify-around bg-deep-saffron-300 rounded-md py-2">
          <RecipeSourceLabel
            source={recipeEntry.submitter}
            sourceType={SourceType.Presenter}
          />
          <RecipeSourceLabel
            source={recipeEntry.link ?? recipeEntry.source}
            sourceType={SourceType.Origin}
          />
        </div>
        {/* TODO: Add tags bar with links */}
        <div id="header image">
          <CaptionedImage width={1500} height={1125} image={headerImage} />
        </div>
      </div>
      <TimeEstimateCard
        totalTime={recipeEntry.totalTime}
        prepTime={recipeEntry.prepTime}
        cookTime={recipeEntry.cookTime}
        serves={recipeEntry.serves}
      />
      {/* TODO: Add highlights section */}
      {/* TODO: Add notes section */}
      {/* TODO: Add scaler input */}
      <ScaleControls onScaleChange={handleScaleChange} />
      {/* TODO: Make ingredients respect subheading and display order db values */}
      {/* TODO: Apply ingredient subheading labels */}
      <div className="flex flex-col w-full gap-6 pt-6">
        <div id="ingredients" className="flex flex-col w-full gap-2">
          <div className="bg-verdigris-200 rounded-md w-1/2 pl-2 border-l-4 border-verdigris-500">
            <h2>Ingredients</h2>
          </div>
          <ul
            id="ingredients list"
            className="list-disc list-inside space-y-1 marker:text-verdigris-800 marker:text-xl"
          >
            {ingredients.map((i, idx) => (
              <IngredientListItem key={idx} ingredient={i} scale={scale} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="bg-verdigris-200 rounded-md w-3/4 pl-2 border-l-4 border-verdigris-500">
            <h2>Directions</h2>
          </div>
          <ol className="flex flex-col w-full gap-1">
            {directions.map((i, idx) => (
              <DirectionsListItem key={idx} directionStep={i} />
            ))}
          </ol>
        </div>
      </div>
      {/* TODO: Apply comments */}
    </div>
  );
};

export default recipePage;
