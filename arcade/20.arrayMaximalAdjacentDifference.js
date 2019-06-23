//! Given an array of integers,
//!find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(inputArray) {
  //get adjacent differences.
  let diffs = [];
  for (let i = 1; i < inputArray.length; i++) {
    let next = inputArray[i];
    let previous = inputArray[i - 1];
    diffs.push(next - previous);
  }
  diffs = diffs.map((x) => Math.abs(x));
  return Math.max(...diffs);
}
console.log(arrayMaximalDifference([2, 4, 1, 0]));
