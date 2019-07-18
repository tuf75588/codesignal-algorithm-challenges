/* You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair.
Then return the result as a decimal number. */

function swapAdjacentBits(n) {
  //! start with converting to binary, then running replace function.
  return parseInt(
    ("0".repeat(32 - n.toString(2).length) + n.toString(2)).replace(
      /[01]{2}/g,
      (pair) => pair[1] + pair[0]
    ),
    2
  );
}
console.log(swapAdjacentBits(74));
