// Falsy Values: undefined, null, false, 0, NaN, ‘‘/""/`` (empty string)
// Truthy || Falsy = Truthy

//  ??: Nếu vế trái là NULL/UNDEFINED -> Return vế PHẢI
//! ||: 1 hoặc 2 đúng --> Nếu vế trái đúng rồi thì pick luôn (1-1)

const text1 = '' || 'default string'; // default string
const text2 = '' ?? 'default string'; // ""
const text3 = '' && 'default string'; // ""
const num1 = 0 || 'default number'; // default number
const num2 = 0 ?? 'default number'; // 0
const num3 = 0 && 'default number'; // 0
