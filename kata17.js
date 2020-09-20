// JS Object From URL Encoded String
// Given a url encoded string of key-value pairs, and create a function to turn it into a JavaScript object.

// Use the following URL encoding rules:
// 1) %20 represents a space character.
// 2) Key-value pairs are represented using an = character: key=value
// 3) Multiple key-value pairs are separated using a & character: key1=value1&key2=value2

const urlDecode = function(text) {
  text = text.split("&");
  let textArray = [];
  for (let item of text) {
    item = item.split("%20").join(" ");
    textArray.push(item);
  }
  let textObject = {};
  for (let item of textArray) {
    item = item.split("=");
    textObject[item[0]] = item[1];
  }
  return textObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);