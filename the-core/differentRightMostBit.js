/* Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.

You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists),
counting from right to left.

Return the value of 2position_of_the_found_bit (0-based). */

function differentRightmostBit(n, m) {
  let binOne = [...n.toString(2)].reverse();
  let binTwo = [...m.toString(2)].reverse();
  binOne;
  binTwo;
  return Math.pow(2, binOne.findIndex((x, i) => binTwo[i] !== x));
}
console.log(differentRightmostBit(11, 13));
