"use strict";
let id = 5;
let idArray = [1, 2, 3, 4, 5]; // hoặc Array<number>
let tuple = ['John', 25];
let tupleArray = [
    ['John', 25],
    ['Uyen', 23],
];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {})); // Color.Green = 2
var Progress;
(function (Progress) {
    Progress["One"] = "1";
    Progress["Two"] = "2";
    Progress["Three"] = "333";
})(Progress || (Progress = {})); // Progress.Three = '33'
let user = { name: 'John', age: 25 };
let person = { name: 'John' };
// Union Type
let myIdentity = identity;
let interfaceAdd = (a, b) => a + b;
//? Function
function add(a, b) {
    return a + b;
}
// Void: Khi function không return gì cả
function print(msg) {
    console.log(msg);
}
// Type Assertion
let anyVar = 1;
let numberType = anyVar;
let numberType2 = anyVar;
// Generics
function identity(arg) {
    return arg;
}
let outputString = identity('myString');
