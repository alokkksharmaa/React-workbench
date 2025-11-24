import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState("0");
  // const [name, setName] =  useState("Aman");

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(count);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => Increment}>Increment Button</button>
      <button onClick={() => Decrement}> </button>
      <button onClick={() => Reset}> </button>
    </div>
  );
}

export default Counter;
