import { useState, type ChangeEvent } from "react";
import InputWithButton from "../../components/InputWithButton";
import { Button } from "@base-ui/react/button";

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
    <Button
      onClick={() => handlePress(changeAmount)}
      className="w-26.5 flex justify-center bg-sky-700! text-white"
    >
      {label}
    </Button>
  );

  return (
    <InputWithButton
      endAdornmentButton={endButton}
      value={changeAmount}
      onChange={handleChange}
    />
  );
};
