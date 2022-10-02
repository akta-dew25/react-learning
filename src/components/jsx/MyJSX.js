import React from "react";

function MyJSX() {
  let a = 10;

  const getA = () => {
    //api;
    //butn
    let button = <button>Hello</button>;
    return button;
  };
  return <div>{getA()}</div>;
}

export default MyJSX;
