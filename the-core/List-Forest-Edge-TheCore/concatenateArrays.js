/* Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b. */

function concatenateArrays(a, b) {
  return [...a, ...b];
}
console.log(concatenateArrays([1, 2, 3], [4, 5, 6])); // [1,2,3,4,5,6]
