// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// output
// [1,8,9,64,25,...]

// Heigher Order Function
// function which takes function as argument
// OR
// function which returns function as retun value

// let result = arr.map((u, i) => {
//   if (u % 2 === 0) {
//     return u * u * u;
//   } else {
//     return u * u;
//   }
// });
// console.log(result);

// let result = arr.map((u) => (u % 2 === 0 ? u * u * u : u * u));
// console.log(result);

//return [true/false]
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var output = number.map((n) => n % 2 !== 0);
// console.log(output);

// let numbers = [123, 91, 27, 28, 81, 90, 92];

// let divide = numbers.map((e) => (e % 3 === 0 ? e : null));
// console.log(divide);

// var numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25,
// ];
// //  output :[2,6,10,14,18,22]

// let output = numbers.map((e) => (e % 2 === 0 && e % 4 !== 0 ? e : null));
// console.log(output);

var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var output = numbers.map((num, i) => {
  if (num % 4 == 0 && num % 2 == 0) {
    return num * 2;
  } else {
    return num;
  }
});
// console.log(output);

var output = numbers.map((num, i) =>
  num % 4 == 0 && num % 2 == 0 ? num * 2 : num
);
// console.log(output);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var output = numbers.map((num, i) => {
  if (num % 2 == 0) {
    return num * num;
  } else {
    return num * num * num;
  }
});
// console.log(output);
