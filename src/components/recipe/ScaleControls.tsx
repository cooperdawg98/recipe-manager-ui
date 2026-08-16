import { useState } from "react";
import GeneralSlider from "../GeneralSlider";
// import SliderTrackTicks from "../SliderTrackTicks";

type ScaleControlsProps = {
  onScaleChange: (scale: number) => void;
};

const ScaleControls = ({ onScaleChange }: ScaleControlsProps) => {
  const scaleValues = [0.25, 0.5, 1, 2, 4];
  const [index, setIndex] = useState(2);

  const handleChange = (value: number | readonly number[]) => {
    if (typeof value === "number") {
      setIndex(value);
      onScaleChange(scaleValues[value]);
    }
  };

  const handleValuesLabel = () => {
    const labelValue =
      scaleValues[index] === 0.25
        ? "1/4"
        : scaleValues[index] === 0.5
          ? "1/2"
          : scaleValues[index];
    return <span>x{labelValue}</span>;
  };

  return (
    <GeneralSlider
      min={0}
      max={scaleValues.length - 1}
      value={index}
      onValueChange={handleChange}
      defaultValue={2}
      // enableValueLabel
      handleValuesLabel={handleValuesLabel}
      // trackProps={{ render: <SliderTrackTicks /> }}
    />
  );
};

export default ScaleControls;
