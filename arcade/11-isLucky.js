/* Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. */

//Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
  //! find the given length of the string
  //! cut the string in half to get first part/second part.
  let str = String(n);
  function add(a, b) {
    return parseInt(a) + parseInt(b);
  }
  let leftPart = [...str.slice(0, str.length / 2)].reduce(add);
  let rightPart = [...str.slice(str.length / 2)].reduce(add);
  return leftPart === rightPart;
}
console.log(isLucky(261534)); // false
