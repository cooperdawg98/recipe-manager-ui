export type RecipeSource = {
  label: string;
  url?: string;
};

// export enum SourceType {
//   Presenter = "PRESENTER",
//   Origin = "ORIGIN",
// };

export const SourceType = {
  Presenter: "PRESENTER",
  Origin: "ORIGIN",
} as const;
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
