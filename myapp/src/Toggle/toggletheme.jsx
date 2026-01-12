import { useState } from "react";
import "./App.css";

function ToggleTheme() {
  const [theme, setTheme] = useState("");

  return (
    <div className={theme}>
      <button onClick={() => setTheme("dark")}>ON</button>
      <button onClick={() => setTheme("lite")}>OFF</button>
    </div>
  );
}

export default ToggleTheme;