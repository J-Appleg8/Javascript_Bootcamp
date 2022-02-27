////////////////////////////////////////
//// Strings & Template Literals //////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
const firstName = "James";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const james = "I'm " + firstName;

console.log(james);

const jamesNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(jamesNew);
