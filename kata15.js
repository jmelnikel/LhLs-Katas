// Organizing Instructors - Data Manipulation
// Given a list of instructors, create a single object to organize them based on their course.

const organizeInstructors = instructors => {
  const output = {};
  for (const instructor of instructors) {
    if (!output[instructor["course"]]) {
      output[instructor["course"]] = [instructor["name"]];
    } else {
      output[instructor["course"]].push(instructor["name"]);
    }
  }
  return output;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));