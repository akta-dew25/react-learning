import React, { useState } from "react";

function Conditional() {
  const [showUI, setshowUI] = useState(false);
  return (
    <div style={{ paddingTop: "5rem" }}>
      {showUI ? <div>Hello Ekta</div> : null}
      <button onClick={() => setshowUI(!showUI)}>
        {showUI ? "OFF" : "ON"}
      </button>
    </div>
  );
}

export default Conditional;
