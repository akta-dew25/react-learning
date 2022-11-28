var empDetails = {
  empid: 123,
  dept: "Dev",
  info: { fname: "Kiran", lname: "Poojari", age: 25 },
  addr: { state: "Karnataka", city: "Udupi", pin: 567566 },
};

//update dept
var newEmpDetails = { ...empDetails, dept: "testing" };
console.log(newEmpDetails);

//update PIN
var newEmpDetails = {
  ...empDetails,
  addr: { ...empDetails?.addr, pin: 888888 },
};
console.log(newEmpDetails);

//update Age
var newEmpDetails = { ...empDetails, info: { ...empDetails?.info, age: 24 } };
console.log(newEmpDetails);

//Update city
var newEmpDetails = {
  ...empDetails,
  addr: { ...empDetails?.addr, city: "Korba" },
};
console.log(newEmpDetails);

// setEmpDetails({
//     ...empDetails,
//     addr: { ...empDetails?.addr, city: "Korba" },
//   })
