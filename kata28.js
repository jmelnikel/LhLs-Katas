// Sum From a to b Recursively
// This frunction takes 2 numbers and returns the sum of all the munbers in between incusively. The function performs the task recurively. It is assumed that fromN is less than or equal to toN.

const sum = (fromN, toN) => {
  if (fromN === toN) return fromN;
  return fromN + sum(fromN + 1, toN);
};

console.log(sum(3, 7));


// Logic
// sum(7, 7) = 7
// sum(6, 7) = 6 + sum(7, 7)
// sum(5 ,7) = 5 + sum(6, 7)

// sum(fromN, toN) = fromN + sum(fromN + 1, toN)
