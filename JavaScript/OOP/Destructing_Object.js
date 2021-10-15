//? Basic
const { a, b = 'default value' } = { a: 3, c: 5, d: 6 }; //! Nếu không có const, JS sẽ hiểu vế trái là 1 block chứ k phải 1 object literal.
console.log(a, b); // 3, 'default value'

//? Composition
const user = {
  id: 42,
  displayName: 'jDoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  },
};
function printInfo({
  id,
  displayName = 'default display name',
  fullName: { firstName: name },
}) {
  return `${id}.${displayName} is ${name}`;
}
printInfo(user); // "42.jDoe is John"
//* Dò xem trong object "user" có các property ở trong Param Object không: id, displayName & firstName(đổi thành "name")
//* Nếu không -> ReferenceError, nếu có đủ -> thực hiện tiếp(ở đây là console.log ra)
