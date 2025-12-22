import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./Redux/App";
import Abc from "./Redux/Abc";
import Xyz from "./Redux/xyz";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Abc />
      <Xyz />
    </Provider>
  </React.StrictMode>
);
