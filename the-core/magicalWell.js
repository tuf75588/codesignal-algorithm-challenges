/* You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1.
You have n magic marbles. How much money will you make? */

function magicWell(a, b, n) {
  while (n >= 0) {
    let firstToss = a * b;
    n--;
  }
}
console.log(magicWell(1, 2, 2));
