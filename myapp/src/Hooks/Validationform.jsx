import React, { useState } from "react";
function ValidationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    add: "",
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    // Address validation
    if (!formData.add) {
      newErrors.add = "Address is required";
    } else if (formData.add.length < 46) {
      newErrors.add = "Address must be at least 46 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form is valid and submitted!");
      // Process form submission here
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} <br />
      <label>PassWord</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <br />
      <label>Address</label>
      <input
        type="text"
        name="add"
        value={formData.add}
        onChange={handleChange}
        placeholder="Address"
      />
      {errors.add && <p style={{ color: "red" }}>{errors.add}</p>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ValidationForm;
