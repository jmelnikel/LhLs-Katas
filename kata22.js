// Reversing a String
// Write a function that takes any number of command line arguments, all strings, and reverses them before outputting them one at a time to the console.

let args = process.argv.slice(2);

const reverseString = function(string) {
  let output = "";
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
};

for (let item of args) {
  console.log(reverseString(item));
}