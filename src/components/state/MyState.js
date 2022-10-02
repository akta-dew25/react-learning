import React, { useState } from "react";

function MyState() {
  const [name, setName] = useState("kiran");
  return (
    <div>
      <h1>{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default MyState;
