import { Box, Button, Stack, Switch, Typography } from "@mui/joy";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  toggleCounterType,
} from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CounterInputButton } from "./CounterInputButton";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const counterType = useAppSelector((state) => state.counter.counterType);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Typography fontSize="large" textColor={"primary.100"}>
        Counter total: {count}
      </Typography>
      <Switch onChange={() => dispatch(toggleCounterType())} />
      {counterType === "default" ? (
        <Stack paddingTop={"16px"} gap={"8px"}>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </Stack>
      ) : (
        <Stack paddingTop={"16px"} gap={"8px"}>
          <CounterInputButton
            label="Increment"
            handlePress={(changeValue) =>
              dispatch(incrementByAmount(changeValue))
            }/>
          <CounterInputButton
            label="Decrement"
            handlePress={(changeValue) =>
              dispatch(decrementByAmount(changeValue))
            }
          />
        </Stack>
      )}
    </Box>
  );
};

export default Counter;
