import { useState } from "react";

function FlipText() {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{showFirst ? "Alok" : "Sharma"}</h2>

      <button
        onClick={() => setShowFirst(!showFirst)}
        style={{ padding: "10px", marginTop: "10px" }}
      >
        Flip
      </button>
    </div>
  );
}

export default FlipText;
