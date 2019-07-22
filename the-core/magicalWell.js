/* You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1.
You have n magic marbles. How much money will you make? */



function magicWell(a, b, n) {
  return n > 0 ? a * b + magicWell(a + 1, b + 1, n - 1) : 0;
}




function magicWell2(a, b, n) {
  return Array.from({ length: n }, (_, i) => (a + i) * (b + i))
}


function magicWell1(a, b, n) {
  //initialize a total count variable which we will eventually return.
  let total = 0;
  for (let i = 0; i < n; i++) {
    // first toss.
    total += a * b;
    // on every next iteration, increment a and b, and perform same operation.
    a++
    b++:

  }
  return total;
}
console.log(magicWell(1, 1, 1)); //8
