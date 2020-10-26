// Text Case Maker
// Create a function that when it receives a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

const camelCase = input => {
  let arrayOfStrings = input.split(" ");
  let arrayOfArrays = [];
  for (let string of arrayOfStrings) {
    let stringArray = string.split("");
    arrayOfArrays.push(stringArray);
  }
  for (let i = 1; i <= arrayOfArrays.length - 1; i++) {
    arrayOfArrays[i][0] = arrayOfArrays[i][0].toUpperCase();
  }
  let outputArray = [];
  for (let stringArray of arrayOfArrays) {
    let string = stringArray.join("");
    outputArray.push(string);
  }
  return outputArray.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));