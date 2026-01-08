// myapp/src/app.jsx

import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/counter/counterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrement] = useState("2");

  return (
    <div className="min-h-screen text-center m-5">
      <h1>Redux Toolkit Counter Demo</h1>
      <h2>Current Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrement(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
