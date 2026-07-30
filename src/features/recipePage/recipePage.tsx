import CaptionedImage from "../../components/CaptionedImage";
import DirectionsListItem from "../../components/recipe/DirectionsListItem";
import IngredientListItem from "../../components/recipe/IngredientListItem";
import RecipeSourceItem from "../../components/recipe/RecipeSourceItem";
import { SourceType } from "../../types/recipe/RecipeSource";
import {
  directions,
  headerImage,
  ingredients,
  presenterField,
  sourceField,
} from "./mockRecipe";

const recipePage = () => {
  // TODO: Make scale a slice variable
  const scale = 2;

  return (
    <div className="flex flex-col w-full h-full justify-center items-center px-4 py-4">
      <div id="header" className="flex flex-col w-full gap-4 pb-4">
        <h1 id="title">Penne With Hot-as-You-Dare Arrabbiata Sauce Recipe</h1>
        <p>
          This simple pasta dish is made with a sauce that's spicy enough to
          earn its "angry" moniker.
        </p>
        <div className="flex flex-row w-full justify-around bg-deep-saffron-300 rounded-md py-2">
          <RecipeSourceItem
            source={presenterField}
            sourceType={SourceType.Presenter}
          />
          <RecipeSourceItem
            source={sourceField}
            sourceType={SourceType.Origin}
          />
        </div>
        {/* TODO: Add tags bar with links */}
        <div id="header image">
          <CaptionedImage width={1500} height={1125} image={headerImage} />
        </div>
      </div>
      {/* TODO: Add highlights section */}
      {/* TODO: Add notes section */}
      {/* TODO: Add scaler input */}
      {/* TODO: Make ingredients respect subheading and display order db values */}
      {/* TODO: Apply ingredient subheadings */}
      <div id="ingredients" className="flex flex-col w-full gap-2">
        <h2>Ingredients</h2>
        <ul id="ingredients list" className="flex flex-col w-full gap-1">
          {ingredients.map((i, idx) => (
            <IngredientListItem key={idx} ingredient={i} scale={scale} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full gap-2 pt-2">
        <h2>Directions</h2>
        <ol className="flex flex-col w-full gap-1">
          {directions.map((i, idx) => (
            <DirectionsListItem key={idx} directionStep={i} />
          ))}
        </ol>
      </div>
      {/* TODO: Apply directions images */}
      {/* TODO: Apply comments */}
    </div>
  );
};

export default recipePage;
