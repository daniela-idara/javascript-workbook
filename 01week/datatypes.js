'use strict';

// program to display the current day and time
const date = ("Today is " + Date().slice(4, 16) + "and the time is" + " " + Date().slice(16, 28) + "." )

console.log(date);

//program to convert a number to a string
const number = 5;
const string = number.toString();

console.log(string);

//program to convert a string to the number
const string = 9;
const number = string;

console.log(number);

//program that takes in different datatypes and prints out what they are

const none = null;

console.log(typeof true);         //boolean
console.log(none);                //null 
console.log(typeof x);            //undefined             
console.log(typeof 3.14);         //number
console.log(typeof 3 % "two");    //NaN
console.log(typeof "Daniela");    //string      

//program that adds 2 numbers together

const firstNumber = 7;
const secondNumber = 3;

console.log(firstNumber +  secondNumber);

//program that runs only when 2 things are true

if (firstNumber > 5 && secondNumber > 1) {
    console.log("true");
}

//program that runs when 1 of 2 things are true.
if (firstNumber > 5 || secondNumber > 5) {
    console.log("true");
}

//program that runs when both things are not true

if (firstNumber !== 5 && secondNumber !== 1) {
    console.log("false");
}

function dateAndTime() {
    document.getElementById("datetime").innerHTML = date;
}

