import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
function App() {
  // Read value from Redux store
  const count = useSelector((state) => state.counter.value);
  // Dispatch actions
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter Example1</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}
export default App;
