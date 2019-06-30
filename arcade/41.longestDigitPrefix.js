/* Given a string, output its longest prefix which contains only digits. */
function longestDigitsPrefix(inputString) {
  const match = inputString.match(/^\d+/g);
  return match ? match[0] : "";
}

console.log(longestDigitsPrefix("12abc34"));
