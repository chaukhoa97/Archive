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
