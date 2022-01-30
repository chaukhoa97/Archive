var obj = { a: 1, b: 2, c: 3 };
Object.keys(obj); // => ['a', 'b', 'c']
Object.values(obj); // => [1, 2, 3]
Object.entries(obj); // => [['a', 1], ['b', 2], ['c', 3]]

//1 Object.assign
const source = { b: 4, c: 5 };
const target = { a: 1, b: 2 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // Object { a: 1, b: 4, c: 5 }
console.log(target); // Object { a: 1, b: 4, c: 5 }
console.log(source); // Object { b: 4, c: 5 };

//1 Lodash
var _ = require('lodash');

//2 Shallow Copy vs Deep Copy:
var obj = [{ a: 1 }, { b: 2 }]; // _isEqual -> true; == -> false
var shallow = _.clone(obj);
console.log(shallow[0] === obj[0]); // => true
var deep = _.cloneDeep(obj);
console.log(deep[0] === obj[0]); // => false

var obj = { a: 1 };
var other = { a: 1 };
_.isEqual(obj, other); // => true

var users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};
_.findKey(users, (o) => o.age < 40); // => 'barney'
_.findKey(users, { age: 1, active: true }); // => 'pebbles'
_.findKey(users, ['active', false]); // => 'fred'
_.findKey(users, 'active'); // => 'barney'
