/*
 *Given a string,
 *find out if its characters can be rearranged to form a palindrome.
 */
function palindromeRearranging(inputString) {
  /*
  todo 1.find all permutations (rearrangements)
  todo 2.check permutation sequence for palindrome
  todo 3.return true if there is a match, otherwise return false.
  */

  //* function for finding all permutations.
  const stringCounts = [...inputString].reduce((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  let count = Object.keys(stringCounts).filter((x, i) => {
    return stringCounts[x] % 2 === 1;
  }).length;

  return count < 2 ? true : false;
}
console.log(palindromeRearranging("aabbccc")); // true -- can be rearranged to form 'abba'
