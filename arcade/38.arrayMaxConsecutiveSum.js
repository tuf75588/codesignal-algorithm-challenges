/* Given array of integers, find the maximal possible sum of some of its k consecutive elements. */

function arrayMaxConsecutiveSum(inputArray, k) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
    if (i >= k) {
      sum -= inputArray[i - k];
    }
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // 8
