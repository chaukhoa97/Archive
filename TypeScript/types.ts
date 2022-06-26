//1 Conditional Types: Left assignable to Right ? A : B
type IdLabel = number;
type NameLabel = string;
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
//2 `never` use case with conditional types
//3 Ex1
type NonNullable2<T> = T extends null | undefined ? never : T;
type B2 = NonNullable<number | null>; // number
//3 Ex2
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
interface Email {
  message: string;
}
interface Dog {
  bark(): void;
}
type EmailMessageContents = MessageOf<Email>; // string
type DogMessageContents = MessageOf<Dog>; // never

//2 Distributive Conditional Types
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | boolean>; // string[] | boolean[]

//1 Type Assertion: Quả quyết với type-system là variable đó có type như vậy
//! Only be used to more or less specific type; không thể có ~ chuyển đổi vô lý như `"hello" as number`
//2 `unknown` use case with Type Assertion
let foo: unknown = 10;
const upperCase = (x: string) => console.log(x.toUpperCase());
upperCase(foo as string); //* Assert là string nên type-system ko báo lỗi, lúc run mới ra lỗi TypeError: number ko có method toUpperCase

//2 Non-null assertion Operator - Only use it when you know that the value can’t be null or undefined.
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed()); // No error
}

//2 `as const` -> infer the most specific; default ko type gì -> infer the most general
const sekai = 1; //* Literal Types: const sekai: 1 (kiểu type là "1" luôn chứ kp là number, vì const kbh thay đổi)
const req = { url: "https://example.com", method: "GET" } as const; //* Chuyển all obj property về Literal types hết: url: "https://example.com"; method: "GET"
const twoArgFn1 = ([a = 1, b = "b"]) => [a, b]; // return type: [string | number][]
const twoArgFn2 = ([a = 1, b = "b"]) => [a, b] as const; // return type: readonly [number, string]

//1 unknown: Similar to `any`, but safer because u can't do anything with it
let vAny: any = 10;
let vUnknown: unknown = 10; //* We can assign anything to unknown just like any

let s1: string = vAny; // `any` is assignable to anything

let s2: string = vUnknown; //! Invalid; we can't assign `unknown` to any other type (without an explicit assertion)
let s3: string = vUnknown as string; //* ok

vAny.method(); // Ok; anything goes with any
vUnknown.method(); //! Not ok; we don't know anything about this variable

//1 Utility Types:
//2 Record<Keys, Type>: An object type whose property keys are `Keys` and whose property values are `Type`
type anUnknownObj = Record<string, unknown>;
type CatName = "miffy" | "boris" | "mordred";
interface CatInfo {
  age: number;
  breed: string;
}
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

//1 Indexed Access Types:
type Person3 = { age: number; name: string; alive: boolean };
type Age = Person3["age" | "alive"]; //! Viết là Person3.age -> Lỗi syntax
//2 Using `number` to get the type of an array's elements
const tuple3: [number, string] = [1, "2"];
type typeOfTuple3 = typeof tuple3[number]; // string | number

//1 TS Template Literals:
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
