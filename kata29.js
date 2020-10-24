/* eslint-disable func-style */
// Sum Array of Numbers Recursively
// This function takes an array of numbers (with possible nested arrays of numbers) and sums all the numbers recursively.

function sumItems(array) {
  let total = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      total += sumItems(item);
    } else {
      total += item;
    }
  }
  return total;
}

console.log(sumItems([[1, 2, [[3], 4]], 5, []]));