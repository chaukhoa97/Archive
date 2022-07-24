let idArray: number[] = [1, 2, 3, 4, 5]; //! hoặc Array<number>
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

//1 Interface: Another way to name an OBJECT type (chỉ dùng dc cho object)
interface Person {
  // Có 2 cách để định nghĩa một method trong một interface
  log1?: (message: string) => void; // Function in Property declaration
  log2?(message: string): void; // Method declaration
}
//2 Extend interface
interface Person {
  log1?: (message: number) => void; //! Có thể override Interface's fn, nhưng ko thể override Interface's property --> log1?: (message: string) => void ~> Error
  log2?(message: number): void; //* OK
}

//1 Intersection(& || extends) Combine types/interfaces lại với nhau
type Identity = {
  name: string;
};
interface Contact {
  email: string;
}
type Customer = Identity & Contact & { gender: string }; //! type cũng có thể dc tạo từ 2 interface intersection
interface Customer2 extends Identity, Contact {
  gender: string;
}

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
