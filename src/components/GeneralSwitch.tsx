import { Switch, type SwitchRootProps } from "@base-ui/react/switch";

type GeneralSwitchProps = {
  isDarkEnabled?: boolean;
} & SwitchRootProps;

const GeneralSwitch = ({
  isDarkEnabled = false,
  ...props
}: GeneralSwitchProps) => {
  const darkStylingRoot = isDarkEnabled
    ? " dark:border-white dark:bg-neutral-950 dark:data-checked:bg-white dark:focus-visible:outline-white"
    : "";
  const darkStylingThumb = isDarkEnabled
    ? " dark:bg-white dark:data-checked:bg-neutral-950"
    : "";
  return (
    <Switch.Root
      defaultChecked
      {...props}
      className={
        "flex h-5 w-9 shrink-0 border rounded-sm border-sky-700 bg-white p-0.5 transition-colors duration-150 ease-[ease] data-checked:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950" +
        darkStylingRoot
      }
    >
      <Switch.Thumb
        className={
          "size-3.5 bg-sky-700 rounded-sm transition-[translate,background-color] duration-150 ease-[ease] data-checked:translate-x-4 data-checked:bg-white" +
          darkStylingThumb
        }
      />
    </Switch.Root>
  );
};
export default GeneralSwitch;
