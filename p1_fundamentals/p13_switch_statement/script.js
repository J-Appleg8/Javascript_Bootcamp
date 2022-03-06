////////////////////////////////////////
//// Switch Operator //////////////////
//////////////////////////////////////

////////////////////
//// Overview /////
//////////////////
//
// Compares to 'monday' with strict equality
// without the break statements, the code will continue to run through
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    break;

  case "tuesday":
    console.log("Prepare videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code");
    break;

  case "friday":
    console.log("Sleep");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;

  default:
    console.log("Not a valid day");
}
