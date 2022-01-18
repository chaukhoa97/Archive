//1 Enum
//2 Number enum
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
//2 String enum: KHÔNG REVERSE MAPPING như Number enum dc
{
  enum ResponseTypes {
    Success = 'SUCCESS',
    Error = 'ERROR',
  }
  const ss: ResponseTypes.Success = ResponseTypes.Success; // 'SUCCESS'
}

//1 Non-null assertion Operator:
//! Only use ! when you know that the value can’t be null or undefined.
function liveDangerously(x?: number | null) {
  //* No error
  console.log(x!.toFixed());
}

//1 Narrowing
//2 keyof: array_object.ts line 36
//3 extends keyof
function getProperty5<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const person7: Person = {
  age: 22,
  name: 'Tobias',
};
const name4 = getProperty5(person7, 'name'); // Ok, name is a property of Person
const gender = getProperty5(person7, 'gender'); //! Error,'gender' is not a property of Person
//3 in keyof
type Optional<T> = {
  [K in keyof T]?: T[K];
};

const person4: Optional<Person> = {
  name: 'Tobias', //* No need to specify age anymore, since age's type is now mapped from 'number' to 'number?', and therefore becomes optional
};

//2 in: if an object has a property with a name
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
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
