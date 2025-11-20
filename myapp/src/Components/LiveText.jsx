import { useState } from "react";

function LiveText() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  function saveText() {
    if (text.trim() === "") return;
    setHistory([...history, text]);
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />

      <button onClick={saveText}>Save</button>

      <p>Live: {text}</p>

      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default LiveText;
