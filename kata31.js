// Stock Market Maximum Profit
// This function, when given a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on.

const data = [45, 24, 35, 31, 40, 38, 11]

const maxProfit = (data) => {
  let maxProfit = 0;
  for (let index in data) {
    let array = data.slice(index)
    let profit = compareSubsequentNumbers(array)
    if (profit > maxProfit) maxProfit = profit;
  }
  if (maxProfit === 0) return -1
  return maxProfit
}

console.log(maxProfit(data));

// Function declarations will be hoisted
function compareSubsequentNumbers(array) {
  let greatestDifference = 0
  for (let i = 1; i < array.length; i++) {
    let compare = array[i] - array[0]
    if (compare > greatestDifference) greatestDifference = compare;
  }
  return greatestDifference;
}