import React, { useState, useEffect } from "react";
import Hello from "./Hello";

function Effects() {
  const [number, setNumber] = useState(0);

  function decrementNumber() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  //executes onmount
  useEffect(() => {
    // alert("Component Mounted");
    console.log("Component Mounted");
    return {
      //executes on unmount
      // console.log("component destroyed")
    };
  }, []);

  // executes on depensency changes
  useEffect(() => {
    // alert("Number Changed ");
    console.log("Number Changed ");
  }, [number]);

  // executes on any state change
  useEffect(() => {
    // alert("Component state changed ");
    console.log("Component state changed ");
  });

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => decrementNumber()}>-</button>
      <button>{number}</button>
      <button onClick={(e) => setNumber(number + 1)}>+</button>
      <br />
      {number > 0 ? <Hello /> : null}
    </div>
  );
}

export default Effects;
