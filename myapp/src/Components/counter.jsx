import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(" ");

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Button</button>
    </div>
  );
};

export default Counter;
