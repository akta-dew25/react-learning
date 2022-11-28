const test = (name) => {
  console.log(name);
};

function test3() {
  let teacher = "ekta";
  test2(teacher);
  console.log("test: ", teacher);
}

function test2(teacher) {
  let surname = "dewangan";
  let name = teacher + surname;
  test(name);
  console.log(teacher);
}
test3();
test4();
function test4() {
  console.log("hello");
  test2("Seba");
  test("S Dewangan");
  console.log("hiiii");
}

console.log("this is the end");
