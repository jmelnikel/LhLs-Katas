/* eslint-disable func-style */
// Taxi Cab Geometry
// Write a function to help taxicabs determine how far away a destination is based on the directions given.

const blocksAway = directions => {
  const rollNumber = (directions.length / 2);
  const arrayOfArrays = [];
  for (let i = 1; i <= rollNumber; i++) {
    const tempArray = [];
    tempArray.push(directions.shift());
    tempArray.push(directions.shift());
    arrayOfArrays.push(tempArray);
  }

  const distance = { "east": 0, "north": 0 };
  let currentDirection = "";
  if (arrayOfArrays[0][0] === "right") {
    currentDirection = "east";
    distance["east"] += arrayOfArrays[0][1];
  } else {
    currentDirection = "north";
    distance["north"] += arrayOfArrays[0][1];
  }

  for (let index = 1; index < arrayOfArrays.length; index++) {
    currentDirection = determineDirection(currentDirection, arrayOfArrays[index][0]);
    if (currentDirection === "north") {
      distance["north"] += arrayOfArrays[index][1];
    }
    if (currentDirection === "east") {
      distance["east"] += arrayOfArrays[index][1];
    }
    if (currentDirection === "south") {
      distance["north"] -= arrayOfArrays[index][1];
    }
    if (currentDirection === "west") {
      distance["east"] -= arrayOfArrays[index][1];
    }
  }
  return distance;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// function declarations will be hoisted
function determineDirection(initialDirection, turn) {
  let finalDirection = "";
  if (initialDirection === "north" && turn === "right") {
    finalDirection = "east";
  } else if (initialDirection === "north" && turn === "left") {
    finalDirection = "west";
  }
  if (initialDirection === "east" && turn === "right") {
    finalDirection = "south";
  } else if (initialDirection === "east" && turn === "left") {
    finalDirection = "north";
  }
  if (initialDirection === "south" && turn === "right") {
    finalDirection = "west";
  } else if (initialDirection === "south" && turn === "left") {
    finalDirection = "east";
  }
  if (initialDirection === "west" && turn === "right") {
    finalDirection = "north";
  } else if (initialDirection === "west" && turn === "left") {
    finalDirection = "south";
  }
  return finalDirection;
}