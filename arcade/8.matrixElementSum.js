function matrixElementSum(matrix) {
  //find the sum of the rooms, except for those that appear below a 0.

  /* TODO
    loop through the matrix
    if we encounter a 0, add that column to the deadlist
    if theres not a 0 (and not on the deadlist) add it to the total amount
  */
  let rows = matrix.length;
  let cols = matrix[0].length;
  let total = 0;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      let element = matrix[i][j];
      if (element === 0) break;
      else total += element;
    }
  }
  return total;
}

console.log(matrixElementSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]));
