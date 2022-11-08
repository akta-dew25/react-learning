//map and filter return array but in order to return any type(string,number,boolean, object, array)
//  we use map

// NOTE: syntax
var initialValueOfResult = 0;
var output = [1, 2, 3].reduce((result, current) => {
  return result + current;
}, initialValueOfResult);
console.log(output);

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//return number from reduce

//return string from reduce

//return boolean from reduce

//return object from reduce

//return array from reduce
