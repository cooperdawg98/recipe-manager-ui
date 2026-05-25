import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type counterType } from "./counterType";

// Define a type for the slice state
export interface CounterState {
  value: number;
  counterType: counterType;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  counterType: "default",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleCounterType: (state) => {
      state.counterType =
        state.counterType === "default" ? "custom" : "default";
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  toggleCounterType,
} = counterSlice.actions;

export default counterSlice.reducer;
