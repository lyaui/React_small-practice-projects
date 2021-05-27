import { createSlice } from '@reduxjs/toolkit';

const INIT_COUNTER_STATE = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: INIT_COUNTER_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
