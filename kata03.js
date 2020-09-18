// Counting Vowels
// Count the number of vowels (a, e, i, o, and u) that appear in a given string.

const numberOfVowels = function(data) {
  let number = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let char of data) {
    for (let letter of vowels) {
      if (char === letter) {
        number += 1;
      }
    }
  }
  return number
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));