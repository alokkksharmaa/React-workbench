import { useState } from 'react'
import './App.css'
import LifeCycle from './LyfeCycle'
function App() {
  const [show, setShow] = useState(true);
    return (
    <>
<div style={{ padding: "20px" }}>
        <h1>React Lifecycle Example</h1>
      <button onClick={() => setShow(!show)}>
      {show ? "Unmount Component" : "Mount Component"}       </button>
       <hr />

      {show && <LifeCycle />}
     </div> 
    </>
  )
}
export default App