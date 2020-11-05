/* eslint-disable func-style */
// Poppin Bottles
// Given the parameters below, write a program so that you can figure out how many total bottles of pop can be redeemed given a customer investment.
// 1) For every two empty bottles, you can get one free (full) bottle of pop.
// 2) For every four bottle caps, you can get one free (full) bottle of pop.
// 3) Each bottle of pop costs $2 to purchase.
let tally = {
  newBottles: process.argv.slice(2) / 2,
  empties: 0,
  caps: 0,
  totalBottles: 0
};

const totalBottles = tally => {
  tally.totalBottles += tally.newBottles;
  if (!tally.newBottles || (tally.empties >= 2 || tally.caps >= 4)) {
    return tally;
  } else {
    drinkBottles(tally);

    if (tally.empties >= 2) convertEmpties(tally);
    if (tally.caps >= 4) convertCaps(tally);

    totalBottles(tally);
    return tally;
  }
};

console.log(totalBottles(tally));

// function declarations will be hoisted
function drinkBottles(tally) {
  tally.empties += tally.newBottles;
  tally.caps += tally.newBottles;
  tally.newBottles = 0;
  return tally;
}

function convertEmpties(tally) {
  let emptiesToConvert = Math.floor(tally.empties / 2);
  tally.empties -= emptiesToConvert * 2;
  tally.newBottles += emptiesToConvert;
  return tally;
}

function convertCaps(tally) {
  let capsToConvert = Math.floor(tally.caps / 4);
  tally.caps -= capsToConvert * 4;
  tally.newBottles += capsToConvert;
  return tally;
}