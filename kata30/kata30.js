/* eslint-disable func-style */
// Luhn Algorithm
// This function takes a number and return wether it is valid based on the Luhn Algorithm

const check = number => {
  const numberArrayReversed = toNumberArray(number).reverse();
  const reducer = (acc, cur) => acc + cur;
  for (let i = 1; i < numberArrayReversed.length; i += 2) {
    let current = numberArrayReversed[i];
    current *= 2;
    if (current > 9) {
      current = toNumberArray(current).reduce(reducer);
    }
    numberArrayReversed[i] = current;
  }
  const validNumber = numberArrayReversed.reduce(reducer);
  if (validNumber % 10 === 0) return true;
  return false;
};

module.exports = check;

// Function declarations will be hoisted
function toNumberArray(number) {
  const stringArray = number.toString().split("");
  const numberArray = [];
  for (const string of stringArray) {
    const parsed = parseInt(string, 10);
    numberArray.push(parsed);
  }
  return numberArray;
}