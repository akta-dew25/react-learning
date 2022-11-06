var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var output = arr.map((num) => num * num).filter((n) => n % 2 != 0);
// console.log(output);

var users = [
  { name: "kiran", id: 1, dept: "backend", salary: 1000 },
  { name: "ekta", id: 2, dept: "frontend", salary: 1500 },
  { name: "nitya", id: 3, dept: "ux", salary: 1200 },
  { name: "aishwary", id: 4, dept: "frontend", salary: 2000 },
  { name: "pooja", id: 5, dept: "backend", salary: 1700 },
];

// var output = users
//   .map((user) => ({ ...user, salary: user.salary * 2 }))
//   .filter((emp) => emp.salary >= 2500);
// console.log(output);

var output = users
  .filter((user) => user.salary < 1500)
  .map((emp) => ({ ...emp, salary: emp.salary * 2 }));
console.log(output);
