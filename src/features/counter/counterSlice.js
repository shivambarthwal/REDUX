import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value -= 56;
    },

    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementbyAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementbyAmount, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
