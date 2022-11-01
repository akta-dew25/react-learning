import React, { useState } from "react";
import StudentList from "./StudentList";

function AddStudent() {
  const [newStudent, setNewStudent] = useState({ name: "", phone: "" });
  const [studentList, setStudentList] = useState([]);

  function addNewStudent() {
    setStudentList([...studentList, newStudent]);
    setNewStudent({ name: "", phone: "" });
  }

  return (
    <div>
      <h1>Add New Student</h1>
      <input
        value={newStudent.name}
        placeholder="Student name"
        onChange={(e) => {
          setNewStudent({ ...newStudent, name: e.target.value });
        }}
      ></input>
      <input
        value={newStudent.phone}
        placeholder="Phone Number"
        onChange={(e) => {
          setNewStudent({ ...newStudent, phone: e.target.value });
        }}
      ></input>
      <br />
      <button onClick={addNewStudent}>Submit</button>
      <StudentList list={studentList} />
    </div>
  );
}

export default AddStudent;
