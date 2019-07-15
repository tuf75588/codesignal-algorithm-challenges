/* You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

    The first element of the array occupies the first 8 bits of M;
    The second element occupies next 8 bits, and so on.

Return the obtained integer M.

Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example. */

function arrayPacking(a) {
  function pad(str, n) {
    let padding = "0".repeat(n - str.length);
    return padding + str;
  }

  //flip the array
  a.reverse();
  //convert the numbers to binary
  a = a.map((num, i) => pad(num.toString(2), 8));

  //join all the numbers
  let str = parseInt(a.join(""), 2);
  //convert back to a number

  return str;
}

console.log(arrayPacking([24, 85, 0]));
