// Square Code Encryption
// Creating a function that when given a string it returns Square Code. In Square Code, the spaces are removed from the english text and the characters are written into a rectangle. The message is then re-coded by reading down the columns going left to right.

const squareCode = function(message) {
  let array = message.split(" ").join("").split("");
  let num = Math.ceil(Math.sqrt(array.length));
  let tempArray
  let finalArray = [];
  
  let createArray = function (array) {
    if (array.length === 0) {
      return;
    } else if (array.length < num) {
      finalArray.push(array);
      return;
    } else {
      tempArray = [];
      for (i = 0; i < num; i++) {
        tempArray.push(array.shift());
      };
      finalArray.push(tempArray);
    };
    createArray(array);
  };
  // console.log("This is array", array)
  createArray(array);
  
  let line = "";
  let createLine = function (finalArray) {
    if (finalArray[0].length === 0) {
      return;
    } else {
      finalArray.forEach(function (subArray) {
        if (subArray.length === 0) {
          return;
        } else {
          line += subArray.shift();
          return line;
        };
      });
      line += " ";
    };
    
    createLine(finalArray);
    return line;
  };
  return createLine(finalArray);
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));