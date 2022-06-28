//1 Function Type expression:
//2. Cách 1: Truyền trực tiếp (syntax tương tự arrowFn)
const greeter = (a: string): void => {
  console.log(a);
};
function greeter1(a: string) {
  console.log(a); // return type dc infer là void
}
//2 Cách 2: Khai báo qua `type`, CHỈ DÙNG DC CHO FN THƯỜNG
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  fn("Hello");
}

//1 Call Signature - function ngoài being callable còn có thêm properties
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
