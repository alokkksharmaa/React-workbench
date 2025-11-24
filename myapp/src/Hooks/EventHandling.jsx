// import "./App.css";
// import "./index.css";

// function App() {

//   function handleClick() {
//     alert("I am clicked");
//   }
//   function handleMouseHover() {
//     alert("Para ke upar mouse lekr aaye ho");
//   }
//   function handleInputChange(e) {
//     console.log("Input me value change hui hai!");
//     console.log("value till now: ", e.target.value);
//   }
//   function handleSubmit(e){
//     e.preventDefault();
//     // Iam writing my custom behaviour down
//     alert("Should I submit form??");
//   }

//   return (
//     <>
//       <div>
//         <p onMouseOver={handleMouseHover}
//         style={{ border: "1px solid Black" }}>
//           I am a para!!
//         </p>

//         <button onClick={handleClick}>Clickme!!</button>

//           <form onSubmit={handleSubmit}>
//           <input type="text" onChange={handleInputChange} />
//           <button type="submit">Submit</button>
//         </form>

//         {/* <button onClick={alert("Button has been clicked")}>     -- IMMEDIATE Invocation*/}
//         <button onClick={() =>alert("Button has been clicked") }>ClickMe</button>

//       </div>
//     </>
//   );
// }

// export default App;

function App() {
  function Buttion() {
    alert("Button Clicked");
  }
  return (
    <>
      <div>
        <button onClick={Buttion}>I am button, Click me!!</button>

        <form></form>
      </div>
    </>
  );
}

export default App;
