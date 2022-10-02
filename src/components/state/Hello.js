import { useEffect, useState } from "react";
import React from "react";

function Hello() {
  const [sec, setSec] = useState(0);

  //on mount
  useEffect(() => {
    let inter = setInterval(() => {
      console.log("Hello on mount");
    }, 1000);

    return () => {
      console.log(
        "Hello Component Destoyed- cleanining up Hello's resources allocated at mount time"
      );
      clearInterval(inter);
    };
  }, []);

  //with dependency
  useEffect(() => {
    let inter = setInterval(() => {
      console.log(`Hello newly mounted last ${sec} ago`);
      setSec(sec + 1);
    }, 1000);

    return () => {
      console.log("Hello Component Destoyed- cleanining up Hello's resources");
      clearInterval(inter);
    };
  }, [sec]);

  //cleanup function(return inside effects works in all 3 kinds of useEffects on unmount of component)

  return <div>This line newly mounted last {sec} ago</div>;
}

export default Hello;
