//? Function type expression: Cú pháp giống arrow fn
type GreetFunction = (a: string) => void; // A function with 1 param, named `a`, of type string, that doesn’t have a return value. Just like with function declarations, if a parameter type isn’t specified, it’s implicitly `any`
function greeter(fn: GreetFunction) {
  fn('Hello');
}

//? Call Signature - function ngoài being callable còn có thêm properties: Dùng `:` thay vì =>
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}

//? Generic Function
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}
//* Infer: <Input> dc infer theo type của argument array: string; <Output> dc infer theo type của return value từ function(`parseInt`): number
const parsed = map(['1', '2', '3'], (n) => parseInt(n)); // Array<string>, ( arg: string ) => number

//? Constraint
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
