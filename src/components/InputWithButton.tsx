import { Input, type InputProps } from "@base-ui/react/input";
import type React from "react";

type InputWithButtonProps = {
  endAdornmentButton: React.JSX.Element;
  label?: string;
} & InputProps;

const InputWithButton = ({
  label,
  endAdornmentButton,
  ref,
  ...props
}: InputWithButtonProps) => {
  return (
    // BUG: Focus occurs on child input, so focus styling on div doesn't occur
    // BUG: End button has a focus outline when its not supposed to
    <div
      className={
        "flex items-center py-1 h-12 w-full border rounded-md border-slate-300 bg-white px-2 text-sm any-pointer-coarse:text-base font-normal text-neutral-950 placeholder:text-neutral-500 focus:outline-2 focus:-outline-offset-1 focus:outline-sky-700"
      }
    >
      {/* Start Adornment */}
      {/* <span className={styles.prefix}>$</span> */}

      <Input
        ref={ref}
        className={"border-none outline-none bg-transparent flex-1 p-1"}
        {...props}
      />

      {/* End Adornment */}
      {endAdornmentButton}
      {/* <button className={styles.suffixButton}>
        Clear
      </button> */}
    </div>
  );
};

export default InputWithButton;

// .suffixButton {
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: #999;
// }
