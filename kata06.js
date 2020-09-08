// Smart Parking
// Write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

const whereCanIPark = function (spots, vehicle) {
  if (vehicle === "motorcycle") {
    findSpot(spots, ["R", "S", "M"])
  } else if (vehicle === "small") {
    findSpot(spots, ["R", "S"])
  } else {
    findSpot(spots, ["R"])
  }
};

const findSpot = function (array, criteria) {
  // console.log(array);
  console.log(criteria);
  for (let lineIndex in array) {
    console.log(array[lineIndex])
  }
}


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));