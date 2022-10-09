import React from "react";

function Child1({ allUsers }) {
  return (
    <div style={{ width: "50%", border: "1px solid red" }}>
      <h4>User List</h4>
      <div>
        {allUsers.map((u, i) => (
          <div key={i}>{u}</div>
        ))}
      </div>
    </div>
  );
}

export default Child1;
