////////////////////////////////////////
//// Reviewing Functions //////////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
"use strict";

function calcAge(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1996, "James"));
console.log(yearsUntilRetirement(1970, "John"));
