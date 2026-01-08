import React, { useEffect } from "react";
import axios from "axios";

const Axios = () => {
  async function getUsers() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      console.res(res.err);
    } catch (error) {
      console.res(res.err);
    }
  }
};

export default Axios;
