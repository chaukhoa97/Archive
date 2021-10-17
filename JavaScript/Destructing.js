//? Array
function f() {
  // Doing some shits...
  return [1, 2];
}
[firstElelement, , thirdElement = 5] = f();
console.log(firstElelement, thirdElement); // 1 5

//? Object
const { a, b = 'default value' } = { a: 3, c: 5, d: 6 }; //! Nếu không có const, JS sẽ hiểu vế trái là 1 block chứ k phải 1 object literal.
console.log(a, b); // 3, 'default value'

//? Composition
const user = {
  id: 42,
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  },
};
function printInfo({ fuckID = 0, fullName: { firstName: name } }) {
  return [fuckID, name];
}
//* Dò xem trong object `user` có các property ở trong Param Object không:
// fuckID: undefined -> 0 do có set default; fullName.firstName(đổi thành "name"): John
printInfo(user); // [0 , John ]
