import React from "react";
import { useState } from "react";

function Operator() {
  const [userInfo, setuserInfo] = useState({
    name: "kiran",
    address: {
      city: "bangalore",
      state: "KA",
    },
  });

  let a = {};
  return (
    <div>
      <h2>{userInfo.name}</h2>
      <h2>{userInfo?.address?.city || "ooooo"}</h2>
      <h2>{userInfo?.address?.state}</h2>
      <h1>{null}</h1>
      <h1>{a.name || "Default name"}</h1>
      <button
        onClick={() =>
          setuserInfo({ ...userInfo, address: { city: "Bangaloreeeeee" } })
        }
      >
        Change
      </button>
    </div>
  );
}

export default Operator;
