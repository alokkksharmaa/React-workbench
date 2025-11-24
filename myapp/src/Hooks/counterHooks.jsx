import React, { useState } from "react";

const CounterHooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p className="para">You have clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default CounterHooks;
