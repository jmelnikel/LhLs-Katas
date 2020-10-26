// Shift Cipher
// Create a function which will take in a plaintext (i.e. un-encrypted text) string and a key (negative for a left shift, positive for a right shift) and return and encrypted string.

const encrypt = (string, key) => {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  if (key < 0) {
    alphabet = alphabet.reverse();
    key = Math.abs(key)
  }

  const stringArray = string.split("");
  let output = [];
  for (let letter of stringArray) {
    if (letter !== " ") {
      let index = alphabet.indexOf(letter)
      if ((index + key) > alphabet.length - 1) {
        index = index - alphabet.length;
      }
      letter = alphabet[index + key]
      output.push(letter)
    } else {
      output.push(letter)
    }
  }
  output = output.join("")
  console.log(output)
  return output;
};

module.exports = encrypt;