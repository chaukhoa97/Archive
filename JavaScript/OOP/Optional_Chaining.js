//! Optional Chaining là "?.", KHÔNG PHẢI riêng dấu "?"
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};
const dogName = adventurer.dog?.age; // Dừng ngay ở chỗ check xem có dog key hay không
console.log(dogName); // undefined
console.log(adventurer.someNonExistentMethod?.()); // undefined
