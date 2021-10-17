let numbers = [1, 2]; // Sau khi del numbers = []
const anotherNumbers = numbers;
numbers = []; // anotherNumbers = [1, 2];
numbers.length = 0; // anotherNumbers = []
