// Destructuring Assignment là một cú pháp cho phép tách dữ liệu được lưu trữ bên trong (nested) Objects hoặc Arrays (tổng quát hơn là các iterable values) và gán chúng cho các biến riêng biệt.
//1 Array
function f() {
  return [1, 2];
}
const [fE, , tE = 5] = f(); // fE = 1; tE = 5

//1 Object
const { a: vip, b = "default b" } = { a: 3, c: 5, d: 6 }; //1 vip = 3; b = 'default b'
const { c, ...rest } = { a: 1, b: 2, c: 3, d: 4 }; // rest = { d: 4 };

//1 Nested Destructuring
const {
  data: {
    plans,
    plans: [plan1, plan2],
  },
} = {
  data: {
    plans: [
      { a: 1, b: 2 },
      { a: 3, b: 4 },
    ],
  },
};
console.log(plans, plan1, plan2);

//1 Parameter Destructuring
//2 JS:
function sum({ a, b, c }) {
  console.log(a + b + c);
}

//2 TS:
let sum2 = ({ a, b }: { a: number; b: number }) => a + b;

type AB = { a: number; b: number };
let sum3 = ({ a, b }: AB) => a + b;

let sum4 = ({ a: number, b: string }) => a + b; //! Sai: Lấy `a` và redefine lại tên của `a` là `number`
