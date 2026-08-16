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
  isDarkEnabled?: boolean;
} & SliderRootProps;

const GeneralSlider = ({
  enableValueLabel = false,
  handleValuesLabel,
  trackProps,
  isDarkEnabled = false,
  ...props
}: GeneralSliderProps) => {
  // TODO: Add optional tick marks
  const darkStylingTrack = isDarkEnabled ? " dark:bg-neutral-800" : "";
  const darkStylingIndicator = isDarkEnabled ? " dark:bg-white" : "";
  return (
    <Slider.Root {...props}>
      <Slider.Control className="flex w-56 touch-none items-center py-3 select-none">
        <Slider.Track
          {...trackProps}
          className={
            "h-1 w-full bg-cyan-200 select-none rounded-md" + darkStylingTrack
          }
        >
          <Slider.Indicator
            className={
              "bg-cyan-600 select-none rounded-md" + darkStylingIndicator
            }
          />
          <Slider.Thumb
            aria-label="Volume"
            className="size-4 border border-cyan-600 bg-cyan-200 select-none rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-cyan-800"
          />
        </Slider.Track>
      </Slider.Control>
      {enableValueLabel && <Slider.Value>{handleValuesLabel}</Slider.Value>}
    </Slider.Root>
  );
};

export default GeneralSlider;
