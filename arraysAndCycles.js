"use strict";

//1. Given an array consisting of movie names, iterate over the array with the output of the names of each .movie to the console.
const movieNames = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
for (let i = 0; i < movieNames.length; i++) {
  console.log(movieNames[i]);
}

//2.Given an array of car manufacturers, convert the array to a string and back to an array
let carManufac = ["Toyota", "Ford", "Honda"];
console.log(carManufac.join().split(","));

//3.Given an array of the names of your friends, add the words hello to each element of the array
let names = ["Michael", "Ares", "Henk"];
for (let i = 0; i < names.length; i++) {
  names[i] = "Hello " + names[i];
}
console.log(names);

//4.Convert numeric array to Boolean
let numArr = [1, 6, 8, 0, -2].map((num) => Boolean(num));
console.log(numArr);

//5.Sort the array [1,6,7,8,3,4,5,6] in descending order
let array = [1, 6, 7, 8, 3, 4, 5, 6].sort((a, b) => b - a);
console.log(array);

//6.Filter array [1,6,7,8,3,4,5,6] by value > 3
let arrOne = [1, 6, 7, 8, 3, 4, 5, 6].filter((num) => {
  if (num > 3) return true;
});
console.log(arrOne);

//7.Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
let arrTwo = [1, 3, 7, 9, 4, 6, 0];
function out(arr, num) {
  console.log(arr.indexOf(num, 0));
}
out(arrTwo, 7);

//8.Implement a loop that will print the number 'a' until it is less than 10
let loop = (a) => {
  if (a < 10) {
    while (a < 10) {
      console.log(a);
      a++;
    }
  } else {
    console.log("a>=10");
  }
};
loop(1);

//9.Implement a loop that prints prime numbers to the console
function primeNums(num) {
  let prime = true;
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        prime = false;
      }
    }
    if (prime) {
      return true;
    }
  } else {
    prime = false;
  }
}
const arrThree = [1, 99, 5, 44, 78, 31, 53, 68, 0, -6, 2, -7].forEach((num) => {
  if (primeNums(num)) {
    console.log(num);
  }
});

//10.Implement a loop that prints odd numbers to the console
function oddNums(num) {
  if (num % 2 !== 0 && num !== 2) {
    return true;
  } else return false;
}
const arrFour = [1, 2, 3, 99, 5, 0, 44, -78, 31, -53, 68, 1515252].forEach(
  (num) => {
    if (oddNums(num)) {
      console.log(num);
    }
  }
);
