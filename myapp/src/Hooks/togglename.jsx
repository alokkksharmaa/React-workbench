import React, {useState} from "react";

function  Togglenname(){
  const [name, UpdateName] =  useState("Aman");

  const handleName = () => {
    UpdateName((e) => (e == "Aman"? "Alok" : "Aman"));
  }
  return(
    <>
    <h1 >Toggle Name</h1>
    <p>{name}</p>
    <button onClick={handleName}>Click to change name</button>
    </>
  )
}

export default Togglenname;