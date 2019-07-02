/* Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

*/

function buildPalindrome(st) {
  function isPalindrome(str) {
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
      if (str[i] !== str[length - i - 1]) return false;
    }
    return true;
  }
  let endPart = "";
  for (let i = 0; i < st.length; i++) {
    let char = st[i];
    let lastChar = st[st.length - 1];
  }
  return st + endPart;
}

console.log(buildPalindrome("abcdc"));
