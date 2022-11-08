let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var output = number.map((n) => n % 2 !== 0);

// with conditional return
var output = number.filter((n) => (n % 2 !== 0 ? n : null));
console.log(output);

var output = number.filter((n) => n % 2 !== 0);
console.log(output);
