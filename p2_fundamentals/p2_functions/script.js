////////////////////////////////////////
//// Functions ////////////////////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
//
// Functions should be used following the DRY principle - Dont Repeat Yourself
"use strict";

function logger() {
  console.log("My name is James");
}

logger();

// Function with parameters
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);
