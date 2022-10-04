import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

function HTMLPDF() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello World</h1>
        <h2>Start Add Your PDF content HERE</h2>
      </div>
    </div>
  );
}

export default HTMLPDF;
