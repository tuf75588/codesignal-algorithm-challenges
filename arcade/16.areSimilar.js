/* Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar. */

function areSimilar(a, b) {
  let mismatches = [];
  for (let i = 0; i < a.length; i++) {
    //! fill our mismatch array if any numbers between a and b do not exist.
    if (a[i] !== b[i]) {
      mismatches.push(i);
    }
  }
  if (!mismatches.length) return true;
  if (mismatches.length === 2) {
    let [i, j] = mismatches;

    return a[i] === b[j] && a[j] === b[i];
  }
  return false;
}
console.log(
  areSimilar(
    [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
  )
);
