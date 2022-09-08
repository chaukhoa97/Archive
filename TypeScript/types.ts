//1 `unknown`: Similar to `any`, but safer because u can't do anything with it
let foo: any = 10;
let bar: unknown = 10; //* We can assign anything to unknown just like any
const upperCase = (x: string) => console.log(x.toUpperCase());
upperCase(foo); // Ok, `any` can assign to anything
upperCase(bar); //! Invalid; we can't assign `unknown` to any other type (without an explicit assertion)
upperCase(bar as string); //* Assert là string nên type-system ko báo lỗi, lúc run mới ra lỗi TypeError: number ko có method toUpperCase

foo.method(); //* Ok; anything goes with any
bar.method(); //! Not ok; we don't know anything about this variable

//1 Utility Types:
//2 `Record<Keys, Type>`: An object type whose property keys are `Keys` and whose property values are `Type`
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
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
];
type Person = typeof MyArray[0];
type Name2 = typeof MyArray[0]["name"];

//1 Conditional Types: Left assignable to Right ? A : B
type Id = number;
type Name = string;
type NameOrId<T extends number | string> = T extends number ? Id : Name;
//2 `never` use case with Conditional Types
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
interface Email {
  message: string;
}
interface Dog {
  bark(): void;
}
type EmailMessageContents = MessageOf<Email>; // string
type DogMessageContents = MessageOf<Dog>; // never
//2 (Uncommon) Distributive Conditional Types
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | boolean>; // string[] | boolean[]

//1 (Uncommon) TS Template Literals:
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
