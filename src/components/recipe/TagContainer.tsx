import type { RecipeTag } from "../../types/recipe/RecipeTag";
import TagItem from "./TagItem";

type TagContainerProps = {
  tags: RecipeTag[];
};

const TagContainer = ({ tags }: TagContainerProps) => {
  return (
    <div>
      {tags.length ? (
        <div className="flex flex-wrap gap-x-2 gap-y-1 max-w-100">
          <span className="px-2 text-lg font-semibold">Explore more:</span>
          {tags.map((t) => (
            <TagItem label={t.label} link={t.link} />
          ))}
        </div>
      ) : (
        // TODO: Turn this empty state into a button to add a tag
        <span className="px-2 text-lg font-semibold">
          This recipe doesn't have any tags.
        </span>
      )}
    </div>
  );
};

export default TagContainer;
