//? Shallow Copy: If the source value is a reference to an object, it only copies the reference value.
// Ở đây b:{c:3} là reference value, mà assign chỉ copy được reference value -> nếu thay c thì tất cả thay đổi theo
// Còn nếu thay đổi a thì không bị, vì a là primitive value
const A1 = { a: 1, b: { c: 3 } };
const A2 = { ...A1 };
const A3 = Object.assign({}, A1);
A2.a = 10; //! A1.a = 1 (không đổi)
A3.b.c = 10; //! A1.b.c = 10 (đổi)
// Deep Copy: Tách hoàn toàn khác với SC, nên dùng thư viện ngoài như Lodash
const A4 = JSON.parse(JSON.stringify(A1)); //* A4 = {a:1, b: {c:10} }
