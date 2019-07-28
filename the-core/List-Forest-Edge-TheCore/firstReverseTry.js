/* Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b. */

function firstReverseTry(arr) {
  let [first, last] = [arr[0], arr[arr.length - 1]];
  return arr.length < 2 ? arr : [last, ...arr.slice(1, arr.length - 1), first];
}

console.log(firstReverseTry([1, 2, 3, 4, 5])); // [5,2,3,4,1]
