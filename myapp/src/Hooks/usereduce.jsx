import React, { useState, useCallback } from "react";
const Hook7 = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); 
  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  },  []);  
    const reset = useCallback(() => {
    setCount((prevCount) => prevCount = 0);
  },  []); 
  return (
    <div> <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <button onClick={reset}>Reset</button>
    </div>
  );   };
export default Hook7;