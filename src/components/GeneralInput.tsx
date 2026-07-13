import { Input, type InputProps } from "@base-ui/react/input";

type GeneralInputProps = {
  label?: string;
} & InputProps;

const GeneralInput = ({ label, ...props }: GeneralInputProps) => {
  return (
    <label className="flex flex-col items-start gap-1 text-sm font-bold text-neutral-950 dark:text-white">
      {label}
      <Input
        className="h-8 w-40 border rounded-md border-slate-300 dark:border-white bg-white dark:bg-neutral-950 px-2 text-sm any-pointer-coarse:text-base font-normal text-neutral-950 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-sky-700 dark:focus:outline-white"
        {...props}
      />
    </label>
  );
};

export default GeneralInput;
