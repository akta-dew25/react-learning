import React, { useState, useEffect } from "react";
import GrandChild from "./GrandChild";
function Child2(props) {
  const [updateUserList, setUpdateUserList] = useState(props.allUsers);

  useEffect(() => {
    setUpdateUserList(props.allUsers);
  }, [props]);

  function changeUserDetails(username, position) {
    let tempuserList = [...updateUserList];
    tempuserList[position] = username;
    setUpdateUserList(tempuserList);
  }

  return (
    <div style={{ width: "50%", border: "1px solid red" }}>
      <h4>User Update</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {updateUserList.map((u, i) => (
          <div key={i}>
            <input
              placeholder="Enter user name7"
              value={u}
              onChange={(e) => changeUserDetails(e.target.value, i)}
            />
          </div>
        ))}
      </div>
      <button onClick={() => props.updateAllUser(updateUserList)}>
        Update
      </button>
      <div style={{ padding: "1rem", border: "1px solid green" }}>
        <GrandChild dataAsPerParent={props.allUsers} />
      </div>
    </div>
  );
}

export default Child2;
