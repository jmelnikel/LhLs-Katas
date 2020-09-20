// Conditional Sums
// Add only the numbers in the array which match the given condition (even or odd).

const conditionalSum = function(values, condition) {
  let sum;
  if (condition === "even") {
    let filtered = values.filter(num => num % 2 === 0);
    if (filtered.length === 0) return 0;
    sum = filtered.reduce((num, sum) => num + sum);
  } else {
    let filtered = values.filter(num => num % 2 !== 0);
    if (filtered.length === 0) return 0;
    sum = filtered.reduce((num, sum) => num + sum);
  }
  return sum;
};



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([2], "odd"));
console.log(conditionalSum([1], "even"));