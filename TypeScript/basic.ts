//1 Basics
let a: number = 1; // infer: let a = 1
let idArray: number[] = [1, 2, 3, 4, 5]; //! hoặc Array<number>

//1 Type(alias): A name for any `Type`
type StringOrNumber = string | number; // Đặt tên cho "string | number" type là "StringOrNumber"
type User = { name: string; readonly age?: number }; //* readonly: không thể thay đổi giá trị của biến
let user: User = { name: 'John', age: 25 }; //! user.age = 30 -> Error: Cannot assign to 'age' because it is a read-only property.

//1 Interface: Another way to name an OBJECT type (chỉ dùng dc cho object)
interface Person {
  name: string;
  readonly age?: number;
  //* Có 2 cách để định nghĩa một method trong một interface
  log1?: (message: string) => void; // Function as property declaration
  log2?(message: string): void; // Method declaration
  (message: string): string; //1 Call Signature line 7 function.ts
}
function doSomething2(fn: Person) {
  console.log(fn.name + ' returned ' + fn('khoa'));
}
const fnArg2 = (n: string) => n;
fnArg2.name = 'fnArg2';
console.log(fnArg2); // [Function: fnArg2] { name: 'fnArg2' }
doSomething2(fnArg2);
//2 `type` ko declare thêm vào dc, còn `interface` thì có -> dùng `interface` cho public API để người dùng tự thêm vào, còn `type` cho Props hay State vì nó nhất quán hơn.
{
  interface Person {
    //! Có thể override Interface's fn, nhưng ko thể override Interface's property --> log1?: (message: string) => void ~> Error
    log2?(message: number): void; // ok
  }
  type Userr = { id: number }; //! Error: type duplicate line 13
}

//1 Intersection(& || extends) Combine 2 interface Identity & Contact -> type Customer/interface Customer2 = { name, email, gender }
{
  interface Identity {
    name: string;
  }
  interface Contact {
    email: string;
  }
  type Customer = Identity & Contact & { gender: string }; //! type cũng có thể dc tạo từ 2 interface intersection
  interface Customer2 extends Identity, Contact {
    gender: string;
  }
}
