import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: [
    // {
    //   id: 0,
    //   writer: "",
    //   title: "",
    //   body: "",
    // },
  ],

  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    deleteTodo(state, action) {
      let index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todos.actions;
export default todos;
