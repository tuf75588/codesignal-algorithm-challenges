/* Given the string, check if it is a palindrome. */

function checkPalindrome(inputString) {
  //check if the string is the same backwards as it is forwards.
  return (
    inputString
      .split("")
      .reverse()
      .join("") === inputString
  );
}
