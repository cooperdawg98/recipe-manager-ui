import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  toggleCounterType,
} from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CounterInputButton } from "./CounterInputButton";
import GeneralSwitch from "../../components/GeneralSwitch";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const counterType = useAppSelector((state) => state.counter.counterType);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-center p-4 h-[160]">
      <div className="flex flex-row justify-between h-full">
        <span className="text-lg text-gray-600">Counter total: {count}</span>
        <GeneralSwitch onClick={() => dispatch(toggleCounterType())} />
      </div>
      {counterType === "default" ? (
        <div className="flex flex-col pt-4 gap-2">
          <button
            onClick={() => dispatch(increment())}
            className="bg-sky-700! text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-sky-700! text-white"
          >
            Decrement
          </button>
        </div>
      ) : (
        <div className="pt-4 gap-2">
          <CounterInputButton
            label="Increment"
            handlePress={(changeValue) =>
              dispatch(incrementByAmount(changeValue))
            }
          />
          <CounterInputButton
            label="Decrement"
            handlePress={(changeValue) =>
              dispatch(decrementByAmount(changeValue))
            }
          />
        </div>
      )}
    </div>
  );
};

export default Counter;
