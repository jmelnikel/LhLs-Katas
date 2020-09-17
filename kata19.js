// Quuen Threat Detector
// Write a function that will detect if two queens on a chess board can attack each other.

let whiteQueen = [0, 0];
let blackQueen = [5, 7];

const generateBoard = function(WQ, BQ) {
  let board = [];
  
  for (let row = 1; row <= 8; row++) {
    let line = []
    for (let column = 1; column <= 8; column++) {
      line.push("0");
    };
    board.push(line);
  };
  
  board[WQ[0]][WQ[1]] = "1"
  board[BQ[0]][BQ[1]] = "1"
  
  return board;
};

const queenThreat = function(WQ, BQ) {
  let horizontalVertical = WQ[0] === BQ[0] || WQ[1] === BQ[1];
  let diagonal = Math.abs(WQ[0] - BQ[1]) === Math.abs(WQ[1] - BQ[0])

  if (horizontalVertical || diagonal) {
    return "true"
  }
  return "false"
};

console.log(generateBoard(whiteQueen, blackQueen));
console.log(queenThreat(whiteQueen, blackQueen));