import React from 'react';

function Button(){
  function Mouse(){
    alert("Mouse has hovered over the text");
  }
  return(
  <>
  <button onMouseOver={Mouse}> Button!!</button>
  </>
)};

export default Button;