import { useEffect } from "react";
import React from "react";

function Hello() {
  useEffect(() => {
    let inter = setInterval(() => {
      console.log("Hello");
    }, 1000);

    return () => {
      console.log("Hello Component Destoyed- cleanining up Hello's resources");
      clearInterval(inter);
    };
  }, []);

  return <div>Hello</div>;
}

export default Hello;
