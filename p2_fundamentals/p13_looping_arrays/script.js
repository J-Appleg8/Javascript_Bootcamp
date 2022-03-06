////////////////////////////////////////
//// Looping Arrays ///////////////////
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

const types = [];

for (let i = 0; i < james.length; i++) {
  console.log(james[i]);
  types[i] = typeof james[i];
}

console.log(james);
console.log(types);

const years = [1996, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

////////////////////
//// Continue /////
//////////////////
console.log("---------- Continue on string ----------");
for (let i = 0; i < james.length; i++) {
  if (typeof james[i] !== "string") continue;
  console.log(james[i], typeof james[i]);
}

////////////////////
//// Break ////////
//////////////////
console.log("---------- Break on number ----------");
for (let i = 0; i < james.length; i++) {
  if (typeof james[i] === "number") break;
  console.log(james[i], typeof james[i]);
}
