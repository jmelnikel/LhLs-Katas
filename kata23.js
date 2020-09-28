// Pig Latin Translator
// Write a function that takes any number of command line arguments, converts each to pig latin (see below), then puts the translated words together into one sentence logged to the console.
// Pig Latin Rules: Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

let args = process.argv.slice(2);

const convertToPigLatin = function(string) {
  let output = string.slice(1);
  output += `${string[0]}ay `;
  return output;
};

let reversedStrings = "";
for (let item of args) {
  reversedStrings += convertToPigLatin(item);
}

console.log(reversedStrings);