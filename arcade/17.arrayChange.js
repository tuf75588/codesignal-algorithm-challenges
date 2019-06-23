function arrayChange(inputArray) {
  let sum = 0;
  let i = 1;
  //! while i < inputArray.length (inputArray.length 3 in first case)
  while (i < inputArray.length) {
    //ensure we go through the entire array.
    if (inputArray[i - 1] >= inputArray[i]) {
      //! if 2 in this case is greater than 1 (true)
      inputArray[i] = inputArray[i] + 1;
      sum++;
    } else {
      i++;
    }
  }
  return sum;
}

console.log(arrayChange([2, 1, 10, 1]));
