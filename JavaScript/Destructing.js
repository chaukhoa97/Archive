// Destructuring Assignment là một cú pháp cho phép tách dữ liệu được lưu trữ bên trong (nested) Objects hoặc Arrays (tổng quát hơn là các iterable values) và gán chúng cho các biến riêng biệt.
//? Array
function f() {
  return [1, 2];
}
[fE, , tE = 5] = f(); // fE = 1; tE = 5

//? Object
const { a, b = 'default b' } = { a: 3, c: 5, d: 6 }; //! Nếu không có const, JS sẽ hiểu vế trái là 1 block chứ k phải 1 object literal.
console.log(a, b); // 3, 'default b'
const { a, ...rest } = { a: 1, b: 2, c: 3, d: 4 }; // rest = { b: 2, c: 3, d: 4 };

//? Parameter Destructuring
/// JS:
function sum({ a, b, c }) {
  console.log(a + b + c);
}

/// TS:
function sum2({ a, b, c }: { a: number, b: number, c: number }) {
  console.log(a + b + c);
}
type ABC = { a: number, b: number, c: number };
function sum3({ a, b, c }: ABC) {
  console.log(a + b + c);
}
//! TS sai: Lấy `a` và redefine lại tên của `a` là `number`
function sum4({ a: number, b: string }) {
  console.log(a + b);
}
