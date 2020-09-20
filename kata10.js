// Multiplication Table
// Given a number as the input data, create a function that takes this number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

const multiplicationTable = function(maxValue) {
  let output = "";
  for (let i = 1; i <= maxValue; i++) {
    output += createLine(i, maxValue) + "\n";
  }
  return output;
};

const createLine = function(line, column) {
  let output = "";
  for (let i = 1; i <= column; i++) {
    output += (line * i).toString() + " ";
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));