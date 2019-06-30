/* A string is said to be beautiful if each letter of the alphabet appears at most as many times as than the previous letter;
ie: b occurs no more times than a; c occurs no more times than b; etc.

Given a string, check whether it is beautiful. */

function isBeautifulString(inputString) {
  const count = [...inputString].reduce((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  const entries = Object.keys(count).map((key, i) => {
    return count[key];
  });

  for (let i = 1; i < entries.length; i++) {
    if (entries[i] > entries[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isBeautifulString("bbc"));
