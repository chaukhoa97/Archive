var _ = require('lodash');

//? Shallow Copy:
var objects = [{ a: 1 }, { b: 2 }];
var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]); // => true

//? Deep Copy:
var objects = [{ a: 1 }, { b: 2 }];
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]); // => false
