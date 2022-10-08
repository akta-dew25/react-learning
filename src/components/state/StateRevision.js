import React, { useEffect, useState } from "react";

function StateRevision() {
  const [input, setInput] = useState({ length: 0, width: 0 });
  const [output, setOutput] = useState({ area: 0, perimeter: 0 });
  const [showError, setShowError] = useState(false);

  function InputChange(field, value) {
    if (isNaN(+value) || +value < 0) {
      setShowError(true);
    } else {
      if (field === "length" && input.width > 0) {
        setInput({ ...input, [field]: +value });
      } else if (field === "width" && input.length > 0) {
        setInput({ ...input, [field]: +value });
      }
    }
  }

  useEffect(() => {
    let a = input.length * input.width;
    let p = 2 * (input.length + input.width);
    setOutput({ area: a, perimeter: p });
    setShowError(false);

    console.log("test");
  }, [input]);

  return (
    <div>
      <input
        placeholder="enter length"
        type="text"
        // value={input.legth}
        onChange={(e) => InputChange("length", e.target.value)}
      />
      <input
        placeholder="enter width"
        type="text"
        // value={input.width}
        onChange={(e) => InputChange("width", e.target.value)}
      />
      {showError ? (
        <p style={{ color: "red" }}>
          Length & Width should be positive integer
        </p>
      ) : null}

      <p>
        Area of rectangle: {`${showError ? 0 : output.area}`}cm<sup>2</sup>{" "}
        perimeter of rectangle:
        {`${showError ? 0 : output.perimeter}`}cm
      </p>
    </div>
  );
}

export default StateRevision;
