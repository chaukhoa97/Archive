// Generics: Lấy param làm typedef
const stringList: Array<string> = ['a', 'b', 'c', 'd', 'e'];

//1 Generics with Function
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
function identity<Type = string>(arg: Type): Type {
  // Nếu ko specify cho `Type`, sẽ dc mặc định là string
  return arg;
}
let myIdentity: GenericIdentityFn = identity;
let myIdentity3: GenericIdentityFn = (arg) => arg;
console.log(identity, myIdentity, myIdentity3);

interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}
function identity2<Type>(arg: Type): Type {
  return arg;
}
let myIdentity2: GenericIdentityFn2<number> = identity;
