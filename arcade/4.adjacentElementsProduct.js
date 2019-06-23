/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product. */

function adjacentElementsProduct(inputArray) {
  let vals = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    const element = inputArray[i];
    vals.push([element, inputArray[i + 1]]);
  }
  return Math.max(...vals.map((element) => element[0] * element[1]));
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3]); // 21
