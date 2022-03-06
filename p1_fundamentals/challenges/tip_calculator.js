const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`Bill: ${bill} \nTip: ${tip} \nTotal: ${bill + tip}`);

const billTwo = 40;
const tipTwo = billTwo >= 50 && billTwo <= 300 ? billTwo * 0.15 : billTwo * 0.2;
console.log(`Bill: ${billTwo} \nTip: ${tipTwo} \nTotal: ${billTwo + tipTwo}`);

const billThree = 430;
const tipThree =
  billThree >= 50 && billThree <= 300 ? billThree * 0.15 : billThree * 0.2;
console.log(
  `Bill: ${billThree} \nTip: ${tipThree} \nTotal: ${billThree + tipThree}`
);
