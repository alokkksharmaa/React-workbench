import { useEffect } from "react";

function App(){

  // Variation 1 --  runs on every render

    // first --> side effect function
    // let's we call fetch api , db call
  

    // second -> cleaning up  function 
    // save from memory leaks, unmount component


   // 3rd array ->  comma separated  dependency list

   useEffect(() => {
    alert("I will run on each render"); 

   })
   
  
  return(
    <>

    <div>Hello </div>
    
    </>
)};

export default App;