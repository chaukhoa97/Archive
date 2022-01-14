//1 Conditional Types:
type IdLabel = number;
type NameLabel = string;
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
//2 `never` common use case with conditional types
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
//2 Distributive Conditional Types
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | boolean>; // string[] | boolean[]

//1 Assertion: Only to more or less specific type
//2 Const: default -> infer the most general; as const -> infer the most specific
const sekai = 1; //* Literal Types: const sekai: 1 (kiểu type là "1" luôn chứ kp là number, vì const kbh thay đổi)
const req = { url: 'https://example.com', method: 'GET' } as const; //* Chuyển all obj property về Literal types hết: url: "https://example.com"; method: "GET"

const twoArgFn1 = ([a = 1, b = 'b']) => [a, b]; // return type: [string | number][]
const twoArgFn2 = ([a = 1, b = 'b']) => [a, b] as const; // return type: readonly [number, string]
//2 Type assertion:
let anyVar: any = '1';
let numberType: number = <number>anyVar;
let numberType2: number = anyVar as number; //* Nên dùng loại này hơn cho React
//1 Indexed Access Types:
type Person2 = { age: number; name: string; alive: boolean };
type Age = Person2['age' | 'name']; // = number | string
//2 Using `number` to get the type of an array's elements
type typeOfTuple2 = typeof tuple2[number]; // = string | boolean | number

//1 TS Template Literals:
type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = 'en' | 'ja' | 'pt';
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
