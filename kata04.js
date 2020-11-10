// Longest Instructors' Names
// You are given a list of instructors and have to determine which instructor has the longest name.

const instructorWithLongestName = instructors => {
  let nameLength = 0;
  let returnValue;
  for (const item of instructors) {
    if (item["name"].length > nameLength) {
      nameLength = item["name"].length;
      returnValue = item;
    }
  }
  return returnValue;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));