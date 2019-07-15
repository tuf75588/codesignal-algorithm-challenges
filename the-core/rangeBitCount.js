/* You are given two numbers a and b where 0 ≤ a ≤ b.
Imagine you construct an array of all the integers from a to b inclusive.
You need to count the number of 1s in the binary representations of all the numbers in the array. */

function rangeBitCount(a, b) {
  let count = 0;
  let bin = [];
  for (let i = a; i <= b; i++) {
    let element = i.toString(2);
    bin.push(...element.split(""));
  }
  return bin.filter((num) => num !== "0").length;
}

console.log(rangeBitCount(2, 7));
