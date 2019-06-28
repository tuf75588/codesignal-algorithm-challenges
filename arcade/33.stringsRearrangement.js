/* Given an array of equal-length strings,
you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character.
Return true if it's possible, and false if not.

Note: You're only rearranging the order of the strings, not the order of the letters within the strings! */
function stringsRearrangement(inputArray) {
  function differByOne(str1, str2) {
    let missmatches = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) missmatches++;
    }
    return missmatches === 1;
  }
  function getPermutations(arr) {
    const fullLength = arr.length;
    let sequence = [];
    let permutations = [];
    function permute(a) {
      for (let i = 0; i < a.length; i++) {
        let str = a[i];
        sequence.push(str);
        if (sequence.length === fullLength) {
          permutations.push([...sequence]);
        } else {
          let remaining = [...a.slice(0, i), ...a.slice(i + 1)];
          permute(remaining);
        }
        sequence.pop();
      }
    }
    permute(arr);
    return permutations;
  }
  let sequences = getPermutations(inputArray);
  for (let sequence of sequences) {
    let possible = true;
    for (let i = 1; i < sequence.length; i++) {
      let thisOne = sequence[i];
      let previousOne = sequence[i - 1];
      if (!differByOne(thisOne, previousOne)) {
        possible = false;
        break;
      }
    }
    if (possible) return true;
  }
  return false;
}

console.log(stringsRearrangement(["ab", "bb", "aa"]));
