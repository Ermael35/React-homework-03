import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import todos from "../modules/todosSlice";


const store = configureStore({
  reducer: {
    todos,
    user
  },
});

export default store;