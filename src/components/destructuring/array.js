var addressDetails = ["BEML Layout", "Bengaluru", "Karnataka", 576567];
//************************AREA***********CITY*********STATE********ZIP********

// var [area, city, state, zip] = addressDetails;
// console.log({ area, city, state, zip });
// op
// {
//     area: 'BEML Layout',
//     city: 'Bengaluru',
//     state: 'Karnataka',
//     zip: 576567
//   }

// ___________________________________________________________________________________________________________

// var [, , state] = addressDetails;
// console.log("state", { state });
// state { state: 'Karnataka' }

// ___________________________________________________________________________________________________________

// var [area, , , zip] = addressDetails;
// console.log({ area, zip });
// { area: 'BEML Layout', zip: 576567 }

// ___________________________________________________________________________________________________________

// var [area, ...otherDetails] = addressDetails;
// console.log({ area, otherDetails });
// {
//     area: 'BEML Layout',
//     otherDetails: [ 'Bengaluru', 'Karnataka', 576567 ]
// }

// ___________________________________________________________________________________________________________
// var [area, city, state, zip, country = "IND", countryCode = "+91"] =
//   addressDetails;
// console.log({ area, city, state, zip, country, countryCode });
// ___________________________________________________________________________________________________________

// var area, city, state, zip;
// [area, city, state, zip] = addressDetails;
// console.log({ area, city, state, zip });

// ___________________________________________________________________________________________________________

// var a = 10;
// var b = 20;
// console.log("before swap", { a, b });
// [b, a] = [a, b];
// console.log("after swap", { a, b });

// ___________________________________________________________________________________________________________

// var a = 10;
// var b = 20;
// var temp;
// console.log("before swap", { a, b });
// temp = a;
// a = b;
// b = temp;
// console.log("after swap", { a, b });

// ___________________________________________________________________________________________________________

// var a = 10;
// var b = 20;
// console.log("before swap", { a, b });
// a = a + b; //30
// b = a - b; //10
// a = a - b; //20
// console.log("after swap", { a, b });

// ___________________________________________________________________________________________________________
