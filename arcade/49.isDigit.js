/* Determine if the given character is a digit or not */

function isDigit(symbol) {
  return !isNaN(parseInt(symbol));
}

console.log(isDigit("@")); //false.
