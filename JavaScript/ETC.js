//? ... Spread Operator vs Rest Operator
{
  // The Spread Operator: Split up Array elements/Object Properties
  const newArray = [...firstArray, 10, ...secondArray];
  const newObject = { ...oldObject, newProp: 'New property value' };

  // The Rest Operator: Merge FUNCTION ARGUMENTS vào một array --> Có thể dùng các Array method lên các arguments đó
  function showArgs(time, ...args) {} //* args = [...]
}

//? Const -> No re-assign or re-declare vs Let
{
  //* OK
  const ob = {};
  ob.foo = 'bar'; // {foo : 'bar'}
  ob.foo = 'bar2'; // {foo : 'bar2'}

  const ar = [];
  ar.push('foo'); // ['foo']
  ar.pop(); // []

  //! ERR
  const t = 'a';
  t = 'b'; // error - re-assigning
  const t = 'c'; // error - re-declaring

  ob = { key1: 'foo' }; // error - re-assigning
  const ob = { key1: 'foo' }; // error - re-declaring
}

//? Parameter(tham số) & Argument(đối số)
function test(a) {
  return a; // a là param
}
test(100); // 100 là arg

//? Factory Functions
function createPerson(name) {
  return {
    name,
    age: 23,
  };
}

//? x++ và ++x
let x = 10;
let y = ++x; // Cộng x thành 11 rồi mới set cho y => y = x = 10 + 1 = 11
y = x++; // Cho y thành giá trị của x hiện tại, rồi mới + 1 cho x => y = 11, x = 11 + 1 = 12
