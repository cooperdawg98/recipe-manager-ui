import { SourceType, type RecipeSource } from "../../types/recipe/RecipeSource";
import ExternalLink from "../ExternalLink";

type RecipeSourceLabelProps = {
  source: RecipeSource;
  sourceType: SourceType;
};

const RecipeSourceLabel = ({ source, sourceType }: RecipeSourceLabelProps) => {
  let label;
  switch (sourceType) {
    case SourceType.Presenter:
      label = "Presented By";
      break;
    case SourceType.Origin:
      label = "Originally from";
      break;
  }

  return (
    <div className="flex flex-col items-center min-w-27.5">
      <span className="font-medium">{label}</span>
      <ExternalLink url={source.url ?? ""}>
        <span className="text-verdigris-700 hover:text-verdigris-800 underline hover:decoration-2 hover:font-bold">
          {source.label}
        </span>
      </ExternalLink>
    </div>
  );
};

export default RecipeSourceLabel;
