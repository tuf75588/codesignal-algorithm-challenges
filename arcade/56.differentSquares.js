/* Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it. */

function differentSquares(matrix) {
  let different = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let row = [];
}
//matrix[0][0]
//matrix[1][1]

console.log(
  differentSquares([[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]])
);
