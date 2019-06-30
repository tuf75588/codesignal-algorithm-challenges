/* Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number. */

function digitDegree(n) {
  let degree = 0;

  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((total, curr) => total + parseInt(curr), 0);

    degree++;
  }

  return degree;
}

console.log(digitDegree(5)); // 0
