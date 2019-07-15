/* Reverse the order of the bits in a given integer. */

function mirrorBits(a) {
  let num = a
    .toString(2)
    .split("")
    .reverse()
    .join("");
  return parseInt(num, 2);
}
console.log(mirrorBits(97));
