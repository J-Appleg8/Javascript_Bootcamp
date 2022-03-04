////////////////////////////////////////
//// Arrow Functions //////////////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
"use strict";

const calcAge3 = (birthYear) => 2037 - birthYear;

console.log(calcAge3(1996));

//
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1996, "James"));
