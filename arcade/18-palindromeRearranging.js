function palindromeRearranging(inputString) {
  function isPalindrome(str) {
    return [...str].reverse().join("") === inputString;
  }
  /*
  todo 1.find all permutations (rearrangements)
  todo 2.check permutation sequence for palindrome
  todo 3.return true if there is a match, otherwise return false.
  */

  //* function for finding all permutations.
  function getPermutations(str) {
    let permutations = [];
    //! build up one word at a time.
    let word = [];
    const full = str.length;

    function permute(s) {
      for (let i = 0; i < s.length; i++) {
        let char = s[i];
        word.push(char);
        if (word.length === full) {
          permutations.push(word.join(""));
        } else {
          permute(s.lice(0, i) + s.slice(i + 1));
        }
      }
    }
    permute(str);
    return permutations;
  }
  let perms = getPermutations(inputString);
  for (let perm of perms) {
    if (isPalindrome(perm)) return true;
  }

  return false;
}
