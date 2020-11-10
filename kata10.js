// Multiplication Table
// Given a number as the input data, this function creates a multiplication table with that value as the highest number.

const multiplicationTable = maxValue => {
  let output = "";
  for (let i = 1; i <= maxValue; i++) {
    output += createLine(i, maxValue) + "\n";
  }
  return output;
};

const createLine = (line, column) => {
  let output = "";
  for (let i = 1; i <= column; i++) {
    output += (line * i).toString() + " ";
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));