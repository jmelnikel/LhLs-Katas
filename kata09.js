// Case Maker
// Create a function that when it receives a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

const camelCase = function(input) {
  let output = input.split(" ")
  for (let i = 1; i <= output.length - 1; i++) {
    
    
  }
  console.log(output)
   
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));