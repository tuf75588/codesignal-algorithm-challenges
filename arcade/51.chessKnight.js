/* Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it.
The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

 */

function chessKnight(cell) {
  const x = cell.charCodeAt(0) - "a".charCodeAt();
  const y = parseInt(cell.charAt(1)) - 1;

  let moves = 0;
  for (let dx = -2; dx <= 2; dx++) {
    for (let dy = -2; dy <= 2; dy++) {
      if (Math.abs(dx) + Math.abs(dy) === 3) {
        const tempX = x + dx;
        const tempY = y + dy;
        //are tempX and tempY both greater than 0 but less than 8?
        if (0 <= tempX && tempX < 8 && 0 <= tempY && tempY < 8) {
          moves++;
        }
      }
    }
  }
  return moves;
}
console.log(chessKnight("g6"));
