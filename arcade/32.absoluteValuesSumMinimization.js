/* Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a.
In other words, find the element x in a, which minimizes the following sum: */

function absoluteValuesSumMinimization(a) {
  function getTotalDistances(x) {
    let total = 0;
    for (let num of a) {
      total += Math.abs(num - x);

      //total = total 2 - 2 //0
      //total = total 4 - 2 //2
      //total = 2 + 7 - 2 // 7
    }
    return total;
  }
  let minDistance = 1e9;
  let bestElement = a[0];
  for (let num of a) {
    let distance = getTotalDistances(num);
    if (distance < minDistance) {
      minDistance = distance;
      bestElement = num;
    }
  }
  return bestElement;
}
console.log(absoluteValuesSumMinimization([2, 4, 7])); //4.
