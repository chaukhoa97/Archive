// Destructuring Assignment là một cú pháp cho phép tách dữ liệu được lưu trữ bên trong (nested) Objects hoặc Arrays (tổng quát hơn là các iterable values) và gán chúng cho các biến riêng biệt.
//? Array
function f() {
  return [1, 2];
}
[firstElelement, , thirdElement = 5] = f(); // fE = 1;  tE = 5

//? Object
const { a, b = 'default b' } = { a: 3, c: 5, d: 6 }; //! Nếu không có const, JS sẽ hiểu vế trái là 1 block chứ k phải 1 object literal.
console.log(a, b); // 3, 'default b'

//? Destructing Parameters
const user = {
  id: 42,
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  },
};
function printInfo({ foo = 0, fullName: { firstName: name } }) {
  return [foo, name];
}
//* Dò xem trong object `user` có các property ở trong Param Object không:
// foo: undefined -> 0 do có set default; fullName.firstName(đổi thành "name"): John
printInfo(user); // [0 , John ]
