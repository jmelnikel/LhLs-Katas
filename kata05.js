// Percent Encoded String
// Given a normal string of words, turn it into a percent-encoded string by replacing all whitespace with %20.

const urlEncode = text => text.trim().split(" ").join("%20");

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));