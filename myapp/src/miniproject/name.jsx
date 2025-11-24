import React, { useState } from "react";
const Counter = () => {
   const [count, setCount] = useState(0); 
   const [name,setName] =useState("Aman kumar");
    return (
    <div>
        <h1>Name: {name}</h1>
    <p>Count Value: {count}</p>
      <button onClick={() => {setCount(count+1);} }>Increase</button>
      <button onClick={() => {setCount(count-1);} }>Decrease</button>
      <button onClick={() => {setCount(0);}}>Reset</button>
      <button onClick={() => {setName("Ravi Kumar");}}>Reset1</button>
         </div>
  );
};
export default Counter;