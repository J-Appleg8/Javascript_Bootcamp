////////////////////////////////////////
//// Dot vs. Bracket Notation /////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
"use strict";

const james = {
  firstName: "James",
  lastName: "Applegate",
  age: 2037 - 1996,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// Dot notation - you have to use the final property name
console.log(james.lastName);

// Bracket notation - you can use a computed property name
const nameKey = "Name";
console.log(james["first" + nameKey]);
console.log(james["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know? firstName, lastName, age, job and friends"
);

if (james[interestedIn]) {
  console.log(james[interestedIn]);
} else {
  console.log("Wrong request");
}

james.location = "Long Beach";
james["twitter"] = "@james";
console.log(james);

console.log(
  `${james.firstName} has ${james.friends.length} friends, and his best friend is named ${james.friends[0]}`
);
