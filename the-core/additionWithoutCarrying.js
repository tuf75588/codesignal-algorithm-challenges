/* A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

Given two integers, your task is to find the result which the little boy will get.

Note: The boy had learned from this site, so feel free to check it out too if you are not familiar with column addition.

Example

For param1 = 456 and param2 = 1734, the output should be
additionWithoutCarrying(param1, param2) = 1180. */

function additionWithoutCarrying(param1, param2) {
  if (param1 === 0 || param2 === 0) return param1 + param2;
  let weirdSum = 0;
  let power = 1;
  while (param1 || param2) {
    const [digitOne, digitTwo] = [param1, param2].map((x) => x % 10);
    let nextDigit = (digitOne + digitTwo) % 10;
    weirdSum += nextDigit * power;
    power *= 10;
    [param1, param2] = [param1, param2].map((x) => Math.floor(x / 10));
  }
  return weirdSum;
}
console.log(additionWithoutCarrying(456, 1734));
