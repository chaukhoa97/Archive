//1 Function Type expression:
//2. Cách 1: Truyền trực tiếp vào ONLY ARROW FN
const GreetFunction2 = (a: string): void => {
  console.log(a);
};
//2 Cách 2: Khai báo qua `type`, dùng fn thường hay arrow fn đều dc
type GreetFunction = (a: string) => void; // A function with 1 param, named `a`, of type `string`, that doesn’t have a return value. Just like with function declarations, if a parameter type isn’t specified, it’s implicitly `any`
function greeter(fn: GreetFunction) {
  fn("Hello");
}

//1 Call Signature - function ngoài being callable còn có thêm properties: Dùng `:` thay vì `=>`
type DescribableFunction = {
  description: string;
  (someArg: number): number;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returns " + fn(6));
}
const fnArg = (n: number) => n;
fnArg.description = "This is a function";
console.log(fnArg); // [Function: fn] { description: 'This is a function' }
doSomething(fnArg);
