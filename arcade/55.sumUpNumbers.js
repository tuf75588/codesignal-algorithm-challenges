/* CodeMaster has just returned from shopping.
He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items.
Since Ratiorg is a bot he is definitely going to automate it,
so he needs a program that sums up all the numbers which appear in the given input. */

function sumUpNumbers(inputString) {
  let re = /\d+/gi;
  let matches = inputString.match(re);
  console.log(matches);
}
console.log(
  sumUpNumbers("there are some (12) digits 5566 in this 770 string 239")
);
