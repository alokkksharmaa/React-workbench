import React from "react";

// const obj1 = {
//   name: "Alok",
//   Regnumber: 1234212,
//   EmailAddress: "xyz@gmail.com",
//   Number: 788544582,
// };

// const obj2 = {
//   name: "Alok",
//   Regnumber: 12343425,
//   EmailAddress: "abc@gmail.com",
//   Number: 8556655952,
// };
function Student({ temp }) {

  return (
    <>
      <p>Student Name: {temp.name}</p>
      <p>Registration Number: {temp.Regnumber}</p>
      <p>Email Address: {temp.EmailAddress}</p>
      <p>Phone Number: +91 {temp.Number}</p>
    </>
  );
}

export default Student;
