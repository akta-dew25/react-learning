import { useState } from "react";
import React from "react";

function IncrementDecrement() {
  const [number, setNumber] = useState(0);
  function decrementNumber() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  return (
    <div>
      <button onClick={decrementNumber}>-</button>
      <button>{number}</button>
      <button onClick={(e) => setNumber(number + 5)}>+</button>
    </div>
  );
}

export default IncrementDecrement;
