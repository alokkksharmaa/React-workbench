import React, { useState } from "react";

function Statess() {
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit((e) => (e === "Banana" ? "Apple" : "Banana"));
  };

  return (
    <div>
      <p>States in React</p>
      <h1>{fruit}</h1>
      <button onMouseOver={handleFruit}>Change Fruit</button>
    </div>
  );
}
export default Statess;
