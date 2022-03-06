////////////////////////////////////////
//// Basic Array Operations ///////////
//////////////////////////////////////

/////////////////////
//// Add Elements //
///////////////////
"use strict";

const friends = ["Michael", "Steven", "Peter"];
// Assigning to variable will result in the length of the array
const newLength = friends.push("Jay");

console.log(friends);
console.log(newLength);

friends.unshift("John");

console.log(friends);

////////////////////////
//// Remove Elements //
//////////////////////
//
// Removed the last elements of the array
friends.pop();
console.log(friends);

// Assigning to variable will be the elements that was removed
const popped = friends.pop();
console.log(popped);

// Removes the first element
friends.shift();
console.log(friends);

// Finds position of the value
console.log(friends.indexOf("Steven"));

// Boolean if the value is in the array
console.log(friends.includes("Steven"));

if (friends.includes("Steven")) {
  console.log("You have a friend named Steven");
}
