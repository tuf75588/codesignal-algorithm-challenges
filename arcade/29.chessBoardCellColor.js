/* Given two cells on the standard chess board, determine whether they have the same color or not. */

function chessBoardCellColor(cell1, cell2) {
  function getCoords(pos) {
    //this function will be responsible for getting the alphabetical part and the numerical part of a chess piece.
    const x = pos.charCodeAt(0) - "A".charCodeAt();
    //y will always be an integer e.g A(1).
    const y = parseInt(pos[1] - 1);
    return [x, y];
  }
  function getPos(x, y) {
    return String.fromCharCode("A".charCodeAt() + x) + (y + 1).toString();
  }
  let board = [];
  let start = 0;
  for (let i = 0; i < 8; i++) {
    let row = [];
    start = 1 - start;
    let square = start;
    for (let j = 0; j < 8; j++) {
      row.push(square);
      square = 1 - square;
    }
    board.push(row);
  }
  let [x, y] = getCoords(cell1);
  let [x2, y2] = getCoords(cell2);
  //are they on the same tile?
  return board[x][y] === board[x2][y2];
}

console.log(chessBoardCellColor("A1", "C3"));
