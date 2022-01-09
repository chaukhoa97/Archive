//? Function Type expression: Cú pháp giống arrow fn
type GreetFunction = (a: string) => void; // A function with 1 param, named `a`, of type `string`, that doesn’t have a return value. Just like with function declarations, if a parameter type isn’t specified, it’s implicitly `any`
function greeter(fn: GreetFunction) {
  fn('Hello');
}

//? Call Signature - function ngoài being callable còn có thêm properties: Dùng `:` thay vì =>
type DescribableFunction = {
  description: string;
  (someArg: number): number;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}
const fnArg = (n: number) => n;
fnArg.description = 'This is a function';
console.log(fnArg); // [Function: fn] { description: 'This is a function' }
doSomething(fnArg);

//? Generic Function: Phải relate multiple types. Ex: Relate giữa input & output, hay giữa các input với nhau
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}
//* Infer: <Input> dc infer theo type của `argument array`: string; <Output> dc infer theo type của `return value` từ function(`parseInt`): number
const parsed = map(['1', '2', '3'], (n) => parseInt(n)); // Array<string>, ( arg: string ) => number

/// Constraint
//* Ràng buộc `Type` phải có `length` property
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}
const longerArray = longest([1, 2], [1, 2, 3]); // longerArray is of type 'number[]'
const longerString = longest('alice', 'bob'); // longerString is of type 'alice' | 'bob'
const notOK = longest(10, 100); // Error! Numbers don't have a 'length' property
//! Error-prone: obj là array -> crash vì array đã có sẵn `length` property
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  }
  return { length: minimum };
}
//* Tip 1: Áp type cho param <Type>(arr: Type[]) thay vì constraint <Type extends any[]>(arr: Type)
let firstElement1 = <Type>(arr: Type[]) => arr[0];
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
const f1 = firstElement1([1, 2, 3]); // a: number (good)
const f2 = firstElement2([1, 2, 3]); // b: any (bad)

//? Other types
/// unknown: Similar to `any`, but safer because u can't do anything with it
let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method(); // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable
/// Void: Khi function không return gì cả
function print(msg: string): void {
  console.log(msg);
}
