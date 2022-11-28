var addressDetails = {
  area: "BEML Layout",
  city: "Bengaluru",
  state: "Karnataka",
  zip: 576567,
};

// ___________________________________________________________________________________________________________

// var { area, city, state, zip } = addressDetails;
// console.log({ area, city, state, zip });

// ___________________________________________________________________________________________________________

// var { city, zip } = addressDetails;
// console.log({ city, zip });

// ___________________________________________________________________________________________________________

// let city, state;
// ({ city, state } = addressDetails); //;;;;;;
// console.log({ city, state });

// ___________________________________________________________________________________________________________

// var { area: locality, zip: pincode } = addressDetails;
// console.log({ locality, pincode });

// ___________________________________________________________________________________________________________

// var {
//   area,
//   city,
//   state,
//   zip,
//   country = "IND",
//   countryCode = "+91",
// } = addressDetails;
// console.log({ area, city, state, zip, country, countryCode });

// ___________________________________________________________________________________________________________

// var { area, city, ...otherDetails } = addressDetails;
// console.log({ area, city, otherDetails });
// ___________________________________________________________________________________________________________

// var emp = {
//   name: "Ekta",
//   sal: 600000,
//   addr: {
//     area: "HSR",
//     zip: 767567,
//   },
// };

// var {
//   name: empName,
//   addr: { area: locality, zip: pincode },
// } = emp;

// console.log({
//   empName,
//   locality,
//   pincode,
// });

// ___________________________________________________________________________________________________________

function getAddress({
  area: locality = "HSR",
  city,
  state,
  zip: pinCode,
  country = "IND",
  countryCode = "+91",
}) {
  return { locality, city, state, pinCode, country, countryCode };
}
console.log(getAddress(addressDetails));
