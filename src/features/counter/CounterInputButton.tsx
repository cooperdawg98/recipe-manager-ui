import { Input } from "@mui/joy";
import { useState, type ChangeEvent } from "react";

type CounterInputButtonProps = {
  label: string;
  handlePress: (changeValue: number) => void;
};

export const CounterInputButton = ({
  label,
  handlePress,
}: CounterInputButtonProps) => {
  const [changeAmount, setChangeAmount] = useState<number>(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement> | undefined) => {
    if (!event) return;
    setChangeAmount(Number(event.target.value));
  };

  const endButton = (
    <button
      onClick={() => handlePress(changeAmount)}
      className="w-26.5 flex justify-center bg-blue-700! text-white"
    >
      {label}
    </button>
  );

  return (
    // TODO: replace with base ui input
    <Input
      value={changeAmount}
      onChange={handleChange}
      endDecorator={endButton}
    />
  );
};
