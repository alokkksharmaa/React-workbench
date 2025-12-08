import React, { useState } from "react";
function MyForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name} and Age ${age}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />{" "}
      <br></br>
      <label>Age:</label>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default MyForm;
