// Taxi Cab Geometry
// Write a function to help taxicabs determine how far away a destination is based on the directions given.

const blocksAway = function(directions) {
  const rollNumber = (directions.length / 2)
  const arrayOfArrays = [];
  
  for (let i = 1; i <= rollNumber; i++) {
    const tempArray = [];
    tempArray.push(directions.shift())
    tempArray.push(directions.shift())
    arrayOfArrays.push(tempArray)
  }
  console.log(arrayOfArrays) // [[ 'right', 2 ], [ 'left', 3 ], [ 'left', 1 ]]

  const directionSetEven = [];
  const directionSetOdd = [];
  for (let array in arrayOfArrays)
  if (array % 2 === 0) {
    directionSetEven.push(arrayOfArrays[array]);
  } else {
    directionSetOdd.push(arrayOfArrays[array]);
  }
  console.log(directionSetEven) // [[ 'right', 2 ], [ 'left', 1 ]]
  console.log(directionSetOdd) // [[ 'left', 3 ]]

  




};


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

