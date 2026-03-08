import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [onA, setOnA] = useState("");
  const [onB, setOnB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

 
  /* You will need some function to handle the key pressed and button events */
  const handleOnAChange = (event) => {
    setOnA(event.target.value);
    setResult(""); // Clear result when inputs change
    setIsError(false);
  };
  const handleOnBChange = (event) => {
    setOnB(event.target.value);
    setResult("");
    setIsError(false);
  };
  
  const handleCompute = () => {
    // Convert inputs to numbers
    const numA = parseFloat(onA);
    const numB = parseFloat(onB);
    if (isNaN(numA) || isNaN(numB)) {
      setResult("Error: enter only number");
      setIsError(true);
    } else {
      const sum = numA + numB;
      setResult(sum.toString());
      setIsError(false);
    }
  };


  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={onA} onChange={handleOnAChange}/>

      <label>B =</label>
      <input value={onB} onChange={handleOnBChange}/>
      
      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} style={{ color: isError ? "red" : "black" }}/>
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
