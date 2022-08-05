"use strict" ;

let str = "text";
let bool = true;
let num = 3;

//1.Perform addition of various types (string + boolean, string + number, number + boolean)
console.group("Addition");
console.log(str + bool);
console.log(str + num);
console.log(num + bool);
console.groupEnd();

//2.Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.group("Multiplication")
console.log(str * bool);
console.log(str * num);
console.log(num * bool);
console.groupEnd();

//3.Divide different types (string / boolean, string / number, number / Boolean)
console.group("Divide");
console.log(str / bool);
console.log(str / num);
console.log(num / bool);
console.groupEnd();

//4.Perform explicit conversion (number, string, boolean)
console.group("Explicit conversion");
console.log(String(num));
console.log(String(bool));
console.log(Number(str));
console.log(Number(bool));
console.log(Boolean(num));
console.log(Boolean(str));
console.groupEnd();