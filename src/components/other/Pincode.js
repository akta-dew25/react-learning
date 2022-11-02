const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
const json2xls = require("json2xls");

const result = excelToJson({
  source: fs.readFileSync("ok.xlsx"), // fs.readFileSync return a Buffer
});

let sheetNames = Object.keys(result);

// sheetNames.forEach((sh) => {
//   console.log(result[sh].length);
// });

let splittedJson = [];
let s = 0;
result.Sheet1.map((row) => {
  let multipleArea = row?.C?.split(",");
  multipleArea?.map((area, i) => {
    ++s;
    // console.log(area.length);
    splittedJson.push({
      sl: s,
      pinCode: row?.B || "NA",
      areaName: area || "NA",
    });
  });
});

console.log(JSON.stringify(splittedJson));

// console.log(result?.sheet1?.length);
