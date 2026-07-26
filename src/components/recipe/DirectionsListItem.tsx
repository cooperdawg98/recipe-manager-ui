import type { Direction } from "../../types/recipe/Direction";

type DirectionsListItemProps = {
  directionStep: Direction;
};

const DirectionsListItem = ({ directionStep }: DirectionsListItemProps) => {
  return (
    <li
      data-before={`Step ${directionStep.displayOrder}:`}
      className="pb-4 before:content-[attr(data-before)] before:block before:font-bold"
    >
      {directionStep.directionText}
    </li>
  );
};

export default DirectionsListItem;
