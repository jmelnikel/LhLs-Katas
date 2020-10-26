// Change Calculator
// Create a function calculateChange that when given two numbers, 1)the total of a transaction, and 2)the amount of cash given to the cashier; should return an object which describes the total amount of change for the cashier to give back.

/* Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Valid denominations are as follows:

Twenty dollars (2000)
Ten dollars (1000)
Five dollars (500)
Two dollars (200)
One dollar (100)
Quarter (25)
Dime (10)
Nickel (5)
Penny (1)
*/

const calculateChange = (total, cash) => {
  let changeTotal = cash - total;
  let changeToGive = {};
  if (changeTotal > 2000) {
    let array = calculateDenomination(changeTotal, 2000);
    changeToGive["twentyDollar"] = array[0];
    changeTotal = array[1];
  }
  if (changeTotal > 1000) {
    let array = calculateDenomination(changeTotal, 1000);
    changeToGive["tenDollar"] = array[0];
    changeTotal = array[1];
  }
  if (changeTotal > 500) {
    let array = calculateDenomination(changeTotal, 500);
    changeToGive["fiveDollar"] = array[0];
    changeTotal = array[1];
  }
  if (changeTotal > 200) {
    let array = calculateDenomination(changeTotal, 200);
    changeToGive["twoDollar"] = array[0];
    changeTotal = array[1];
  }
  if (changeTotal > 100) {
    let array = calculateDenomination(changeTotal, 100);
    changeToGive["oneDollar"] = array[0];
    changeTotal = array[1];
  }
  if (changeTotal > 25) {
    let array = calculateDenomination(changeTotal, 25);
    changeToGive["quarter"] = array[0];
    changeTotal = array[1];
  }
  if (changeTotal > 10) {
    let array = calculateDenomination(changeTotal, 10);
    changeToGive["dime"] = array[0];
    changeTotal = array[1];
  }
  if (changeTotal > 5) {
    let array = calculateDenomination(changeTotal, 5);
    changeToGive["nickle"] = array[0];
    changeTotal = array[1];
  }
  if (changeTotal > 1) {
    let array = calculateDenomination(changeTotal, 1);
    changeToGive["penny"] = array[0];
    changeTotal = array[1];
  }
  return changeToGive;
};

const calculateDenomination = (amount, denomination) => {
  let change = amount / denomination;
  let remainderCash = Math.round((change - Math.trunc(change)) * denomination);
  let numberWholeBills = Math.trunc(change);
  return [numberWholeBills, remainderCash];
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));