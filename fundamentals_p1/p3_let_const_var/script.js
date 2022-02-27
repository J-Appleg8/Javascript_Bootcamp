////////////////////////////////////////
//// Ways to declare variables ////////
//////////////////////////////////////

// You are able to declare variables without using these declarations
// in the sense that it wont create an error immediately
// However, this does not create the variable in the current scope
// instead, it will create a property on the global object

lastName = "Applegate";

////////////////////
//// let //////////
//////////////////

// We use the 'let' keyword to declare variables that can change later
// Is a 'mutable' variable
// Also applies when we declare an empty variable and then assign a value later

let age = 30;
age = 31;

////////////////////
//// const ////////
//////////////////

// Used to declare variables that can not be changed after being created
// Is an 'immutable' variable
// Can not declare an empty const variable
// Starting out, should generally use 'const' unless you know you need to use 'let'

const birthYear = 1991;

////////////////////
//// var //////////
//////////////////

// Works similar to 'let' - However, var is function scoped and let is block scoped
// Is 'mutable'

var job = "programmer";
job = "teacher";
