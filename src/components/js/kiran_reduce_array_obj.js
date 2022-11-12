//returning array from reduce
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var output = numbers.reduce((result, currentNum) => {
  result.push(currentNum * currentNum);
  return result;
}, []);

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

console.log(deptEmp);

var movies = [
  {
    name: "Gajini",
    year: 2008,
    budget: 3000,
    collection: 90000,
    producer: "kiran",
    direction: "ekta",
  },
  {
    name: "Student of the year",
    year: 2012,
    budget: 34000,
    collection: 30000,
    producer: "ekta",
    direction: "kiran",
  },
  {
    name: "Chichore",
    year: 2019,
    budget: 10000,
    collection: 2000,
    producer: "nitya",
    direction: "pooja",
  },
  {
    name: "Brahmastra",
    year: 2022,
    budget: 9000,
    collection: 17500,
    producer: "pooja",
    direction: "Kiran",
  },
  {
    name: "Swadesh",
    year: 2013,
    budget: 7000,
    collection: 7500,
    producer: "nitya",
    direction: "ekta",
  },
  {
    name: "PK",
    year: 2012,
    budget: 3000,
    collection: 4000,
    producer: "ekta",
    direction: "nitya",
  },
  {
    name: "Hum",
    year: 2018,
    budget: 6000,
    collection: 12000,
    producer: "kiran",
    direction: "pooja",
  },
  {
    name: "KGF",
    year: 2022,
    budget: 3000,
    collection: 9000,
    producer: "saswat",
    direction: "jatin",
  },
  {
    name: "Hate Story",
    year: 2008,
    budget: 1000,
    collection: 2000,
    producer: "saswat",
    direction: "pooja",
  },
];
