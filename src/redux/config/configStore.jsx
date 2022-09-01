import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/comments";
import todos from "../modules/todo";

const store = configureStore({
  reducer: {
    todos: todos.reducer,
    comments: comments.reducer
  },
});

export default store;