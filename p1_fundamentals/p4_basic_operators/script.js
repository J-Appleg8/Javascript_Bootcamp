////////////////////////////////////////
//// Basic Operators //////////////////
//////////////////////////////////////

////////////////////
//// math /////////
//////////////////
const now = 2037;
const ageJames = now - 1996;
const ageSarah = now - 2018;

console.log(ageJames, ageSarah);
console.log(ageJames * 2, ageJames / 10, 2 ** 3);

//////////
const firstName = "James";
const lastName = "Applegate";

console.log(firstName + " " + lastName);

////////////////////
//// assignment ///
//////////////////
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1

console.log(x);

////////////////////
//// comparison ///
//////////////////
console.log(ageJames > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(isFullAge);
console.log(now - 1996 > now - 2018);
