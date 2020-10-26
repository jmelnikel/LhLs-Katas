// Title Case
// Create a function that takes a sentence string and gives it title casing.

let string = "this is an example";

const titleCase = (string) => {
  if (!string) return "";

  let stringArray = string.toLowerCase().split(" ");
  let output = "";
  for (let word of stringArray) {
    let wordArray = word.split("")
    wordArray[0] = wordArray[0].toUpperCase();
    word = wordArray.join("")
    output += word + " ";
  }
  return output;
};

console.log(titleCase(string));