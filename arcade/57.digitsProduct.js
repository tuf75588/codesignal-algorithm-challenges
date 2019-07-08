/* Given an integer product, find the smallest positive (i.e. greater than 0)
integer the product of whose digits is equal to product.
If there is no such integer, return -1 instead. */

function digitsProduct(product) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  let ranges = [];
  for (let i = 1; i < product; i++) {
    ranges.push(i);
  }
  let productSum = [];
}
console.log(digitsProduct(12));
