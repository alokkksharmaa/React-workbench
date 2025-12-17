import React from "react";



export const Events = () => {
  function DoubleClick(){
    alert("Button is Clicked!!");
  }

  return (
    <div>
      <button onDoubleClick={DoubleClick}> Click Me</button>
    </div>
  )
}


export default Events;