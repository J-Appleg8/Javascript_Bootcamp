////////////////////////////////////////
//// While Loop ///////////////////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
"use strict";

console.log("---------- For Loop ----------");
for (let rep = 1; rep <= 10; rep++) {
  //   console.log(`${rep} Reps`);
}

console.log("---------- While Loop ----------");
let rep = 1;
while (rep <= 10) {
  //   console.log(`${rep} Reps`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
