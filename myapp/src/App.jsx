import "./App.css";
import React from "react";
import Greetings from "./Components/greetings";

function App() {
  const person = { name: "Alok Sharma" };
  return (
    <>
      <Greetings name={person.name}/>
    </>
  );
}

export default App;
