function commonCharacterCount(s1, s2) {
  //TODO find the number of characters that appear in each, and take the minimum amount of each.
  function getArrayLength(arr, char) {
    return arr.filter((element) => element === char).length;
  }
  let freq1 = [];
  let freq2 = [];
  let a1 = s1.split("");
  let a2 = s2.split("");
  let commons = 0;
  //initiate a for loop to cover the entire alphabet
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(i + "a".charCodeAt());
    freq1.push(getArrayLength(a1, char));
    freq2.push(getArrayLength(a2, char));
  }
  for (let i = 0; i < 26; i++) {
    commons += Math.min(freq1[i], freq2[i]);
  }
  return commons;
}
console.log(commonCharacterCount("aabcc", "adcaa")); // 3
