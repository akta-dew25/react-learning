// console.log(a);
// var a = 10;

// let arr = [1, 2, 3, 4];
// var a = arr.forEach((e) => console.log(e));
// console.log(a);

// console.log(a);
// let a = 20;

// var a = 10;
// function getA() {
//   console.log(a); //undefined
//     var a = 100;
// }

// console.log(a); //10
// getA();
// console.log(a); //10

function apiSimulator() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 2000);
  });
}

// console.log("start");
// let data = await apiSimulator();
// console.log(data);
// console.log("end");

// console.log("start");
// let data = apiSimulator();
// console.log(data);
// console.log("end");

//no redeclaration, no reassignment,
// const pi = 3.14159;
// console.log(pi);
// console.log(2 * pi * 7);

// let pi;
// pi = 3.14;
// console.log(pi);
// console.log(2 * pi * 7);

// function letVariable() {
//   console.log(a);
//   let a = 100;
// }

// console.log(a);
// let a = 100;
// letVariable();
