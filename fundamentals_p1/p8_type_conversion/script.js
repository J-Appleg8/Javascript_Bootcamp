////////////////////////////////////////
//// Type Conversion and Coercion /////
//////////////////////////////////////

////////////////////////
//// Type Conversion //
//////////////////////
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("James"));

// NaN is a number data type - its just not a valid number
console.log(typeof NaN);

////////////////////////
//// Type Coercion ////
//////////////////////

// Whenever there is an operation between two strings, the data
// in between will be converted to a string
console.log("I am " + 23 + " years old");

// JavaScript will trigger the opposite conversion, turning strings to numbers
console.log("23" - "10" - 3);
console.log("23" * 2);
console.log("23" / 2);

let n = "1" + 1;
n -= 1;
console.log(n);
