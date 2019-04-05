'code strict';

// program to display the current day and time
var date = ("Today is " + Date().slice(4, 16) + "and the time is" + " " + Date().slice(16, 28) + "." )

console.log(date);

//program to convert a number to a string
var number = 5;
var string = number.toString();

console.log(string);

//program to convert a string to the number
var string = 9;
var number = string;

console.log(number);

//program that takes in different datatypes and prints out what they are

var none = null;

console.log(typeof true);         //boolean
console.log(none);                //null 
console.log(typeof x);            //undefined             
console.log(typeof 3.14);         //number
console.log(typeof 3 % "two");    //NaN
console.log(typeof "Daniela");    //string      

//program that adds 2 numbers together

var firstNumber = 7;
var secondNumber = 3;

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

