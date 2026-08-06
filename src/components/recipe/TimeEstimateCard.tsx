import { getScaleColor } from "../../utils/getScaleColor";

type TimeEstimateCardProps = {
  totalTime: number;
  prepTime: number;
  cookTime: number;
  serves: number;
  scale: number;
};

const TimeEstimateCard = ({
  totalTime,
  prepTime,
  cookTime,
  serves,
  scale,
}: TimeEstimateCardProps) => {
  let ingredientColor = getScaleColor(scale);
  if (scale !== 1) ingredientColor = ingredientColor + " font-semibold";
  const gridChildClass =
    "flex flex-col bg-mint-leaf-400 text-center rounded-md p-1 mx-2 my-1";
  return (
    <div className="grid grid-cols-2 w-full justify-around bg-mint-leaf-300 rounded-md py-2 max-w-100">
      <div className={gridChildClass}>
        <span className="font-bold text-lg">Prep Time</span>
        <span className="font-medium">{prepTime}</span>
      </div>
      <div className={gridChildClass}>
        <span className="font-bold text-lg">Cook Time</span>
        <span className="font-medium">{cookTime}</span>
      </div>
      <div className={gridChildClass}>
        <span className="font-bold text-lg">Total Time</span>
        <span className="font-medium">{totalTime}</span>
      </div>
      <div className={gridChildClass}>
        <span className="font-bold text-lg">Serves</span>
        <span className={"font-medium " + ingredientColor}>
          {serves * scale}
        </span>
      </div>
    </div>
  );
};

export default TimeEstimateCard;
