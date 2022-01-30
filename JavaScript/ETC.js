//1 ... Spread Operator vs Rest Operator
{
  // The Spread Operator: Split up Array elements/Object Properties.
  //! Deep copy topmost data, shallow copy nested data.
  const newArray = [...firstArray, 10, ...secondArray];
  const newObject = { ...oldObject, newProp: 'New property value' };

  // The Rest Operator: Merge FUNCTION ARGUMENTS vào một array --> Có thể dùng các Array method lên các arguments đó
  function showArgs(time, ...args) {} //* args = [...]
}

//1 Closures bao gồm: Function và References tới các biến ở outer scope của function đó (Lexical Environment). Trong JS, closures của 1 function dc tạo ra ở thời điểm declare function đó.
{
  function f1() {
    let x = 0; // Dc giữ lại trong closure
    let y = 0; // Dc dọn dẹp bởi garbage collector
    return function f2() {
      // f2 truy cập dc variables ở outer scope
      x += 2;
      console.log(x);
      return x;
    };
  }
  const f3 = f1(); // execute f1() returns f2 -> những biến ở outer scope của f2 sẽ dc giữ lại.
  f3(); //1 2
  f3(); //1 4
  console.log(x); // ReferenceError: Biến x chỉ dc sử dụng trong f1
}

//1 Hoisting
add(3, 4); //* returns 7
// Function declaretion -> hoisting lên đầu
function add(num1, num2) {
  return num1 + num2;
}

//* Function expression -> ko hoisting
subtract(7, 4); //! Uncaught TypeError: subtract is not a function
var subtract = function (num1, num2) {
  return num1 - num2;
};

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

//1 Const property update
{
  //* OK
  const obj = {};
  obj.foo = 'bar'; // {foo : 'bar'}
  obj.foo = 'bar2'; // {foo : 'bar2'}

  const ar = [];
  ar.push('foo'); // ['foo']
  ar.pop(); // []

  //! ERR
  const text = 'a';
  text = 'b'; // error - re-assigning
  const text = 'c'; // error - re-declaring

  obj = { key1: 'foo' }; // error - re-assigning
  const obj = { key1: 'foo' }; // error - re-declaring
}

//1 Optional Chaining
{
  const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
    },
  };

  //* Không có property -> dừng lại và trả về undefined
  adventurer.dog?.age; // undefined
  adventurer.someNonExistentMethod?.(); // undefined
}

//1 Date
{
  Date.now(); // Returns numbers. Faster than new Date().getTime()
  const eventTime = new Date(); // Tue Nov 16 2021 23:37:35 GMT+0700 (Indochina Time)
  eventTime.toLocaleString(); // 11/16/2021, 11:37:35 PM
  eventTime.toLocaleDateString(); // 11/16/2021
  eventTime.toLocaleTimeString(); // 11:37:35 PM
}

//1 Arrow Fn:
const add = (num1, num2) => num1 + num2;
const add2 = (num1, num2) => {
  return num1 + num2;
};

//1 x++ và ++x
let x = 10;
let y = ++x; // Cộng x thành 11 rồi mới set cho y => y = x = 10 + 1 = 11
y = x++; // Cho y thành giá trị của x hiện tại, rồi mới + 1 cho x => y = 11, x = 11 + 1 = 12
