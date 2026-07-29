import type { ImageType } from "../ImageType";

export type Direction = {
  recipeId: number;
  subheading: number;
  displayOrder: number;
  directionText: string;
  image?: ImageType;
};
