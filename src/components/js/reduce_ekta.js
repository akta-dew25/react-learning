// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // find the sum of square of even number in the array
// var output = numbers.reduce((result, current,index,wholeArray) => {
//   if (current % 2 == 0) {
//     result = result + current*current;
//   }
//   return result;
// }, 0);
// console.log(output);

var numbers = [10, 20, 30, 40, 50];

var output = numbers.reduce((result, current, i, arr) => {
  //   console.log({ result, current, i, arr });c
  return result + current;
}, 0);
// console.log(output);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// cube of each odd number and sum of even number
var output = numbers.reduce((result, current) => {
  if (current % 2 == 0) {
    result = result + current * current;
  } else {
    result = result + current * current * current;
  }
  return result;
}, 0);

// console.log(output);

// var names = ["nitya", "kiran", "ekta", "pooja"];
// var output = names.reduce((result, current) => {
//   result = result + current;
//   return result;
// }, "");
// console.log(output);

// var names = ["nitya", "kiran", "ekta", "pooja"];
// var output = names.reduce((result, current) => result + current, "");

// console.log(output);

var names = ["nitya", "kiran", "ekta", "pooja"];
var output = names.reduce(
  (result, current) => result + current.toUpperCase(),
  ""
);
// console.log(output);

var names = ["nitya", "kiran", "ekta", "pooja"];
var output = names.reduce(
  (result, current) => result + current.toUpperCase() + " ",
  ""
);
// console.log(output);

var users = [
  { name: "kiran", id: 1, dept: "backend", salary: 1000 },
  { name: "ekta", id: 2, dept: "frontend", salary: 1500 },
  { name: "nitya", id: 3, dept: "ux", salary: 1200 },
  { name: "aishwary", id: 4, dept: "frontend", salary: 2000 },
  { name: "pooja", id: 5, dept: "backend", salary: 1700 },
];

//   all salaries sum
var output = users.reduce((result, current) => {
  result = result + current.salary;
  return result;
}, 0);
// console.log(output);

var output = users.reduce((result, current) => {
  result = result + current.name.toUpperCase() + " ";
  return result;
}, "");
// console.log(output);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var output = numbers.reduce((result, current) => {
  if (current % 3 == 0) {
    result = result + current * current;
  }
  return result;
}, 0);

// console.log(output);
