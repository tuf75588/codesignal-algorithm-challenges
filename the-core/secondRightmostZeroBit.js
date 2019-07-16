/* Presented with the integer n,
find the 0-based position of the second rightmost zero bit in its binary representation
(it is guaranteed that such a bit exists), counting from right to left. */
function secondRightmostZeroBit(n) {
  return 2 ** (n.toString(2).match(/01*01*$/)[0].length - 1);
}
console.log(secondRightmostZeroBit(37));
