import React, { useState } from "react";

function App() {
  const [company, setCompany] = useState("Apple");
  const [device, setDevice] = useState("iPhone 15");
  const [theme, setTheme] = useState("Black");
  const [year, setYear] = useState("2024");

  const handleCompany = () => {
    setCompany((prev) => (prev === "Apple" ? "Samsung" : "Apple"));
  };

  const handleDevice = () => {
    setDevice((prev) => (prev === "iPhone 15" ? "S24 Ultra" : "iPhone 15"));
  };

  const handleTheme = () => {
    setTheme((prev) => (prev === "Black" ? "Titanium" : "Black"));
  };

  const handleYear = () => {
    setYear("2024");
  };

  const handleAll = () => {
    handleTheme();
    handleDevice();
    handleYear();
  };

  return (
    <>
      <h1 onMouseOver={handleCompany}>
        The company of the phone is {company}
      </h1>

      <p onMouseOver={handleAll}>
        It has a {theme} theme, the device is {device}, released in {year}
      </p>
    </>
  );
}

export default App;
