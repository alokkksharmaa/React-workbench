import React, { useRef } from "react";
const Hook8 = () => {
  const inputRef = useRef(null);
  const method = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />  
      <button onClick={method}>Focus the input</button>
    </div>
  );
};
export default Hook8;
