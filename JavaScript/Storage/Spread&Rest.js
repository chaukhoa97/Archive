//? The Spread Operator: Split up Array elements/Object Properties
const newArray = [...firstArray, 10, ...secondArray];
const newObject = { ...oldObject, newProp: 'A new property' };

//? The Rest Operator: Merge FUNCTION ARGUMENTS vào một array --> Ở đây ó thể dùng các Array method lên args
function showArgs(time, ...args) {} // args = [...]
