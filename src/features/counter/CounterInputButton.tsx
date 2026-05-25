import { Button, Input } from "@mui/joy";
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
    <Button onClick={() => handlePress(changeAmount)}>{label}</Button>
  );

  return (
    <Input
      value={changeAmount}
      onChange={handleChange}
      endDecorator={endButton}
    />
  );
};
