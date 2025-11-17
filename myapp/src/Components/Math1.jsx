import React, { useState } from "react";

function Calculator() {
  // Good practice to keep the state as a string to handle empty input fields
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Helper function to safely get the number from the state string
  const getNumber = (val) => (val === "" ? NaN : Number(val));

  // Corrected operation functions
  const add = (a, b) => getNumber(a) + getNumber(b);
  const mul = (a, b) => getNumber(a) * getNumber(b); // Corrected: was a - b
  const sub = (a, b) => getNumber(a) - getNumber(b); // Corrected: was a * b
  const div = (a, b) => {
    const bNum = getNumber(b);
    return bNum !== 0 ? getNumber(a) / bNum : "Cannot divide by 0";
  };

  // Helper function to check if inputs are valid numbers before calculation
  const performOperation = (operation) => {
    const val1 = getNumber(num1);
    const val2 = getNumber(num2);

    if (isNaN(val1) || isNaN(val2)) {
      setResult("Invalid Input");
    } else {
      setResult(operation(num1, num2));
    }
  };

  return (
    <>
      <h2>Simple Calculator</h2>
      <form>
        <label> Enter Your First number: </label>
        <input
          type="number"
          value={num1}
          // Set state as string
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter First Number"
        />
        <br />

        <label>Enter Your Second number: </label>
        <input
          type="number"
          value={num2}
          // Set state as string
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter Second Number"
        />
        <br />

        {/* Buttons now call performOperation with the correct function */}
        <button type="button" onClick={() => performOperation(add)}>
          Add
        </button>
        <button type="button" onClick={() => performOperation(mul)}>
          Mul
        </button>
        <button type="button" onClick={() => performOperation(sub)}>
          Sub
        </button>
        <button type="button" onClick={() => performOperation(div)}>
          Div
        </button>
      </form>

      <h3>Result: {result}</h3>
    </>
  );
}

export default Calculator;