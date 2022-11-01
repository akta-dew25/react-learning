import React, { useState, useEffect } from "react";

function StudentList({ list }) {
  const [stList, setStList] = useState(list);

  useEffect(() => {
    setStList(list);
  }, [list]);

  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>Sl. no.</th>
          <th style={{ border: "1px solid black" }}>Name</th>
          <th style={{ border: "1px solid black" }}>Phone</th>
        </tr>
        <tbody>
          {stList.map((st, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{st.name}</td>
              <td>{st.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
