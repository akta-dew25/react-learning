import React, { useState, useEffect } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  const [newUser, setNewUser] = useState("");
  const [userList, setUserList] = useState([]);

  function addNewUser() {
    if (newUser) {
      setUserList([...userList, newUser]);
      setNewUser("");
    }
  }

  function updateAllUser(updatedUser) {
    setUserList(updatedUser);
  }

  return (
    <div style={{ padding: "3rem", border: "1px solid red" }}>
      <div>User Management</div>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={addNewUser}>+</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Child1 allUsers={userList} />
        <Child2 allUsers={userList} updateAllUser={updateAllUser} />
      </div>
    </div>
  );
}

export default Parent;
