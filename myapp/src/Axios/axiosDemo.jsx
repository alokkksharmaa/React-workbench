import axios from "axios";

export default function AxiosDemo() {
  axios
    .get("https://api.example.com/users")
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

// post request
axios.post('https://api.example.com/users',{
  name: "Alok",
  email: "Email",
});
