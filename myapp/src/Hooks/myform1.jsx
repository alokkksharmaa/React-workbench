import React, { useRef } from "react";
function UnControlForm() {
  const x = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input value: ${x.current.value}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter a value 1:</label>
        <input type="text" ref={x} />
        <label>Enter a value 2:</label>
        <input type="text" ref={x} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default UnControlForm;
