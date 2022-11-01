import React, { useState, useEffect } from "react";

function UpdateEmp(props) {
  const [updateEmployee, setUpdateEmployee] = useState(props.emp);
  console.log(props);
  useEffect(() => {
    console.log(props.emp);
    setUpdateEmployee(props.emp);
  }, [props.emp]);

  function updateEmpList() {}

  return (
    <div
      style={{
        boxSizing: "border-box",
        border: "1px solid black",
        width: "50%",
      }}
    >
      UpdateEmp
      <div
        style={{
          boxSizing: "border-box",
          border: "1px solid black",
          //   width: "70%",
          //   height: "50px",
          margin: "30px",
          display: "flex",
          padding: "20px",
        }}
      >
        <input
          placeholder="Employee Name"
          value={updateEmployee.empName}
          onChange={(e) =>
            setUpdateEmployee({ ...updateEmployee, empName: e.target.value })
          }
        ></input>
        <input
          placeholder="Emp Id"
          value={updateEmployee.empId}
          onChange={(e) =>
            setUpdateEmployee({ ...updateEmployee, empId: e.target.value })
          }
        ></input>
        <input
          placeholder="Salary"
          value={updateEmployee.salary}
          onChange={(e) =>
            setUpdateEmployee({ ...updateEmployee, salary: e.target.value })
          }
        ></input>

        <button onClick={() => props.update(updateEmployee)}>Update</button>
      </div>
    </div>
  );
}

export default UpdateEmp;
