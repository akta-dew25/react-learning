const movies = require("./movies.json");
var numbers = [1, 2, 3, 4, 5, 6, 7, 7];

// var output = numbers.forEach((n) => {
//   console.log(n);
// });
// console.log(output);

var movieName = [];
movies.forEach((mv) => {
  movieName.push(mv.name);
});
console.log(movieName);
