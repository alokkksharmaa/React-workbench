import { useState } from "react";

function LiveText() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {text}
      </p>
    </div>
  );
}

export default LiveText;
