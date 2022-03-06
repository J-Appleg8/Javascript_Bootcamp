////////////////////////////////////////
//// Object Methods ///////////////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
"use strict";

const james = {
  firstName: "James",
  lastName: "Applegate",
  birthYear: 1996,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },
  //   calcAge: function () {
  //     return 2037 - this.birthYear;
  //   },

  // Creating a new property called 'age'
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}`;
  },
};

// console.log(james.calcAge(james.birthYear));
console.log(james.calcAge());
console.log(james.age);

// Challenge
//
// this keyword is only available in functions
console.log(james.getSummary());
