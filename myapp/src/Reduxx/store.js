import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduxx/counterSlice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
});