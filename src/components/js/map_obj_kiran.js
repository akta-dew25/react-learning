var users = [
  { name: "kiran", id: 1, dept: "backend", salary: 1000 },
  { name: "ekta", id: 2, dept: "frontend", salary: 1500 },
  { name: "nitya", id: 3, dept: "ux", salary: 1200 },
  { name: "aishwary", id: 4, dept: "frontend", salary: 2000 },
  { name: "pooja", id: 5, dept: "backend", salary: 1700 },
];

// var output = users.map((user) => ({ ...user, salary: user.salary + 500 }));
// console.log(output);

var output = users.map((user) => (user.id == 5 ? user : null));
console.log(output);
