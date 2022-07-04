import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoRedux";
const initialState = {
  counter: 0,
};
//each action create its own reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      //update state
      state.counter += 1;
    },
    decrement: (state) => {
      if (state.counter > 0) {
        state.counter -= 1;
      }
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { increment, decrement, setCounter } = counterSlice.actions;

export default counterSlice.reducer;

export const configStore = configureStore({
  reducer: {
    //check
    todo: todoReducer,
    counter: counterSlice.reducer,
  },
});
