import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice/createSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
