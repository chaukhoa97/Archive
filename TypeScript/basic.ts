//? Basics
let a: number = 1; // infer: let a = 1
const sekai = 1; // const sekai: 1 (kiểu type là "1" luôn chứ kp là number, vì const kbh thay đổi)
let idArray: number[] = [1, 2, 3, 4, 5]; //! hoặc Array<number>
let tuple: [string, number] = ['John', 25];
let tupleArray: [string, number][] = [
  ['John', 25],
  ['Uyen', 23],
];

//? Type(alias): A name for any `Type`
type StringOrNumber = string | number; // Đặt tên cho "string | number" type là "StringOrNumber"
type User = { name: string; readonly age?: number }; // readonly: không thể thay đổi giá trị của biến
let user: User = { name: 'John', age: 25 };

//? Interface: Another way to name an OBJECT type (chỉ dùng dc cho object)
interface Person {
  name: string;
  readonly age?: number;
} //! Ko có = như Type
let person: Person = { id: 1, name: 'John' }; // Có `id` do đã dd thêm `id` vào Interface `Person` ở line 75
//! Use Interface until you need to use Type. Always use Interface for public API. Prefer Interface over Intersections.
{
  interface Identity {
    name: string;
    age: number;
  }
  interface Contact {
    email: string;
    phone: string;
  }
  //* Intersection: Lấy các thuộc tính của 2 interface Identity & Contact ở trên
  type Customer = Identity & Contact & { gender: string }; // Customer = { name, age, email, phone }
  interface Customer2 extends Identity, Contact {
    gender: string;
  }
  let customer: Customer2 = {
    // Hoặc `let customer: Customer = ...`
    name: 'John',
    age: 25,
    email: '',
    phone: '',
    gender: 'male',
  };
}
//* `type` ko declare thêm vào dc, còn `interface` thì có -> dùng `interface` cho public API để người dùng tự thêm vào, còn `type` cho Props hay State vì nó nhất quán hơn.
interface Person {
  id: number;
} // ok
type Userr = { id: number }; // error duplicate line 41

//? Function
{
  //* Normal Fn
  function add(a: number = 0, b?: number): number {
    if (b) return a + b;
    return a;
  }
}
{
  //* Interface Fn
  interface AddFuncInterface {
    (a: number, b: number): number;
  }
  let interfaceAdd: AddFuncInterface = function (a, b) {
    return a + b;
  };
  interfaceAdd(1, 2); //! Chỉ cộng số chứ ko cộng string dc
}
{
  //* Void: Khi function không return gì cả
  function print(msg: string): void {
    console.log(msg);
  }
}

//? Type Assertion: Chỉ chuyển kiểu dữ liệu nếu có thể
let anyVar: any = '1';
let numberType: number = <number>anyVar;
let numberType2: number = anyVar as number;
function getState(state: 'active') {
  console.log(state);
}
let s = 'active'; // s: string
getState(s as 'active'); // Ép kiểu của s về 'active' trong function này

//? Generics: Lấy param làm Typedef
const stringList: Array<string> = ['a', 'b', 'c', 'd', 'e'];
const personList: Array<Person> = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Uyen' },
];
{
  //* Generics with Function
  function loggingIdentity<Type>(arg: readonly Type[]): readonly Type[] {
    console.log(arg.length);
    return arg;
  }
  loggingIdentity(stringList);
  // Hoặc:
  function li2<Type>(arg: ReadonlyArray<Type>): ReadonlyArray<Type> {
    //! readonly Array<Type> -> Error
    console.log(arg.length);
    return arg;
  }
}
{
  //* Generics with Interface
  interface GenericIdentityFn<T> {
    (arg: T): T; // TYPEDEF 1 Fn có param loại `T`, trả về cũng là loại `T`
  }
  function identity<Type>(arg: Type) {
    // Chức năng hàm
    if (typeof arg === 'number') return arg + 10;
    else return 1;
  }
  let myIdentity: GenericIdentityFn<number> = identity; // Áp chức năng hàm với TYPEDEF của interface
}
{
  //* Generic Constraint
  interface Lengthwise {
    length: number;
  }
  function loggingIdentity3<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); //! Có thể truy cập length vì đã extend từ Lengthwise
    return arg;
  }
  loggingIdentity3({ length: 10, value: 3 }); // Phải có thuộc tính `length`
}

//? Destructing Parameter (hơi khác so với JS). Dùng interface Person: { id, name, age? }
function createPerson({ id, name }: Person): Person {
  return { id, name };
}

//? keyof
type PersonKeys = keyof Person; // PersonKeys = 'id' | 'name' | 'age'
