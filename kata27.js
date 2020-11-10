/* eslint-disable func-style */
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
const biggestFollower = data => {
  let longestLength = 0;
  let output = [];
  for (const personID in data) {
    const arrayOfFollows = data[personID].follows;
    if (arrayOfFollows.length === longestLength) {
      output.push(data[personID].name);
    } else if (arrayOfFollows.length > longestLength) {
      longestLength = arrayOfFollows.length;
      output = [];
      output.push(data[personID].name);
    }
  }
  return output;
};
console.log(biggestFollower(data));

//2. This function returns the name of the individual who has the most followers. The output is an array as there maybe multiple people.
const mostPopular = data => {
  const arrayOfFollows = createArrayOfFollows(data);
  const followsTally = createFollowsTally(arrayOfFollows);
  let mostFollowers = 0;
  let output = [];
  for (const personID in followsTally) {
    if (followsTally[personID] === mostFollowers) {
      output.push(personID);
    } else if (followsTally[personID] > mostFollowers) {
      mostFollowers = followsTally[personID];
      output = [];
      output.push(personID);
    }
  }
  return output;
};
console.log(mostPopular(data));

// function declarations will be hoisted
function createArrayOfFollows(data) {
  let arrayOfFollows = [];
  for (const personID in data) {
    arrayOfFollows = arrayOfFollows.concat(data[personID].follows);
  }
  return arrayOfFollows;
}

function createFollowsTally(arrayOfFollows) {
  const followsTally = {};
  for (const follow of arrayOfFollows) {
    if (!followsTally[follow]) {
      followsTally[follow] = 1;
    } else {
      followsTally[follow] += 1;
    }
  }
  for (const item in followsTally) {
    followsTally[data[item].name] = followsTally[item];
    delete followsTally[item];
  }
  return followsTally;
}


// 3. This function returns a list of all the individuals with the names of thier followers and whom they follow.
const printAll = data => {
  const listOfNamesObject = createListOfNames(data);
  for (const personID in data) {
    const name = data[personID].name;
    const followsList = createFollowsList(data, personID);
    listOfNamesObject[name].follows = followsList;
  }

  for (const personID in data) {
    const followersArray = data[personID].follows;
    for (const follower of followersArray) {
      const followerName = data[follower].name;
      const followeeName = data[personID].name;
      listOfNamesObject[followerName].followers.push(followeeName);
    }
  }
  return listOfNamesObject;
};
console.log(printAll(data));

// function declarations will be hoisted
function createListOfNames(data) {
  const output = {};
  for (const personID in data) {
    const name = data[personID].name;
    output[name] = {
      followers: [],
      follows: []
    };
  }
  return output;
}

function createFollowsList(data, personID) {
  const output = [];
  const followsIDArray = data[personID].follows;
  for (const followsID of followsIDArray) {
    output.push(data[followsID].name);
  }
  return output;
}

// 4. This function returns a list of names of individuals who follow someone that doesn't follow them back.
const unrequitedFollowers = data => {
  const output = [];
  for (const personID in data) {
    const followsArray = data[personID].follows;
    for (const follow of followsArray) {
      if (!data[follow].follows.includes(personID)) {
        if (!output.includes(data[personID].name)) {
          output.push(data[personID].name);
        }
      }
    }
  }
};
console.log(unrequitedFollowers(data));