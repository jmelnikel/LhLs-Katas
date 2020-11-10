// Title Case
// Create a function that takes a sentence string and gives it title casing.

const string = "this is an example";

const titleCase = (string) => {
  if (!string) return "";

  const stringArray = string.toLowerCase().split(" ");
  let output = "";
  for (let word of stringArray) {
    const wordArray = word.split("");
    wordArray[0] = wordArray[0].toUpperCase();
    word = wordArray.join("");
    output += word + " ";
  }
  return output;
};

console.log(titleCase(string));