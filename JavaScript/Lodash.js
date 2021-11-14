var _ = require('lodash');

//* Shallow Copy:
var objects = [{ a: 1 }, { b: 2 }];
var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]); // => true

//* Deep Copy:
var objects = [{ a: 1 }, { b: 2 }];
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]); // => false

var object = { a: 1 };
var other = { a: 1 };
_.isEqual(object, other); // => true

_.zipObject(['a', 'b'], [1, 2]); //* => { 'a': 1, 'b': 2 }

_.groupBy([6.1, 4.2, 6.3], Math.floor); // => { '4': [4.2], '6': [6.1, 6.3] }
_.groupBy(['one', 'two', 'three'], 'length'); // => { '3': ['one', 'two'], '5': ['three'] }

_.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]

var objToSum = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
_.sumBy(objToSum, (o) => o.n); // => 20
_.sumBy(objToSum, 'n'); // => 20

var users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};
_.findKey(users, (o) => o.age < 40); // => 'barney'
_.findKey(users, { age: 1, active: true }); // => 'pebbles'
_.findKey(users, ['active', false]); // => 'fred'
_.findKey(users, 'active'); // => 'barney'
