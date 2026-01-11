import { useEffect, useState } from "react";

function App () {
  const [num, setNum] = useState(0);


  useEffect(() => {
    setNum(s => s + 1);
  }, 1000)
  return (
    <>
    <p>Num</p>
    <button onClick={ () => setNum(num + 1)} >Increment </button>
    <button onClick={ () => setNum(num - 1)} >Decrement </button>
    </>
  )
};

export default App;