//? Enum
/// Number enum
{
  enum Status0 {
    Pending, // 0
    Approved, // 1
    Rejected, // 2
  }
  enum Status1 {
    Pending = 1, // 1
    Approved, // 2
    Rejected = 10, // 10
  }
  const s1: Status0 = Status0.Approved;
  const sAny: Status1 = 1000;
  // Reverse mapping
  console.log(Status1[10]); // Rejected
}
/// String enum: KHÔNG REVERSE MAPPING như Number enum dc
{
  enum ResponseTypes {
    Success = 'SUCCESS',
    Error = 'ERROR',
  }
  const ss: ResponseTypes.Success = ResponseTypes.Success; // 'SUCCESS'
}

//? Non-null assertion Operator:
//! Only use ! when you know that the value can’t be null or undefined.
function liveDangerously(x?: number | null) {
  //* No error
  console.log(x!.toFixed());
}

//? Extends keyof
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let str = prop({ name: 'John' }, 'name'); // 'John'

//? Narrowing
/// in
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    animal;
  } else {
    animal;
  }
}
/// instanceof
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString());
  } else {
    console.log(x.toUpperCase());
  }
}

//? never type: represents a state which should never occur
interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}
type Shape = Circle | Square;
function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
