// Counting Vowels
// Count the number of vowels (a, e, i, o, and u) that appear in a given string.

const numberOfVowels = data => {
  let number = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (const char of data) {
    for (const letter of vowels) {
      if (char === letter) {
        number += 1;
      }
    }
  }
  return number;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));