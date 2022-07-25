//1 Tuple: Superset of Array - Knows exactly how many elements it contains, and exactly which types it contains at specific positions.
let tuple1: [string, number, number?] = ["John", 25]; // tuple1.length = 2 | 3
let tupleArray: [string, number][] = [
  ["John", 25],
  ["Uyen", 23],
];
var tuple2: [string, ...boolean[], number] = ["John", true, false, 1]; //* Rest elements must be array type

//1 readonly
interface Home {
  readonly resident: { name: string; age: number };
}
const h: Home = {
  resident: {
    name: "John",
    age: 20,
  },
};
// We can update properties of `home.resident`
h.resident.name = "Bro";
// But we can't write to the 'resident' property itself on a 'Home'.
h.resident = {
  name: "Victor the Evictor",
  age: 42,
};

//1 Enum
//2 Number enum
enum Status1 {
  Pending, // 0
  Approved, // 1
  Rejected = 10,
}
console.log(Status1["Rejected"]); // 10
// Reverse mapping
console.log(Status1[10]); // Rejected

//2 String enum: KHÔNG REVERSE MAPPING như Number Enum dc
enum Status2 {
  Pending = "0",
  Approved = "1",
}
const ss = Status2.Pending; // "0"
const bb = Status2[0]; // undefined
type ResponseTypes = keyof typeof Status2; // "Pending" | "Approved"

//1 Narrowing
//2 keyof
type Point = { x: number; y: number };
type P = keyof Point; // type P = 'x' | 'y'

//2 `in`: Use to check if an object has a specific property
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal.swim;
  } else {
    animal;
  }
}

//2 instanceof
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString());
  } else {
    console.log(x.toUpperCase());
  }
}
