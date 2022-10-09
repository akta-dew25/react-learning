import React from "react";

function GrandChild({ dataAsPerParent }) {
  return (
    <div>
      <h4>GrandChild Data as per Grand Parent</h4>
      {dataAsPerParent.map((u) => (
        <div>{u}</div>
      ))}
    </div>
  );
}

export default GrandChild;
