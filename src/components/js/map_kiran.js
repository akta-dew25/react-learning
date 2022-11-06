// ES6 omiting return and {} in arrow functions

// let arr = [1, 2, 3, 4];

// map(element,index,wholeArray)

// let op=arr.map((e,i)=>{})            //with brackets,: if call back function takes more than one arg
// let op=arr.map(e=>{})                //without brackets : when only one arg
// let op=arr.map((e)=>{})              //with brackets and only one arg

//[2,3,4,5] : when u have multiple lines in function body then u need to use {} and return inside  it
// let op = arr.map((ele, i) => {
//   //db
//   //setState
//   //getDate
//   ele += 1;
//   return ele;
// });
// console.log(op);

//no {}: when one line of code which is itself u want to retun then omit {} and return keyword
// var op = arr.map((ele, i) => ele + 1);
// console.log(op);

// when multiple statement in arrow function the u need {} and return if required
// var op = arr.map((ele, i) => {
//   ele = ele + 1;
//   ele = ele + i;
//   ele = ele * 2;
//   return ele;
// });
// console.log(op);

// when return;
// function getAc() {
//   return;
// }
// let op2 = getAc();
// console.log(op2);  //UNDEFINED
