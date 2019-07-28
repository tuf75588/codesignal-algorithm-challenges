/* Given an integer size, return array of length size filled with 1s.

Example

For size = 4, the output should be
createArray(size) = [1, 1, 1, 1]. */

function createArray(size) {
  return Array.from({ length: size }, (_, i) => (i = 1));
}
createArray(4); // [1,1,1,1]
