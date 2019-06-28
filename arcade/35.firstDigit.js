/* Find the leftmost digit that occurs in a given string. */
function firstDigit(inputString) {
  return inputString.match(/\d/)[0];
}

console.log(firstDigit("a a_933"));
