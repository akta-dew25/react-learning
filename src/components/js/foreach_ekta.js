const movies = require("./movies.json");

// USING forEach
//get total budget
var movieBudget = 0;
movies.forEach((mv) => {
  movieBudget = movieBudget + mv.budget;
});
// console.log(movieBudget);

//concat all movie names in capital case(string)
var movieName = "";
movies.forEach((mv) => {
  movieName = movieName + mv?.name?.toUpperCase() + ",";
});
// console.log(movieName);

//isMovieReleased2016 in : boolean

var movieRelease = false;
movies.forEach((mv) => {
  if (mv.year == 2012) {
    movieRelease = true;
  }
});
// console.log(movieRelease);

//return array of producer[]
var movieProducer = [];
movies.forEach((mv) => {
  movieProducer.push(mv.producer);
});
console.log(movieProducer.sort());

//return array of movie details which gain collection>15000
var movieCollection = [];
movies.forEach((mv) => {
  if (mv.collection > 15000) {
    movieCollection.push(mv);
  }
});
// console.log(movieCollection);

//return array of flop movie details

var flopMovie = [];
movies.forEach((mv) => {
  if (mv.collection < mv.budget) {
    flopMovie.push(mv);
  }
});
// console.log(flopMovie);
