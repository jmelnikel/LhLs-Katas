// Social Network Analysis: Part I
// See below for various function descriptions.

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};









// 1. This function returns the name of the individual(s) who follows the most people. The output is an array as there maybe multiple people.
const biggestFollower = function(data) {
  let longestLength = 0;
  let output = [];
  for (let person in data) {
    let arrayOfFollows = data[person].follows;
    if (arrayOfFollows.length === longestLength) {
      output.push(data[person].name);
    } else if (arrayOfFollows.length > longestLength) {
      longestLength = arrayOfFollows.length;
      output = [];
      output.push(data[person].name);
    }
  }
  return output;
};
// console.log(biggestFollower(data));


//2. This function returns the name of the individual who has the most followers. The output is an array as there maybe multiple people.
const mostPopular = function(data) {
  const arrayOfFollows = createArrayOfFollows(data);
  const followsTally = createFollowsTally(arrayOfFollows);
  let mostFollowers = 0;
  let output = [];
  for (let person in followsTally) {
    if (followsTally[person] === mostFollowers) {
      output.push(person);
    } else if (followsTally[person] > mostFollowers) {
      mostFollowers = followsTally[person];
      output = [];
      output.push(person);
    }
  }
  return output;
};
// console.log(mostPopular(data));

// Helper Function Expressions - These will be hoisted.
function createArrayOfFollows(data) {
  let arrayOfFollows = [];
  for (let person in data) {
    arrayOfFollows = arrayOfFollows.concat(data[person].follows);
  }
  return arrayOfFollows;
}

function createFollowsTally(arrayOfFollows) {
  let followsTally = {};
  for (let follow of arrayOfFollows) {
    if (!followsTally[follow]) {
      followsTally[follow] = 1;
    } else {
      followsTally[follow] += 1;
    }
  }
  for (let item in followsTally) {
    followsTally[data[item].name] = followsTally[item];
    delete followsTally[item];
  }
  return followsTally;
}


