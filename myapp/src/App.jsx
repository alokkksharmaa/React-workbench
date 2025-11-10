import "./App.css";
import StudentDetail from "./Components/StudentDetail";

function App() {
  const obj1 = {
    name: "Alok",
    Regnumber: 1234212,
    Address: "Lpu",
    Number: 788544582,
  };

  const obj2 = {
    name: "Alok",
    Regnumber: 12343425,
    Address: "Lpu",
    Number: 8556655952,
  };


  return (

      <>
      <StudentDetail temp={obj1}/>

            <p>-----</p>

      <StudentDetail temp={obj2}/>
</>
  );
}

export default App;