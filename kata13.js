// Talking Calendar - Date Converter
// Given a date as a string (not a Date object) formatted as YYYY/MM/DD. Create a function to produce a human readable date (December 2nd, 2017).

const talkingCalendar = date => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  date = date.split("/"); // [ '2017', '08', '02' ]
  let month = months[Number.parseInt(date[1]) - 1];

  let day = Number.parseInt(date[2]);
  if ([1, 21, 31].includes(day)) {
    day = day.toString() + "st";
  } else if ([2, 22].includes(day)) {
    day = day.toString() + "nd";
  } else if ([3, 23].includes(day)) {
    day = day.toString() + "rd";
  } else {
    day = day.toString() + "th";
  }

  let year = date[0];

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/31"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));