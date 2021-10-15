function canSwim({ name }) {
  return { swim: () => console.log(`${name} is swimming`) };
}
function canWalk({ name }) {
  return { walk: () => console.log(`${name} is walking`) };
}

// Trong Param Object ở line 1 có property "name" nên khi truyền Param "animal" vào - ...canSwim(animal),
// dò xem trong object "animal" ở trong function createDragon này, có key tên là "name" không,
// ở đây name ở trong object "animal" chính là param "name" truyền vào trong function createDragon(name)
function createDragon(name) {
  const animal = { name };
  return { ...animal, ...canSwim(animal), ...canWalk(animal) };
}
dragon1 = createDragon('bro'); // Bao gồm name, swim() và walk()
