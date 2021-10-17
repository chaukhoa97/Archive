const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

//* Dừng ngay ở chỗ check xem có dog key hay không
adventurer.dog?.age; // undefined
adventurer.someNonExistentMethod?.(); // undefined
