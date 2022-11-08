// var numbers = [1, 23, 27, 28, 30, 81, 24, 123];

// var output = numbers.filter((num) => num % 3 == 0);
// console.log(output);

// var output = numbers.filter((num) => num % 2 != 0);
// console.log(output);

// var output = numbers.filter((num) => num % 2 != 0 && num % 3 == 0);
// console.log(output);

// var output = numbers.filter((num) => num % 2 == 0 && num % 3 == 0);
// console.log(output);

var numbers = [-1, 1, -23, 245, 24, -25, 24, -70];

// var output = numbers.filter((num) => num < 0);
// console.log(output);

// var output = numbers.filter((num) => num > 0);
// console.log(output);

var names = ["kiran", "amlana", "nitya", "puja", "saswat", "ekta"];

// var output = names.filter((name) => name.length == 5);
// console.log(output);

// var output = names.filter(
//   (name) => name == "kiran" || name == "nitya" || name == "ekta"
// );
// console.log(output);

var output = names.filter((name) => ["kiran", "nitya", "ekta"].includes(name));
console.log(output);
