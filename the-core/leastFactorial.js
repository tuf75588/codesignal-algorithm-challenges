/* Given an integer n, find the minimal k such that

    k = m! (where m! = 1 * 2 * ... * m) for some integer m;
    k >= n.

In other words, find the smallest factorial which is not less than n. */

function leastFactorial(n) {
  function factorial(num) {
    return num === 0 ? 1 : num * factorial(num - 1);
  }
  for (let m = 1; ; m++) {
    if (factorial(m) >= n) return factorial(m);
  }
}
console.log(leastFactorial(17));
//! !5 = 5 * 4 * 3 * 2 *1
