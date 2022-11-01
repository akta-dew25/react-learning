import React from "react";
import Employeelist from "./Employeelist";
import UpdateEmp from "./UpdateEmp";
import { useState } from "react";

function AddEmployee() {
  const [newEmployee, setNewEmployee] = useState({
    empName: "",
    empId: "",
    salary: "",
  });
  const [employeeList, setEmployeeList] = useState([]);
  const [updatingEmployee, setUpdatingEmployee] = useState(null);

  function addNewEmployee() {
    setEmployeeList([...employeeList, newEmployee]);
    setNewEmployee({ empName: "", empId: "", salary: "" });
  }

  function updateEmployee(emp) {
    console.log(emp);
    let tempEmps = [...employeeList];
    tempEmps[emp.i] = emp;
    setEmployeeList(tempEmps);
    setUpdatingEmployee(null);
  }

  function deleteEmp(delEmp) {
    console.log(delEmp);
    let newList = employeeList.filter((emp) => emp.empId != delEmp.empId);
    console.log(newList);
    setEmployeeList(newList);
  }

  return (
    <>
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
          value={newEmployee.empName}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, empName: e.target.value })
          }
        ></input>
        <input
          placeholder="Emp Id"
          value={newEmployee.empId}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, empId: e.target.value })
          }
        ></input>
        <input
          placeholder="Salary"
          value={newEmployee.salary}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, salary: e.target.value })
          }
        ></input>

        <button onClick={() => addNewEmployee()}>Submit</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "30px",
        }}
      >
        <Employeelist
          employees={employeeList}
          editEmp={setUpdatingEmployee}
          deleteEmployee={deleteEmp}
        />
        <UpdateEmp
          emp={updatingEmployee || { empName: "", empId: "", salary: "" }}
          update={updateEmployee}
        />
      </div>
    </>
  );
}

export default AddEmployee;
