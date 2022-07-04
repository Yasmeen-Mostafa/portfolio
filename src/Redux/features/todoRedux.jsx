import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.todo = state.todo.filter((e, index) => index !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
