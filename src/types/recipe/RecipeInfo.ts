import type { RecipeSource } from "./RecipeSource";

export type RecipeInfo = {
  recipeId: string; // this is the recipe identifier string from db
  title: string;
  source: RecipeSource; // General source (website home, bookshop.org link)
  submitter: RecipeSource;
  totalTime: number; // minutes
  prepTime: number; // minutes
  cookTime: number; // minutes
  serves: number;
  link?: RecipeSource; // Direct link
  addedDate: Date;
  updatedDate: Date;
};
