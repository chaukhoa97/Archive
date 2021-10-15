function f() {
  // Doing some shits...
  return [1, 2];
}
[firstElelement, , thirdElement = 5] = f();
console.log(firstElelement, thirdElement); // 1 5
