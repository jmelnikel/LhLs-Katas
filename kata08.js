// Repeating Numbers
// The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. The first will be the value to repeat, the second will be the amount of times to repeat that value.

const repeatNumbers = data => {
  let output = "";
  for (const item of data) {
    output += printNumbers(item);
  }
  return output;
};

const printNumbers = array => {
  let output = "";
  for (let i = 1; i <= array[1]; i++) {
    output += array[0].toString();
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));