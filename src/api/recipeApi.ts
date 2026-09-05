import type { Recipe } from "../types/recipe/Recipe";
import { apiSlice } from "./apiSlice";

const recipeApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRecipe: build.query<Recipe, string>({
      query: (recipeId: string) => `http://127.0.0.1:5500/recipe/${recipeId}`,
      // providesTags: ['Recipe']
    }),
  }),
});

export const { useGetRecipeQuery } = recipeApi;
