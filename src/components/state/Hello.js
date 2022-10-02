import { useEffect } from "react";
import React from "react";

function Hello() {
  useEffect(() => {
    return () => {
      console.log("Destoyed");
    };
  }, []);

  return <div>Hello</div>;
}

export default Hello;
