//? Finding REFERENCE Elements
const fruits = [
  { name: 'cherry', quantity: 9 },
  { name: 'apple', quantity: 80 },
];
foundFruit = fruits.find((fruit) => fruit.name === 'apple');
console.log(foundFruit);
