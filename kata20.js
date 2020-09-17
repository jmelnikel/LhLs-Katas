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
  // console.log("This is arrayOfArrays --->", arrayOfArrays)

  const directionSet1 = [];
  const directionSet2 = [];
  for (let array in arrayOfArrays)
  if (array % 2 === 0) {
    directionSet1.push(arrayOfArrays[array]);
  } else {
    directionSet2.push(arrayOfArrays[array]);
  }
  console.log("This is directionSet1 --->", directionSet1)
  console.log("This is directionSet2 --->", directionSet2) 

  let startDirection = ""
  if (directionSet1[0][0] === "right") {
    startDirection = "east";
  }
  if (directionSet1[0][0] === "left"){
    startDirection = "north"
  }
  console.log(startDirection)
  
  const distance = { "east": 0, "north": 0 }
  if (startDirection === "east") {
    let eastBlockCounter = 0;
    for (let item of directionSet1) {
      if (item[0] === "right") {
        eastBlockCounter += item[1];
      }
      if (item[0] === "left") {
        eastBlockCounter -= item[1];
      }
      distance["east"] = eastBlockCounter
    }
    let northBlockCounter = 0;
    for (let item of directionSet2) {
      if (item[0] === "left") {
        northBlockCounter += item[1];
      }
      if (item[0] === "right") {
        northBlockCounter -= item[1];
      }
      distance["north"] = northBlockCounter
    }
  }
  if (startDirection === "north") {
    let northBlockCounter = 0;
    for (let item of directionSet1) {
      if (item[0] === "left") {
        northBlockCounter += item[1];
      }
      if (item[0] === "right") {
        northBlockCounter -= item[1];
      }
      distance["north"] = northBlockCounter
    }
    let eastBlockCounter = 0;
    for (let item of directionSet2) {
      if (item[0] === "right") {
        eastBlockCounter += item[1];
      }
      if (item[0] === "left") {
        eastBlockCounter -= item[1];
      }
      distance["east"] = eastBlockCounter
    }
  }

  return distance
  
};


// console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

