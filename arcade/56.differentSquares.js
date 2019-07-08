/* Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it. */

function differentSquares(matrix) {
  let squares = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    let square = [];
    for (let j = 0; j < matrix[0].length - 1; j++) {
      let square = [
        [matrix[i][j], matrix[i][j + 1]],
        [matrix[i + 1][j], matrix[i + 1][j + 1]]
      ].join("");
      squares.push(square);
    }
  }

  squares = [...new Set(squares)];
  return squares.length;
}
//matrix[0][0]
//matrix[1][1]

console.log(
  differentSquares([[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]])
);
