/* You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair.
Then return the result as a decimal number. */

function swapAdjacentBits(n) {
  return parseInt(n.toString(2) + n.toString(2));
}
console.log(swapAdjacentBits(1));
