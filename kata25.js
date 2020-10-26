/* eslint-disable func-style */
// Print In Frame
// Create a function that takes a string and returns the string in a frame.

const string = "May the force be with you";
const stringArray = string.split(" ");

const printInFrame = stringArray => {
  const frameWidth = determineFrameWidth(stringArray);
  console.log(createTopBottomBorder(frameWidth));
  for (let stringItem of stringArray) {
    console.log(createWordLine(stringItem, frameWidth));
  }
  console.log(createTopBottomBorder(frameWidth));
};

printInFrame(stringArray);

// function declarations will be hoisted
function determineFrameWidth(stringArray) {
  let output = 0;
  for (let item of stringArray) {
    if (item.length > output) {
      output = item.length;
    }
  }
  return output + 4;
}

function createTopBottomBorder(frameWidth) {
  let output = "";
  for (let i = 1; i <= frameWidth; i++) {
    output += "*";
  }
  return output;
}

function createWordLine(stringItem, frameWidth) {
  let output = "";
  output = `* ${stringItem}`;
  let numberOfSpaces = frameWidth - stringItem.length - 3;
  for (let i = 1; i <= numberOfSpaces; i++) {
    output += " ";
  }
  return output + "*";
}