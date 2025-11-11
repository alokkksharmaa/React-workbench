function Login() {
  function SubmitApp() {
    alert("Form Submitted");
  }
  return (
    <>
      <form>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          id="UID"
          placeholder="Enter Your Name"
        />
        <br />

        <label>Password: </label>
        <input
          type="password"
          name="pass"
          id="password"
          placeholder="Enter Your Password"
        />
        <br />

        <button type="submit" onClick={SubmitApp}>Submit </button>
      </form>
    </>
  );
}

export default Login;
