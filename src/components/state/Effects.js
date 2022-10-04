import React, { useState, useEffect } from "react";
import Hello from "./Hello";

function Effects() {
  const [number, setNumber] = useState(0);

  function decrementNumber() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }
  useEffect(() => {
    // alert("Component Mounted");
    console.log("Component Mounted");
    // return {
    //   // console.log("component destroyed")
    // };
  }, []);
  //   on load

  useEffect(() => {
    // alert("Number Changed ");
    console.log("Number Changed ");
  }, [number]);
  //   when state chenged

  useEffect(() => {
    // alert("Component state changed ");
    console.log("Component state changed ");
  });
  //   any state changed

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
