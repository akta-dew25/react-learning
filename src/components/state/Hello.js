import { useEffect } from "react";
import React from "react";

function Hello() {
  useEffect(() => {
    return () => {
      console.log("Hello Component Destoyed- cleanining up Hello's resources");
    };
  }, []);

  return <div>Hello</div>;
}

export default Hello;
