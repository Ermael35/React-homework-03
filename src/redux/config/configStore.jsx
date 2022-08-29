import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todo";

const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
});

export default store;
