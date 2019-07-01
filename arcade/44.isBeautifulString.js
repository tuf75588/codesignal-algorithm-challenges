/* A string is said to be beautiful if each letter of the alphabet appears at most as many times as than the previous letter;
ie: b occurs no more times than a; c occurs no more times than b; etc.

Given a string, check whether it is beautiful. */

function isBeautifulString(inputString) {
  const letters = [...inputString];
  function count(char) {
    let occurrences = 0;
    for (let letter of inputString) {
      if (letter === char) occurrences++;
    }
    return occurrences;
  }

  let limit = 1e9;
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    let charCount = count(char);
    console.log(charCount > limit);
    if (charCount > limit) {
      return false;
    }
    limit = charCount;
  }
}

console.log(isBeautifulString("aabbb")); //false
