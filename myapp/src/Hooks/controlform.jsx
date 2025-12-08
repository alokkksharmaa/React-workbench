import React, { useState } from 'react';
function ControlForm() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();  // Stop page reload
    if (email.trim() === ''||pass.trim() ==='') {
      alert('Email cannot be empty');
      return;
    }
    alert(`Form submitted with email: ${email} and Password ${pass}`);
      };
  return (
    <form onSubmit={handleSubmit}>
        <label>Email:</label>
      <input type="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"required/><br></br>
         <label>Password:</label>
      <input type="password" value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Enter your Password"required/><br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ControlForm