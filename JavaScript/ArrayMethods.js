//! Mutate array cũ (A' === A --> TRUE)
//* Return value mới (Ko mutate array gốc)

//! Basics
const numbers = [3, 4];
numbers.push(5, 6); // Thêm vào cuối - [3, 4, 5, 6]
numbers.pop(); // Xóa số cuối - [3, 4, 5]
numbers.unshift(1, 2); // Thêm vào đầu - [1, 2, 3, 4, 5]
numbers.shift(); // Xóa số đầu - [2, 3, 4, 5]
numbers.reverse(); // Đảo ngược - [5, 4, 3, 2]
numbers.splice(2, 1, "a", "b"); // (fromIndex, deleteCount, item1, item2, ...); returns an array containing the deleted items

//* Set
uniqueArray = [...new Set(array)];

//* Filters, every, some - Same arguments: .filter((value,index,array)=>{...})
let numbers = [1, 2, 3, 4];
const allPositive = numbers.every((value) => value >= 0); // true
const atLeastOneNegative = numbers.some((value) => value <= 0); // false
const f = numbers.filter((n) => n > 5); //* New array

//* .concat & .slice Array
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second); // [1, 2, 3, 4, 5, 6]
const sliced = combined.slice(2, 5); // Ko tính end; cũng có thể dùng .slice(`omit`) để shallow copy

//1 Map & forEach
const arr = [1, 2, 3, 4, 5];
//* Map: Creating a NEW array containing output of some processing done on each element of the array.
const mappedArray = arr.map((value, index, array) => element.children);

//! forEach: Executes a provided function once per array element. For example, saving all elements in the database.
arr.forEach(
  (currentValue, index, arr) => arr[index] === currentValue, //! Dummy callback
  thisValue // The value used as the function's "this" value
); // returns undefined

//! Sort
// a - b <= 0 -> a, b giữ nguyên vị trí (vẫn a xếp trước b), còn > 0 thì đổi chỗ
anotherCombined.sort((a, b) => a - b);
// Sort theo text alphabet
users.sort((a, b) => a.firstname.localeCompare(b.firstname));

//* Joining & Spliting, first = [1, 2, 3]
const joined = first.join("+"); // Return string "1+2+3"
const split = joined.split("+"); // Về lại thành [1, 2, 3]. NOTE: Chỉ dùng dc lên string.

//* Finding PRIMITIVE Elements
numbers.indexOf(4, 0); // (value, fromIndex). Nếu ko có `value` trong arr -> Return -1
numbers.lastIndexOf("a", 2); // (value, fromIndex).
numbers.includes(1, 2); // (value, fromIndex). Returns boolean
numbers.find((value) => value > 2); // Returns the value of the FIRST element ok with the callback-> returns 3
numbers.findIndex((value) => value > 2); // Returns the index of the FIRST element ok with the callback

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

//* Move item in array to last position
// Already know the index of the item to move
array.push(array.splice(index, 1)[0]);
// If you don't have the index, and only the element
array.push(array.splice(array.indexOf(element), 1)[0]);

//1 Lodash
var _ = require("lodash");

_.zipObject(["a", "b"], [1, 2]); //* => { 'a': 1, 'b': 2 }

_.groupBy([6.1, 4.2, 6.3], Math.floor); // => { '4': [4.2], '6': [6.1, 6.3] }
_.groupBy(["one", "two", "three"], "length"); // => { '3': ['one', 'two'], '5': ['three'] }

_.chunk(["a", "b", "c", "d"], 3); // => [['a', 'b', 'c'], ['d']]

var objs = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
_.sumBy(objs, (o) => o.n); // => 20
_.sumBy(objs, "n"); // => 20
