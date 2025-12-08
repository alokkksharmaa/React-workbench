import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name);
  };
  return (
    <form>
      <label>First Name:</label>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br></br>
      <label>Last Name:</label>
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <br></br>
      <label>Email:</label>
      <input name="email" value={formData.email} onChange={handleChange} />
      <br></br>
      <label>Address:</label>
      <input name="address" value={formData.address} onChange={handleChange} />
      <br></br>
      <input type="submit" />
    </form>
  );
}
export default MyForm;
