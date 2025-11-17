import "./App.css";
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
