// myapp/src/app.jsx

import React from "react";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { increment } from "./redux/slices/counter";
import MyComp from "./myComp";

export default function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count is {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
      </header>

      <MyComp />
    </div>
  );
}
