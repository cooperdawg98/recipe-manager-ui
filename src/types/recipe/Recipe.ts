import type { ImageType } from "../ImageType";
import type { BulletedInfo } from "./BulletedInfo";
import type { Direction } from "./Direction";
import type { Ingredient } from "./Ingredient";
import type { RecipeInfo } from "./RecipeInfo";
import type { RecipeTag } from "./RecipeTag";

export type Recipe = {
  recipeInfo: RecipeInfo;
  headerImage: ImageType;
  highlights: BulletedInfo[];
  notes: BulletedInfo;
  ingredients: Ingredient[];
  directions: Direction[];
  tags?: RecipeTag[];
};
