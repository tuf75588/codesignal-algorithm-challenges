/* We define the middle of the array arr as follows:

    if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
    if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.

An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not. */

function isSmooth(arr) {
  //! check if odd or even
  let middlePart = 0;
  if (arr.length % 2 === 0) {
    const middle = arr.length / 2;
    middlePart = arr.slice(middle - 1, middle + 1).reduce((a, b) => a + b);
  } else {
    let oddMiddle = Math.floor(arr.length / 2);
    middlePart = arr.find((ele, i) => i === oddMiddle);
  }
  return middlePart === arr[0] && middlePart === arr[arr.length - 1];
}
console.log(isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12]));
