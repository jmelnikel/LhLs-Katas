// Text Case Maker II
// Creat an advanced case maker function that can convert strings into all different kinds of case styles; like camel, pascal, snake, or even kebab.

const makeCase = function(input, stringCase) {
  if (stringCase === "camel") {
    return camelCase(input)
  }
  if (stringCase === "pascal") {
    return pascalCase(input)
  }
  if (stringCase === "snake") {
    return snakeCase(input)
  }
  if (stringCase === "kebab") {
    return kebabCase(input)
  }
  if (stringCase === "title") {
    return titleCase(input)
  }
  if (stringCase === "vowel") {
    return vowelCase(input)
  }
  if (stringCase === "consonant") {
    return consonantCase(input)
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));


function camelCase(input) {
  let arrayOfStrings = input.split(" ");
  let arrayOfArrays = []
  for (let string of arrayOfStrings) {
    let stringArray = string.split("")
    arrayOfArrays.push(stringArray)
  }
  for (let i = 1; i <= arrayOfArrays.length - 1; i++) {
    arrayOfArrays[i][0] = arrayOfArrays[i][0].toUpperCase()
  }
  let outputArray = []
  for (let stringArray of arrayOfArrays) {
    let string = stringArray.join("")
    outputArray.push(string)
  }
  return outputArray.join("")
};

function pascalCase(input) {
  let arrayOfStrings = input.split(" ");
  let arrayOfArrays = []
  for (let string of arrayOfStrings) {
    let stringArray = string.split("")
    arrayOfArrays.push(stringArray)
  }
  for (let i = 0; i <= arrayOfArrays.length - 1; i++) {
    arrayOfArrays[i][0] = arrayOfArrays[i][0].toUpperCase()
  }
  let outputArray = []
  for (let stringArray of arrayOfArrays) {
    let string = stringArray.join("")
    outputArray.push(string)
  }
  return outputArray.join("")
}

function snakeCase(input) {
  return input.split(" ").join("_");
}

function kebabCase(input) {
  return input.split(" ").join("-");
}

function titleCase(input) {
  let arrayOfStrings = input.split(" ");
  let arrayOfArrays = []
  for (let string of arrayOfStrings) {
    let stringArray = string.split("")
    arrayOfArrays.push(stringArray)
  }
  for (let i = 0; i <= arrayOfArrays.length - 1; i++) {
    arrayOfArrays[i][0] = arrayOfArrays[i][0].toUpperCase()
  }
  let outputArray = []
  for (let stringArray of arrayOfArrays) {
    let string = stringArray.join("")
    outputArray.push(string)
  }
  return outputArray.join(" ")
}

function vowelCase(input) {
  return input.replace(/[aeiou]/g, function(vowel) {
    return vowel.toUpperCase();
  });
}

function consonantCase(input) {
  return input.replace(/[bcdfghjklmnpqrstvwxyz]/g, function(vowel) {
    return vowel.toUpperCase();
  });
}