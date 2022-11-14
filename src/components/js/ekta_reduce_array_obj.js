// const movies = require("./movies.json");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var cubeNumbers = numbers.reduce((result, currentNum) => {
  result.push(currentNum * currentNum * currentNum);
  return result;
}, []);

// console.log(cubeNumbers);

var squareOddNumbers = numbers.reduce((result, currentNum) => {
  if (currentNum % 2 == 1) {
    result.push(currentNum * currentNum);
  }
  return result;
}, []);
// console.log(squareOddNumbers);

var dividedNumbers = numbers.reduce((result, currentNum) => {
  if (currentNum % 3 == 0 && currentNum % 2 !== 0) {
    result.push(currentNum * 2);
  }
  return result;
}, []);
// console.log(dividedNumbers);

var users = [
  { name: "kiran", id: 1, dept: "backend", salary: 1000 },
  { name: "ekta", id: 2, dept: "frontend", salary: 1500 },
  { name: "nitya", id: 3, dept: "ux", salary: 1200 },
  { name: "aishwary", id: 4, dept: "frontend", salary: 2000 },
  { name: "pooja", id: 5, dept: "backend", salary: 1700 },
];

var usersSalary = users.reduce((result, currentUser) => {
  if (currentUser.salary > 1500) {
    result.push(currentUser);
  }
  return result;
}, []);

// console.log(usersSalary);

var deptUsers = users.reduce((result, currentUser) => {
  if (currentUser.dept == "backend" || currentUser.dept == "frontend") {
    result.push(currentUser);
  }
  return result;
}, []);

// console.log(deptUsers);

var backendUsers = users.reduce((result, currentUser) => {
  if (currentUser.dept == "backend") {
    result.push({ ...currentUser, salary: currentUser.salary * 2 });
  }
  return result;
}, []);

// console.log(backendUsers);

//OBJECT

var usersSalary = users.reduce(
  (result, currentUser) => {
    if (currentUser.salary > 1500) {
      result?.max?.push(currentUser);
    } else {
      result?.min?.push(currentUser);
    }
    return result;
  },
  { max: [], min: [] }
);

// console.log(usersSalary);

var usersDept = users.reduce(
  (result, currentUser) => {
    if (currentUser.dept == "backend") {
      result?.back?.push(currentUser);
    } else {
      if (currentUser.dept == "frontend") {
        result?.front?.push(currentUser);
      } else {
        result?.ux?.push(currentUser);
      }
    }
    return result;
  },
  { back: [], front: [], ux: [] }
);
// console.log(usersDept);

var users = [
  { name: "kiran", age: 25 },
  { name: "nitya", age: 15 },
  { name: "ekta", age: 35 },
  { name: "pooja", age: 27 },
  { name: "saswat", age: 8 },
  { name: "jatin", age: 32 },
  { name: "pallavi", age: 17 },
];

var adultMinor = users.reduce(
  (result, currentUser) => {
    if (currentUser.age > 18) {
      result?.adult?.push(currentUser);
    } else {
      result?.minor?.push(currentUser);
    }
    return result;
  },
  { adult: [], minor: [] }
);
// console.log(adultMinor);

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
  { empid: 107, name: "rohit", age: 35, dept: "testing", city: "Hyderabad" },
  { empid: 108, name: "rahul", age: 35, dept: "testing", city: "Chennai" },
];

var empLocation = employees.reduce((result, currentEmp) => {
  if (result[currentEmp.city]) {
    result?.[currentEmp.city].push(currentEmp);
  } else {
    result[currentEmp.city] = [currentEmp];
  }
  return result;
}, {});

// console.log(empLocation);

var empName = employees.reduce((result, currEmp) => {
  if (result?.[currEmp.name]) {
    result?.[currEmp.name].push(currEmp);
  } else {
    result[currEmp.name] = [currEmp];
  }
  return result;
}, {});

// console.log(empName);

var numbers = [1, 2, 3, 4, 5];

var output = numbers.reduceRight((result, currNum) => {
  result.push(currNum);
  return result;
}, []);

// console.log(output);

var movieProducer = movies.reduce((result, currMovie) => {
  if (result?.[currMovie.producer]) {
    result?.[currMovie.producer].push(currMovie);
  } else {
    result[currMovie.producer] = [currMovie];
  }
  return result;
}, {});

// console.log(movieProducer);

var movieName = movies.reduce((result, currMovie) => {
  if (result?.[currMovie.direction]) {
    result?.[currMovie.direction].push(currMovie.name);
  } else {
    result[currMovie.direction] = [currMovie.name];
  }
  return result;
}, {});

// console.log(movieName);

var movieBudget = movies.reduce(
  (result, currMovie) => {
    if (currMovie.budget < currMovie.collection) {
      result?.success?.push(currMovie.name);
    } else {
      result?.flop?.push(currMovie.name);
    }
    return result;
  },
  { success: [], flop: [] }
);
// console.log(movieBudget);

var movieNames = movies.reduce((result, currMovie) => {
  result.push(currMovie.name);
  return result;
}, []);
// console.log(movieNames);

var collectionBudget = movies.reduce(
  (result, currMovie) => {
    result.budg = result.budg + currMovie.budget;
    result.collec = result.collec + currMovie.collection;
    return result;
  },
  {
    collec: 0,
    budg: 0,
  }
);
// console.log(collectionBudget);

var collectionBudget = movies.reduce(
  (result, currMovie) => ({
    collec: result.collec + currMovie.collection,
    budg: result.budg + currMovie.budget,
  }),
  {
    collec: 0,
    budg: 0,
  }
);
// console.log(collectionBudget);

var movieYear = movies.reduce((result, currMovie) => {
  if (result?.[currMovie.year]) {
    result?.[currMovie.year].push(currMovie.name);
  } else {
    result[currMovie.year] = [currMovie.name];
  }
  return result;
}, {});
// console.log(movieYear);

var movieSuccess = movies.reduce(
  (result, currMovie) => {
    if (currMovie.budget < currMovie.collection) {
      result.success.push({
        name: currMovie.name,
        budget: currMovie.budget,
        collection: currMovie.collection,
      });
    } else {
      result.flop.push({
        name: currMovie.name,
        budget: currMovie.budget,
        collection: currMovie.collection,
      });
    }
    return result;
  },
  { success: [], flop: [] }
);
console.log(movieSuccess);
// console.log(movies);
