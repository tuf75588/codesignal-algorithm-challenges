function absoluteValuesSumMinimization(a) {
  function getTotalDistances(x) {
    let total = 0;
    for (let num of a) {
      total += Math.abs(num - x);
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
console.log(absoluteValuesSumMinimization([2, 4, 7]));
