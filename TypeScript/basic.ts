//1 Type(alias): A name for any `Type`
type StringOrNumber = string | number;
type User = { name: string; readonly age?: number };

//1 Interface: Another way to name an OBJECT type (chỉ dùng dc cho object)
interface Person {
  name: string;
  readonly age?: number;
  //* Có 2 cách để định nghĩa một method trong một interface
  log1?: (message: string) => void; // Function in Property declaration
  log2?(message: string): void; // Method declaration
}
//2 `type` ko declare thêm vào dc, còn `interface` thì có -> dùng `interface` cho public API để người dùng tự thêm vào, còn `type` cho Props hay State vì nó nhất quán hơn.
interface Person {
  log1?: (message: number) => void; //! Có thể override Interface's fn, nhưng ko thể override Interface's property --> log1?: (message: string) => void ~> Error
  log2?(message: number): void; // ok
}
type User = { id: number }; //! Error: type duplicate line 3

//1 Intersection(& || extends) Combine types/interfaces lại với nhau
type Identity = {
  name: string;
};
interface Contact {
  email: string;
}
type Customer = Identity & Contact & { gender: string }; //! type cũng có thể dc tạo từ 2 interface intersection
interface Customer2 extends Identity, Contact {
  gender: string;
}

//1 [Type-assign Table](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability)
//* undefined ->(assign to) null = ✓
const test1 = (x: null) => {};
test1(undefined);

//! object -> void = X
const test2 = (x: void) => {};
test2({ id: 1 });
