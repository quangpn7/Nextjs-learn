import { createSlice } from "@reduxjs/toolkit";

export type toDoReducerType = {
  todos: any[];
};
const initialState: toDoReducerType = {
  todos: [],
};

const toDoReducer = createSlice({
  name: "rootToDo",
  initialState,
  reducers: {
    fetchToDo: (state, { payload }) => {
      state.todos = payload;
    },
  },
});

export const {} = toDoReducer.actions;

export default toDoReducer.reducer;
