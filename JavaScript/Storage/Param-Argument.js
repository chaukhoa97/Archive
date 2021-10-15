// Parameter(tham số) & Argument(đối số)
function test(a) {
  return a; // a là param
}
test(100); // 100 là arg

// Factory Functions
function createPerson(name) {
  return {
    name,
    age: 23,
  };
}

// x++ và ++x
let x = 10;
let y = ++x; // Cộng x thành 11 rồi mới set cho y => y = x = 10 + 1 = 11
y = x++; // Cho y thành giá trị của x hiện tại, rồi mới + 1 cho x => y = 11, x = 11 + 1 = 12
