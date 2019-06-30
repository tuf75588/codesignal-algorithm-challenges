/* Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move: */

function bishopAndPawn(bishop, pawn) {
  function getChar(code) {
    return code.charCodeAt();
  }
  //find the absolute difference of each piece;
  const code = Math.abs(getChar(bishop[0]) - getChar(pawn[0]));
  //ensure our code matches the absolute difference of each chest piece location
  return code === Math.abs(bishop[1] - pawn[1]);
}

console.log(bishopAndPawn("a1", "c3")); //true
