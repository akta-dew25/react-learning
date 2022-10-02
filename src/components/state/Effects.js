import React, { useState, useEffect } from "react";

function Effects() {
  const [number, setNumber] = useState(0);
  function decrementNumber() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }
  useEffect(() => {
    alert("Component Mounted");
    return {
      // console.log("component destroyed")
    };
  }, []);

  useEffect(() => {
    alert("Number Changed ");
  }, [number]);

  useEffect(() => {
    alert("Component state changed ");
  });

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={decrementNumber}>-</button>
      <button>{number}</button>
      <button onClick={(e) => setNumber(number + 5)}>+</button>
    </div>
  );
}

export default Effects;
