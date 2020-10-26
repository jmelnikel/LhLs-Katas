// Password Obfuscator
// Write a function that when given a CLI argument string, it returns an obfuscated version of that string.
// Rules: Every "a" in the string should be replaced with a "4". Every "e" in the string should be replaced with a "3". Every "o" (oh) in the string should be replaced with a "0" (zero). Every "l" (el) in the string should be replaced with a "1" (one).

let args = process.argv.slice(2)[0];

const obfuscate = string => {
  let output = "";
  for (let letter of string) {
    if (letter === "a") {
      output += "4";
    } else if (letter === "e") {
      output += "3";
    } else if (letter === "o") {
      output += "0";
    } else if (letter === "l") {
      output += "1";
    } else {
      output += letter;
    }
  }
  return output;
};

console.log(obfuscate(args));