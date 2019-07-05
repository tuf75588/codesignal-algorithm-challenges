/* Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number. */
function deleteDigit(n) {
  let numbers = [];
  let num = n.toString();
  let max = 0;
  console.log(num.slice(0, 0), num.slice(1));
  for (let i = 0; i < num.length; i++) {
    let newNum = num.slice(0, i) + num.slice(i + 1);
    newNum;
    if (newNum > max) max = newNum;
  }
  return parseInt(max);
}

console.log(deleteDigit(1001)); //152
