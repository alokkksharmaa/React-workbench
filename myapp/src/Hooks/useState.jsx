import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="content-between flex-auto ">
      <h1>{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="max-v-screen text-wrap bg-brown">
        Click to increase count
      </button>
    </div>
  );
}
