"use strict";

// Create a car object, add a color property to it with the value equals 'black'
const carObj = {};
carObj.color = "black"
console.log(carObj);

// Change the color property of the car object to 'green'
carObj.color = "green";
console.log(carObj);

// Add the power property to the car object, which is a function and displays the engine power to the console
carObj.power = function(engPow){
    console.log("red");
};

//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function sum (pearsNum, applesNum) {
    let result = pearsNum + applesNum
    return result;
};
console.log(sum(7,4));

//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
function verify(){
    let name = prompt ("Write your name");
    if (name == "Jack") {
        alert(`Hello ${name}`);
    } else {
        alert(`There is no such name: ${name}`);
    };
};

//Write a function for calculating the type of argument and type output to the console
function typeOfArg (arg) {
    console.log(typeof(arg));
};
typeOfArg(9);
typeOfArg(false);

//Write a function that determines whether a number is prime or not
function primeNums (num) {
    let prime = true;
    if (!Number.isInteger(num)) {
        return "Number isn't an integer"
    };
    if(num >1 ){
        for(let i = 2; i<num ; i ++){
            if(num % i == 0) {
                prime = false;
            };
        };
        if (prime) {
            return "Number is a prime";
        } else {
            return "Number isn't a prime";
        }
    } else  {
        return "Number isn't a prime";
    };
};
console.log(primeNums(59.1));
console.log(primeNums(1559));
console.log(primeNums(7));
console.log(primeNums(-5));
