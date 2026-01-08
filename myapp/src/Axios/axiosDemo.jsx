import axios from "axios";
import { useState } from "react";

export default function axiosDemo() {
  const [output, setOutput] = useState("");

  const getUser = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setOutput(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setOutput(err.message);
    }
  };

  const setUser = async () => {
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/users",{
        name:"Alok",
        email: "test@gmai.com",
      });
      setOutput(JSON.stringify(res.data, null, 2));
    }
    catch(err){
      setOutput(err.message); 
    }
  };

  return (
    <div>
      <button onClick={getUser}>Get user </button>
      <button onClick={setUser} > Set User</button>
    </div>
  );
}
