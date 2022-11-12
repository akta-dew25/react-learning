// var numbers = [1, 23, 27, 28, 30, 81, 24, 123];

// var output = numbers.filter((num) => num % 3 == 0);
// console.log(output);

// var output = numbers.filter((num) => num % 2 != 0);
// console.log(output);

// var output = numbers.filter((num) => num % 2 != 0 && num % 3 == 0);
// console.log(output);

// var output = numbers.filter((num) => num % 2 == 0 && num % 3 == 0);
// console.log(output);

var numbers = [-1, 1, -23, 245, 24, -25, 24, -70];

// var output = numbers.filter((num) => num < 0);
// console.log(output);

// var output = numbers.filter((num) => num > 0);
// console.log(output);

var names = ["kiran", "amlana", "nitya", "puja", "saswat", "ekta"];

// var output = names.filter((name) => name.length == 5);
// console.log(output);

// var output = names.filter(
//   (name) => name == "kiran" || name == "nitya" || name == "ekta"
// );
// console.log(output);

var output = names.filter((name) => ["kiran", "nitya", "ekta"].includes(name));
// console.log(output);

var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var output = numbers.filter((num) => num > 60 || num < 30);
// console.log(output);

var empdetails = [
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

var getEmployees = empdetails.filter(
  (emp) => emp.dept == "UX" || emp.dept == "testing"
);
console.log(getEmployees);
