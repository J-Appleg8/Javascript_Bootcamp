////////////////////////////////////////
//// Looping Backwards ////////////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
"use strict";

const james = [
  "James",
  "Applegate",
  2037 - 1996,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = james.length - 1; i >= 0; i--) {
  console.log(i, james[i]);
}

/////////////////////////
//// Loop inside loop //
///////////////////////
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repitition ${rep}`);
  }
}
