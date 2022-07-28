//! Mutate array cũ (A' === A -> TRUE)
//* Return value mới (Ko mutate array gốc)

//! Basics
const numbers = [3, 4];
numbers.push(5, 6); // Thêm vào cuối
numbers.pop(); // Xóa 1 số cuối
numbers.unshift(1, 2); // Thêm vào đầu
numbers.shift(); // Xóa 1 số đầu
numbers.reverse(); // Đảo ngược
numbers.splice(2, 1, "a", "b"); // (fromIndex, deleteCount, item1, item2, ...); returns an array containing the deleted items
numbers.sort((a, b) => a - b); // Sort theo `compare fn`: Nếu returns < 0 thì a xếp trước b, 0 thì giữ nguyên
//! forEach: Executes a provided function once per array element (returns `undefined`), e.g. saving all elements in the database.
numbers.forEach((element, index) => {
  element.savingToDatabase();
});
//* Map: Creating a NEW array containing output of some processing done on each element of the array.
const newNumbers = arr.map((element, index) => {
  element += index;
});

//* .concat & .slice
const cc = [1, 2].concat([3, 4]); // [1, 2, 3, 4]
const sl = cc.slice(1, 3); // Index 1 2 (ko lấy 3); cũng có thể dùng .slice() để shallow copy

//* Filters, every, some - Same arguments: .filter((value, index, array)=>{...})
const f = numbers.filter((n) => n > 5); //* Returns new array
const allPositive = numbers.every((value) => value >= 0); // true
const atLeastOneNegative = numbers.some((value) => value <= 0); // false

//* Joining & Spliting
const joined = [1, 2, 3].join("+"); // Return string "1+2+3"
const split = joined.split("+"); // String method: Về lại thành [1, 2, 3]

//* Finding PRIMITIVE Elements
numbers.indexOf(4, 0); // (value, fromIndex). Nếu ko có `value` trong arr -> Return -1
numbers.lastIndexOf("a", 2); // (value, fromIndex).
numbers.includes(1, 2); // (value, fromIndex). Returns boolean
numbers.find((value) => value > 2); // Returns the value of the FIRST element ok with the callback-> returns 3
numbers.findIndex((value) => value > 2); // Returns the index of the FIRST element ok with the callback

//* Set
uniqueArray = [...new Set(array)];

//* Reduce
// first call: previousValue = 15, currentValue = 16, currentIndex = 1
// second call: previousValue = 31, currentValue = 17, currentIndex = 2
const summ = [15, 16, 17].reduce(
  (previousValue, currentValue, currentIndex) => {
    return previousValue + currentValue;
  },
  initialValue
);

//* Flat
var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]
arr2.flat(2); // [1, 2, 3, 4, 5, 6]

//1 Lodash
var _ = require("lodash");

_.zipObject(["a", "b"], [1, 2]); //* => { 'a': 1, 'b': 2 }

_.groupBy([6.1, 4.2, 6.3], Math.floor); // => { '4': [4.2], '6': [6.1, 6.3] }
_.groupBy(["one", "two", "three"], "length"); // => { '3': ['one', 'two'], '5': ['three'] }

_.chunk(["a", "b", "c", "d"], 3); // => [['a', 'b', 'c'], ['d']]

var objs = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
_.sumBy(objs, (o) => o.n); // => 20
_.sumBy(objs, "n"); // => 20
