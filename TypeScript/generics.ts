// Generics: Lấy param làm typedef
const stringList: Array<string> = ["a", "b", "c", "d", "e"];

//1 Ép type cho Function bằng Interface
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
interface GenericIdentityFn2 {
  <Type>(arg: Type): Type;
}
function identity<Type = string>(arg: Type): number {
  //! Nếu ko specify cho `Type`, sẽ dc mặc định là string
  console.log(arg);
  return 10;
}
//! Cả 2 đều Error: fn `identity` trả về number (khác <Type>), còn `GenericIdentityFn` và `GenericIdentityFn2` ép phải trả về <Type>.
let myIdentity: GenericIdentityFn = identity;
let myIdentity2: GenericIdentityFn2<string | boolean> = identity;

//1 Multi Generics Function
//! Các Generic phải relate với nhau. Ex: Relate giữa input & output, hay giữa các input với nhau
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}
//* Infer: <Input> dc infer theo type của `argument array`: string; <Output> dc infer theo type của `return value` từ function(`parseInt`): number
const parsed = map(["1", "2", "3"], (n) => parseInt(n)); // Array<string>, (arg: string) => number

//1 Generic Constraint - Ràng buộc
//! Ràng buộc `Type` phải ÍT NHẤT có `length` property
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  }
  return { length: minimum }; //! Error: Ừ thì '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }' - ví dụ như array
}
//2 extends keyof
let x = { a: 1, b: 2, c: 3, d: 4 };
function getProperty3<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
getProperty3(x, "a");
getProperty3(x, "m");

//2 Error-prone example: Nên áp type cho param <Type>(arr: Type[]) thay vì constraint <Type extends any[]>(arr: Type)
let firstElement1 = <Type>(arr: Type[]) => arr[0];
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
const f1 = firstElement1([1, 2, 3]); // f1: number (good)
const f2 = firstElement2([1, 2, 3]); // f2: any (bad)
