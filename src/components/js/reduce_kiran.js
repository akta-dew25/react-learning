//map and filter return array but in order to return any type(string,number,boolean, object, array)
//  we use map

// NOTE: syntax
// var initialValueOfResult = 0;
// var output = [1, 2, 3].reduce((result, current) => {
//   return result + current;
// }, initialValueOfResult);

// console.log(output);

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var output = numbers.reduce((result, current) => {
//   if (current % 2 === 1) {
//     return result + current;
//   } else {
//     return result;
//   }
// }, 0);

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var output = numbers.reduce((result, current) => {
//   if (current % 2 === 1) {
//     return result * current;
//   } else {
//     return result;
//   }
// }, 1);

// console.log(output);

// //check wether array contains odd number or not??
var numbers = [2, 4, 6, 3, 8, 10];
var output = numbers.reduce((containsOdd, number) => {
  if (number % 2 === 1) {
    containsOdd = true;
  }
  return containsOdd;
}, false);

console.log(output);

//check wether array contains even number or not??
var numbers = [1, 3, 5, 7];
var output = numbers.reduce((containsEven, number) => {
  if (number % 2 === 0) {
    containsEven = true;
  }
  return containsEven;
}, false);

console.log(output);
