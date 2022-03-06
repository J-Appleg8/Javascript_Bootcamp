////////////////////////////////////////
//// Declarations vs. Expressions /////
//////////////////////////////////////

////////////////////
//// Declaration //
//////////////////
// You can call a declared function before its called
"use strict";

console.log(calcAge1(1996));

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge1(1996));

////////////////////
//// Expression ///
//////////////////
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1996);

console.log(age2);
