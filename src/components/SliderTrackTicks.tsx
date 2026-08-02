import { Slider } from "@base-ui/react";

const SliderTrackTicks = () => {
  // Currently not working
  return (
    <div className="h-1 w-full bg-neutral-200 select-none dark:bg-neutral-800">
      <Slider.Indicator className="bg-blue-500 select-none dark:bg-white" />
      <Slider.Thumb
        aria-label="Volume"
        className="size-4 border border-neutral-950 bg-white select-none has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-neutral-950"
      />
    </div>
  );
};

export default SliderTrackTicks;
