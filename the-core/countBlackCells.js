/* Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

    A cell is painted black if it has at least one point in common with the diagonal;
    Otherwise, a cell is painted white.

Count the number of cells painted black. */

function countBlackCells(n, m) {
  if (n > m) [n, m] = [m, n];
  let shaded = n + m - 1;
  for (let i = 1; i < m; i++) {
    if (((n * i) / m) % 1 === 0) shaded++;
  }
  return shaded;
}

console.log(countBlackCells(3, 4)); // 6
