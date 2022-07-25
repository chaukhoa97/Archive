// Generics: Lấy param làm typedef

//1 Default generics value
type F1<T = string> = (a: T) => any;
const Fn1: F1 = (a) => a.split(" "); // Ko khai báo thì default là string -> Dùng `split` dc

//1 Ép type cho Function bằng Interface
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
interface GenericIdentityFn2 {
  <Type>(arg: Type): Type;
}
function identity<Type>(arg: Type): number {
  console.log(arg);
  return 10;
}
//! Cả 2 đều Error: fn `identity` trả về number (khác <Type>), còn `GenericIdentityFn` và `GenericIdentityFn2` ép phải trả về <Type>.
let myIdentity: GenericIdentityFn = identity;
let myIdentity2: GenericIdentityFn2<string | boolean> = identity;

//2 Multi Generics Function
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
//! Ràng buộc `T` phải ÍT NHẤT có `length` property
function minLength<T extends { length: number }>(obj: T, minimum: number): T {
  if (obj.length >= minimum) {
    return obj;
  }
  return { length: minimum };
}
//2 `keyof` use case with Generic Constraint
let x = { a: 1, b: 2, c: 3, d: 4 };
function getProperty3<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
getProperty3(x, "a");
getProperty3(x, "m");
//2 Error-prone example: Nên áp type cho param <Type>(arr: Type[]) thay vì constraint <Type extends any[]>(arr: Type)
let firstElement1 = <Type>(arr: Type[]) => arr[0];
let firstElement2 = <Type extends any[]>(arr: Type) => arr[0];

const f1 = firstElement1([1, 2, 3]); // f1: number (good)
const f2 = firstElement2([1, 2, 3]); // f2: any (bad)
