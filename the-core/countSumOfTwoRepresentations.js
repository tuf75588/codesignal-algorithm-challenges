/* Given integers n, l and r, find the number of ways to represent n as a sum of two integers
A and B such that l ≤ A ≤ B ≤ r. */

function countSumOfTwoRepresentations2(n, l, r) {
  let combs = {};
  let count = 0;
  for (let a = l; ; a++) {
    const b = n - a;
    if (b < l || combs.hasOwnProperty(b)) break;
    if (b <= r) {
      combs[a] = b;
    }
  }

  return Object.keys(combs).length;
}
console.log(countSumOfTwoRepresentations2(6, 2, 4));
