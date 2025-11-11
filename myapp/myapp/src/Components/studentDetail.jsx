import React from "react";

function Student({ temp }) {
  return (
    <>
      <p>Student Name: {temp.name}</p>
      <p>Registration Number: {temp.Regnumber}</p>
      <p>Email Address: {temp.Address}</p>
      <p>Phone Number: +91 {temp.Number}</p>
    </>
  );
}

export default Student;
