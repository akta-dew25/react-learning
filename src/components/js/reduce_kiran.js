//map and filter return array but in order to return any type(string,number,boolean, object, array)
//  we use map

// NOTE: syntax
// var initialValueOfResult = 0;
// var output = [1, 2, 3].reduce((result, current) => {
//   return result + current;
// }, initialValueOfResult);

// console.log(output);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var output = numbers.reduce((result, current) => {
  if (current % 2 === 1) {
    return result + current;
  } else {
    return result;
  }
}, 0);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var output = numbers.reduce((result, current) => {
  if (current % 2 === 1) {
    return result * current;
  } else {
    return result;
  }
}, 1);

console.log(output);
