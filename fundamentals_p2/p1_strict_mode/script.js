////////////////////////////////////////
//// Strict Mode //////////////////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
//
// Has to be the very first statement in the script
"use strict";

let hasDriversLicense = false;
const passTest = true;

// Without strict mode, the console just shows nothing because
// hasDriversLicense wasnt actually set to true
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");
