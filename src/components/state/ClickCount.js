import { useState } from "react";
import React from "react";

function ClickCount() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        U Clicked {count}&nbsp; {count <= 1 ? " time" : " times"}
      </p>
      <button onClick={(e) => setCount(count + 1)}> Click Me</button>
    </div>
  );
}

export default ClickCount;
