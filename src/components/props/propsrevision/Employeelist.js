import React, { useState, useEffect } from "react";

function Employeelist({ employees, editEmp, deleteEmployee }) {
  const [allEmployees, setAllEmployees] = useState(employees);

  useEffect(() => {
    setAllEmployees(employees);
  }, [employees]);

  //   console.log({ props });
  return (
    <div
      style={{
        boxSizing: "border-box",
        border: "1px solid black",
        width: "50%",
      }}
    >
      Employeelist
      {allEmployees.map((emp, i) => (
        <div>
          <button
            onClick={() => {
              editEmp({ ...emp, i });
            }}
            style={{ width: "10rem" }}
          >
            {emp.empName}
          </button>
          <button
            style={{ color: "red", marginLeft: "1rem" }}
            onClick={() => {
              deleteEmployee({ ...emp, i });
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Employeelist;
