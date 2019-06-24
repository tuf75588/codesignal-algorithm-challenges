/* Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name. */
function variableName(name) {
  //test if name has a number as first
  if (/^\d/.test(name)) return false;
  return /^\w+$/.test(name);
}

console.log(variableName("2w2")); // false.
