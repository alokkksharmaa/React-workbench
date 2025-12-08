import React, { useRef } from 'react';
function UncontrolForm1() {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
          alert('Submitted name: ' + inputRef.current.value);
  };  
  return (
    <form onSubmit={handleSubmit}>
        <label>User</label>
      <input type="text" ref={inputRef} /><br></br>
      <label>Password</label>
      <input type="password" ref={inputRef} /><br></br>
      <label>Address</label>
      <textarea type="text" ref={inputRef} /><br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
export default UncontrolForm1