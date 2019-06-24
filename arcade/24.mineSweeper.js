/* In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells.
Starting off with some arrangement of mines we want to create a Minesweeper game setup. */

/*  */

function mineSweeper(matrix) {
  const rowLength = matrix[0].length;
  const colHeight = matrix.length;
  let minefield = [];
  for (let x = 0; x < colHeight; x++) {
    let row = [];
    for (let y = 0; y < rowLength; y++) {
      row.push(0);
    }
    minefield.push(row);
  }

  for (let x = 0; x < colHeight; x++) {
    for (let y = 0; y < rowLength; y++) {
      //if there's a mine
      if (matrix[x][y]) {
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx !== 0 || dy !== 0) {
              let tempX = x + dx;
              let tempY = y + dy;

              if (tempX in matrix && tempY in matrix[0]) {
                minefield[tempX][tempY]++;
              }
            }
          }
        }
      }
    }
  }
  return minefield;
}

console.log(
  mineSweeper([
    [true, false],
    [true, false],
    [false, true],
    [false, false],
    [false, false]
  ])
);
