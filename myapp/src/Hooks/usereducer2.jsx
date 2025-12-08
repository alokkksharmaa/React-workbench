import React, { useState, useMemo } from 'react';

function Calculating(num) {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) // Simulate a heavy task
  return num * 2;
}

function Hook6() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const doubledCount = useMemo(() => {
    return Calculating(count);
  }, [count]);

  return (
    <div>
      <h1>useMemo Example</h1>

      <p>Count: {count}</p>
      <p>Expensive calculation result (doubled count): {doubledCount}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
      />

      <p>Typed text: {inputValue}</p>
    </div>
  );
}

export default Hook6;
