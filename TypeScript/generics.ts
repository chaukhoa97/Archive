// Generics: Lấy param làm typedef
const stringList: Array<string> = ['a', 'b', 'c', 'd', 'e'];
const personList: Array<Person> = [{ name: 'John' }, { name: 'Uyen' }];

//? Generics with Function
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
function identity<Type>(arg: Type): Type {
  return arg;
}
let myIdentity: GenericIdentityFn = identity;
let myIdentity3: GenericIdentityFn = (arg) => arg;
console.log(myIdentity, myIdentity3);
console.log(identity, myIdentity);

interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}
function identity2<Type>(arg: Type): Type {
  return arg;
}
let myIdentity2: GenericIdentityFn2<number> = identity;
