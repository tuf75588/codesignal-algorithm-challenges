/* Given array of integers, find the maximal possible sum of some of its k consecutive elements. */

function arrayMaxConsecutiveSum(inputArray, k) {
  let vals = [];
  let check = inputArray
    .map((element, index, a) => a[k] + element)
    .filter((num) => !isNaN(num));
  check;
  return Math.max(...check);
}

console.log(arrayMaxConsecutiveSum([1, 3, 2, 4], 3));
