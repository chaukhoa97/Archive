//? Conditional Types:
type IdLabel = number;
type NameLabel = string;
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
/// `never` common use case with conditional types
type NonNullable2<T> = T extends null | undefined ? never : T;
type A2 = NonNullable<boolean>; // boolean
type B2 = NonNullable<number | null>; // number

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;
interface Email {
  message: string;
}
interface Dog {
  bark(): void;
}
type EmailMessageContents = MessageOf<Email>; // string
type DogMessageContents = MessageOf<Dog>; // never
/// Distributive Conditional Types
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | boolean>; // string[] | boolean[]

//? Indexed Access Types:
type Person2 = { age: number; name: string; alive: boolean };
type Age = Person2['age' | 'name']; // = number | string
/// Using `number` to get the type of an array's elements
type typeOfTuple2 = typeof tuple2[number]; // = string | boolean | number

//? TS Template Literals:
type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = 'en' | 'ja' | 'pt';
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
