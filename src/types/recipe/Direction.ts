import type { ImageType } from "../ImageType";

export type Direction = {
  recipeId: string;
  subheading: number;
  displayOrder: number;
  directionText: string;
  image?: ImageType;
};
