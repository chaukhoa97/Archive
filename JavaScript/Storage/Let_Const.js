//? Const -> No re-assign or re-declare

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
