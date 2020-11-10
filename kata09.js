// Text Case Maker
// Create a function that when it receives a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

const camelCase = input => {
  const arrayOfStrings = input.split(" ");
  const arrayOfArrays = [];
  for (const string of arrayOfStrings) {
    const stringArray = string.split("");
    arrayOfArrays.push(stringArray);
  }
  for (let i = 1; i <= arrayOfArrays.length - 1; i++) {
    arrayOfArrays[i][0] = arrayOfArrays[i][0].toUpperCase();
  }
  const outputArray = [];
  for (const stringArray of arrayOfArrays) {
    const string = stringArray.join("");
    outputArray.push(string);
  }
  return outputArray.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));