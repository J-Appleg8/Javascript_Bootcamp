////////////////////////////////////////
//// Logical Operators/////////////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}

// Using multiple statements
const isTired = true;

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}
