import React, { useState } from "react";

function LoginForm() {
  // state for form data and errors
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // validate function
  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email";
    if (!formData.password) tempErrors.password = "PassWord is Required";
    else if (formData.password.length < 6)
      tempErrors.password = "password to short, make it atleast 6 digits";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; //True if no errors
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData); // Simulate API call
      // Reset form if needed: setFormData({ email: '', password: '' });
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style = {{color: "red"}}> {error.email}</p>}
      </div>
      <div>
        <label>Password: </label>
        <input type="password" name='password' value={formData.password} onChange={handleChange}/>
        {errors.password && <p style = {{color: 'red'}}>{errors.password}</p>}
      </div>
      <button type='submit'>Login</button>
    </form>
  );
}

export default LoginForm;
