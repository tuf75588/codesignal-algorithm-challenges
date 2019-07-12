/* Given integers a and b, determine whether the following pseudocode results in an infinite loop */
function isInfiniteProcess(a, b) {
  return a > b ? true : b - (a % 2) == 0 ? false : true;
}
