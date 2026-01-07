// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// JS version exports
export const RootState = store.getState;
export const AppDispatch = store.dispatch;
