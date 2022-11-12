var names = [
  "A",
  "B",
  "C",
  "E",
  "F",
  "I",
  "O",
  "U",
  "M",
  "N",
  "G",
  "F",
  "B",
  "C",
  "D",
];

const vowels = ["A", "E", "I", "O", "U"];

let value = names.map((e) => (vowels.includes(e) ? e : null));
console.log(value);

// var names = ["ekta", "kiran", "nitya", "saswat", "pooja"];

// var output = names.map((name, i, names) => (name.length === 5 ? name : null));
// console.log(output);

// var numbers = [12, -13, 14, -14, 15, -16, 18, 19, -10];
// var output = numbers.map((number, i) => (number > 1 ? number : null));
// console.log(output);

// var output = numbers.map((number, i) => (number < 0 ? number : null));
// console.log(output);
