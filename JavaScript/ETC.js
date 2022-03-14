//1 ... Spread Operator vs Rest Operator
//2 The Spread Operator: Split up Array elements/Object Properties.
//! Deep copy topmost data, shallow copy nested data.
const newArray = [...firstArray, 10, ...secondArray];
const newObject = { ...oldObject, newProp: "New property value" };
//2 The Rest Operator: Merge FUNCTION ARGUMENTS vào một array --> Có thể dùng các Array method lên các arguments đó
function showArgs(time, ...args) {} //* args = [...]

//1 Parameter(tham số) & Argument(đối số)
function test(a) {
  return a; // a là param
}
test(100); // 100 là arg

//1 Factory Functions
function createPerson(name) {
  return {
    name,
    age: 23,
  };
}

//1 x++ và ++x
let x = 10;
let y = ++x; // Cộng x thành 11 rồi mới set cho y => y = x = 10 + 1 = 11
y = x++; // Cho y thành giá trị của x hiện tại, rồi mới + 1 cho x => y = 11, x = 11 + 1 = 12
