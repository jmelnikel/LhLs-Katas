// Chess Queen Threat Detector
// Write a function that will detect if two queens on a chess board can attack each other.

const whiteQueen = [0, 0];
const blackQueen = [5, 7];

const generateBoard = (WQ, BQ) => {
  const board = [];

  for (let row = 1; row <= 8; row++) {
    const line = [];
    for (let column = 1; column <= 8; column++) {
      line.push("0");
    }
    board.push(line);
  }

  board[WQ[0]][WQ[1]] = "1";
  board[BQ[0]][BQ[1]] = "1";

  return board;
};

const queenThreat = (WQ, BQ) => {
  const horizontalVertical = WQ[0] === BQ[0] || WQ[1] === BQ[1];
  const diagonal = Math.abs(WQ[0] - BQ[1]) === Math.abs(WQ[1] - BQ[0]);

  if (horizontalVertical || diagonal) return "true";
  return "false";
};

console.log(generateBoard(whiteQueen, blackQueen));
console.log(queenThreat(whiteQueen, blackQueen));