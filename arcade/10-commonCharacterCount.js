function commonCharacterCount(s1, s2) {
  //TODO find the number of characters that appear in each, and take the minimum amount of each.
  let freq1 = new Array(26).fill(0);
  let freq2 = [...freq1];
  let commons = 0;

  for (let char of s1) {
    freq1[char.charCodeAt() - "a".charCodeAt()]++;
  }
  for (let char of s2) {
    freq2[char.charCodeAt() - "a".charCodeAt()]++;
  }
  return freq1
    .map((str, indx) => Math.min(str, freq2[indx]))
    .reduce((acc, curr) => {
      return acc + curr;
    });
}
console.log(commonCharacterCount("aabcc", "adcaa")); // 3
