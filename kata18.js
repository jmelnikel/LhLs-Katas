// Square Code
// Creating a function that when given a string it returns Square Code. In Square Code, the spaces are removed from the english text and the characters are written into a rectangle. The message is then re-coded by reading down the columns going left to right.

const squareCode = function(message) {
  message = message.split(" ").join("").split("")
  let magicNumber = Math.ceil(Math.sqrt(message.length))
  console.log(message)
  console.log(magicNumber)
  

};


// clu hlt io
// fto ehg ee dd

console.log(squareCode("chill out"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
