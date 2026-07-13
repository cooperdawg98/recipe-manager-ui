import { Switch, type SwitchRootProps } from "@base-ui/react/switch";

const GeneralSwitch = ({ ...props }: SwitchRootProps) => {
  return (
    <Switch.Root
      defaultChecked
      {...props}
      className="flex h-5 w-9 shrink-0 border rounded-sm border-sky-700 bg-white p-0.5 transition-colors duration-150 ease-[ease] dark:border-white dark:bg-neutral-950 data-checked:bg-sky-700 dark:data-checked:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:focus-visible:outline-white"
    >
      <Switch.Thumb className="size-3.5 bg-sky-700 rounded-sm transition-[translate,background-color] duration-150 ease-[ease] data-checked:translate-x-4 data-checked:bg-white dark:bg-white dark:data-checked:bg-neutral-950" />
    </Switch.Root>
  );
};
export default GeneralSwitch;
