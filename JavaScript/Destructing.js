// Destructuring Assignment là một cú pháp cho phép tách dữ liệu được lưu trữ bên trong (nested) Objects hoặc Arrays (tổng quát hơn là các iterable values) và gán chúng cho các biến riêng biệt.
//? Array
function f() {
  return [1, 2];
}
[firstElelement, , thirdElement = 5] = f(); // fE = 1;  tE = 5

//? Object
const { a, b = 'default b' } = { a: 3, c: 5, d: 6 }; //! Nếu không có const, JS sẽ hiểu vế trái là 1 block chứ k phải 1 object literal.
console.log(a, b); // 3, 'default b'
const { a, ...rest } = { a: 1, b: 2, c: 3, d: 4 }; // rest = { b: 2, c: 3, d: 4 };

//? Destructing Parameters
function createUser({ id, fullName: { firstName, lastName } }) {
  console.log(id, firstName, lastName);
}

createUser({
  id: 42,
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  },
});
