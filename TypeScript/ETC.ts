//1 Enum
//2 Number enum
{
  enum Status0 {
    Pending, // 0
    Approved, // 1
    Rejected, // 2
  }
  enum Status1 {
    Pending = 1,
    Approved, // Tự động = 2
    Rejected = 10,
  }
  const s1: Status0 = Status0.Approved;
  const sAny: Status1 = 1000;
  // Reverse mapping
  console.log(Status1[10]); // Rejected
}
//2 String enum: KHÔNG REVERSE MAPPING như Number enum dc
{
  enum Responses {
    Error = "0",
    Success = "1",
  }
  const ss = Responses.Error; // "0"
  type ResponseTypes = keyof typeof Responses; // "Error" | "Success"
}

//1 Narrowing
//2 in: if an object has a property with a name
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
//3 in keyof
//* keyof: array_object line 36
type Optional<T> = {
  [K in keyof T]?: T[K];
};
const person4: Optional<Person> = {
  name: "Tobias", //* No need to specify age anymore, since age's type is now mapped from 'number' to 'number?', and therefore becomes optional
};

//2 instanceof
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString());
  } else {
    console.log(x.toUpperCase());
  }
}
