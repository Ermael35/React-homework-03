import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todo";
import comments from "../modules/comments"

const store = configureStore({
  reducer: {
    todos:todos,
    comments: comments.reducer
  }
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import todos from "../modules/todo";

// const store = configureStore({
//   reducer: {
//     todos: todos.reducer,
//   },
// });

// export default store;
