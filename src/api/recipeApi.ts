import type { Recipe } from "../types/recipe/Recipe";
import { apiSlice } from "./apiSlice";

const recipeApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRecipePage: build.query<Recipe, string>({
      query: (recipeId: string) => `http://127.0.0.1:5500/recipe/${recipeId}`,
      // providesTags: ['Recipe']
      transformResponse: (response: Recipe) => {
        return {
          ...response,
          recipeInfo: {
            ...response.recipeInfo,
            addedDate: new Date(response.recipeInfo.addedDate),
            updatedDate: new Date(response.recipeInfo.updatedDate),
          },
        };
      },
    }),
  }),
});

export const { useGetRecipePageQuery } = recipeApi;
