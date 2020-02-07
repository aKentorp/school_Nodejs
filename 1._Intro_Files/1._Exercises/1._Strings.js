// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch neither line 1 or line 2

var addedNumbers = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(addedNumbers);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";


fixedOne = Number(numberOne);
fixedTwo = Number(numberTwo);
addedNumbers = fixedOne + fixedTwo;

console.log(addedNumbers.toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

meanNumber = (one + two + three) / 3;

console.log(meanNumber.toFixed(5));

// --------------------------------------




// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

console.log(letters[2]);

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

fact = fact.replace("j", "J");

console.log(fact);

// --------------------------------------