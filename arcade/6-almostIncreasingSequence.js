/* Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array. */

function almostIncreasingSequence(sequence) {
  //set up for loop
  //check for first value that is greater the previous
  //once we have greater number, if next number is less, we know it is false.
  for (let i = 1; i < sequence.length; i++) {
    const copy = sequence.slice(0, i);
    console.log(copy);
  }
}
console.log(almostIncreasingSequence([1, 3, 2, 1]));
