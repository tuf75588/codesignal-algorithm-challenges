/* Check if all digits of the given integer are even.  */

function evenDigitsOnly(n) {
  return n
    .toString()
    .split("")
    .every((x) => parseInt(x) % 2 === 0);
}

console.log(evenDigitsOnly(4226888)); // true
