// Number Guesser
// Write a function where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

// Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.

let prompt = require("prompt-sync")();

let numberofGuesses = 0;
let previousGuesses = [];

let guessNumber = function(randomNumber, numberofGuesses) {
  let stringAnswer = prompt("Guess a number between 1 and 100 or 'Exit' to exit: ");
  if (stringAnswer === "Exit") {
    return console.log("Goodbye");
  }

  let answer = parseInt(stringAnswer);
  if (!Number.isInteger(answer)) {
    console.log(`Your guess of ${stringAnswer} is not a number.`);
  }

  if (randomNumber === answer) {
    numberofGuesses ++;
    return console.log(`Congratulations, you guessed it! ${answer} is the number. It took you ${numberofGuesses} tries.`);
  }
  if (previousGuesses.includes(answer)) {
    console.log(`Your already tried ${answer}.`);
  } else {
    previousGuesses.push(answer);
    numberofGuesses ++;
    if (randomNumber < answer) {
      console.log(`Your guess of ${answer} is too high.`);
    }
    if (randomNumber > answer) {
      console.log(`Your guess of ${answer} is too low.`);
    }
  }
  guessNumber(randomNumber, numberofGuesses);
};
  
const randomNumber = Math.ceil((Math.random() * 100)); // number
guessNumber(randomNumber, numberofGuesses);