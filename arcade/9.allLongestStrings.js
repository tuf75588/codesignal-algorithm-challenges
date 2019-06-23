/* given an array of strings, return another array with all of its longest strings. */

function allLongestStrings(inputArray) {
  let max = Math.max(...inputArray.map((x) => x.length));
  return inputArray.filter((str) => str.length === max);
}

allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]); // ['aba', 'vcd', 'aba']
