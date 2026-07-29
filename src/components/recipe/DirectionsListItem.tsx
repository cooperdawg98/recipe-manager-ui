import type { Direction } from "../../types/recipe/Direction";
import CaptionedImage from "../CaptionedImage";

type DirectionsListItemProps = {
  directionStep: Direction;
};

const DirectionsListItem = ({ directionStep }: DirectionsListItemProps) => {
  return (
    <li
      data-before={`Step ${directionStep.displayOrder}:`}
      className="pb-4 before:content-[attr(data-before)] before:block before:font-bold"
    >
      <div className="flex flex-col gap-2">
        <p>{directionStep.directionText}</p>
        {directionStep.image && (
          <div id={`direction-step-${directionStep.displayOrder}`}>
            <CaptionedImage
              width={1500}
              height={1125}
              image={directionStep.image}
            />
          </div>
        )}
      </div>
    </li>
  );
};

export default DirectionsListItem;
