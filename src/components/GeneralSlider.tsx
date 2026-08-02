import {
  Slider,
  type SliderRootProps,
  type SliderTrackProps,
} from "@base-ui/react/slider";

type GeneralSliderProps = {
  enableValueLabel?: boolean;
  handleValuesLabel?: (
    formattedValues: readonly string[],
    values: readonly number[]
  ) => React.ReactNode;
  trackProps?: SliderTrackProps;
} & SliderRootProps;

const GeneralSlider = ({
  enableValueLabel = false,
  handleValuesLabel,
  trackProps,
  ...props
}: GeneralSliderProps) => {
  return (
    <Slider.Root {...props}>
      <Slider.Control className="flex w-56 touch-none items-center py-3 select-none">
        <Slider.Track
          {...trackProps}
          className="h-1 w-full bg-neutral-200 select-none dark:bg-neutral-800"
        >
          <Slider.Indicator className="bg-neutral-950 select-none dark:bg-white" />
          <Slider.Thumb
            aria-label="Volume"
            className="size-4 border border-neutral-950 bg-white select-none has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-neutral-950"
          />
        </Slider.Track>
      </Slider.Control>
      {enableValueLabel && <Slider.Value>{handleValuesLabel}</Slider.Value>}
    </Slider.Root>
  );
};

export default GeneralSlider;
