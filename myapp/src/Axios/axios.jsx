import axios from "axios";

export default async function Axios(){
    try {
      const response = await axios.get("https://api.example.com/data");
      console.log(response.data);
    } catch (err) {
      console.log("the server ghosted You: ", error.massage);
    }
};

