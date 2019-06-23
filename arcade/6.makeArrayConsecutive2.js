/* Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect,
he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
 Help him figure out the minimum number of additional statues needed. */

function makeArrayConsecutive2(inputArray) {
  let min = Math.min(...inputArray);
  let max = Math.max(...inputArray);
  let missing = 0;
  for (let i = min; i <= max; i++) {
    if (inputArray.indexOf(i) < 0) missing++;
  }
  return missing;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
