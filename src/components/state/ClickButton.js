import React, { useState } from "react";

function ClickButton() {
  const [clickButton, setClickButton] = useState(0);

  return (
    <div style={{ position: "absolute", top: "5rem", left: "5rem" }}>
      <h4>
        You Clicked {clickButton} {clickButton > 1 ? "times" : "time"}
      </h4>
      <button
        onClick={(e) => {
          setClickButton(clickButton + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default ClickButton;
