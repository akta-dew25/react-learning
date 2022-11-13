//returning array from reduce

const movies = require("./movies.json");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var output = numbers.reduce((result, currentNum) => {
  result.push(currentNum * currentNum);
  return result;
}, []);

console.log(movies);
// console.log(output);

//returning object from reduce
var numbers = [1, 2, 3, 4, 5, 5, 6, 7];
var oddEvens = numbers.reduce(
  (result, currentNum) => {
    if (currentNum % 2 === 0) {
      result?.even?.push(currentNum);
    } else {
      result?.odd?.push(currentNum);
    }
    return result;
  },
  { odd: [], even: [] }
);

// console.log(oddEvens);
var employees = [
  { empid: 101, name: "raaju", age: 22, dept: "testing", city: "Bangalore" },
  { empid: 102, name: "rahul", age: 36, dept: "development", city: "Chennai" },
  { empid: 103, name: "raghav", age: 26, dept: "UX", city: "Bangalore" },
  {
    empid: 104,
    name: "rohit",
    age: 44,
    dept: "development",
    city: "Bangalore",
  },
  {
    empid: 105,
    name: "ramesh",
    age: 52,
    dept: "development",
    city: "Hyderabad",
  },
  { empid: 106, name: "rohan", age: 35, dept: "testing", city: "Chennai" },
];

let deptEmp = employees.reduce((result, currEmp) => {
  if (result[currEmp.dept]) {
    result[currEmp.dept]?.push(currEmp);
  } else {
    result[currEmp.dept] = [currEmp];
  }
  return result;
}, {});

// console.log(deptEmp);
