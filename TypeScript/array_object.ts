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
  readonly resident: { name: string; age?: number };
}
function visitForBirthday(home: Home) {
  // We can update properties of `home.resident`
  home.resident.age++;
  home.resident.name = "Bro";
}
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
    name: "Victor the Evictor",
    age: 42,
  };
}

//1 Index Signature:
interface NumberOrStringDictionary {
  //! An index signature property type must be either ‘string’ or ‘number’
  [index: string | number]: any; //* NumberOrStringDictionary can have any number of properties, với value là `any`
  length: number;
  name: string;
  1: string;
}
let aa: NumberOrStringDictionary = { length: 8, name: "bro", 1: "one" }; // aa.length = 8; aa.name = 'bro'; aa[1] = 'one';

//1 keyof
type Point = { x: number; y: number };
type P = keyof Point; // type P = 'x' | 'y'
//2 If the type has a string or number `Index signature`, keyof will return those types instead:
type N = keyof NumberOrStringDictionary; //* type N = string | number vì obj[0] và obj["0"] giống nhau
