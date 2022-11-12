//returning array from reduce
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var output = numbers.reduce((result, currentNum) => {
  result.push(currentNum * currentNum);
  return result;
}, []);

console.log(output);
