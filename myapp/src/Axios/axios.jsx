import React , {useEffect} from "react";
import axios from "axios";

const Axios = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
export default Axios;