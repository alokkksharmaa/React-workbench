import { useEffect } from "react";
import React {useEffect,  use } from "react";


function App () {
  const [num, setNum] = useEffect(0);
  useEffect{ () => {
    alert("Clicked");
  }}
  return (
    <>
    <p>Num</p>
    <button onClick={ () => setNum(num + 1)} >Increment </button>
    <button onClick={ () => setNum(num - 1)} >Decrement </button>
    </>
  )
};

export default App;