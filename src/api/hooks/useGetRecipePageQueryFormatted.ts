import type { Recipe } from "../../types/recipe/Recipe";
import { useGetRecipePageQuery } from "../recipeApi";

export function useGetRecipePageQueryFormatted(recipeId: string) {
  const { data } = useGetRecipePageQuery(recipeId);

  if (!data) return undefined;

  const recipeData: Recipe = {
    ...data,
    recipeInfo: {
      ...data.recipeInfo,
      addedDate: new Date(data.recipeInfo.addedDate),
      updatedDate: new Date(data.recipeInfo.updatedDate),
    },
  };

  return recipeData;
}
