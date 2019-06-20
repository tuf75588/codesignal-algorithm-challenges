/* Some people are standing in a row in a park.
There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
People can be very tall! */

function sortByHeight(a) {
  //TODO remove negative values from array
  //TODO sort the array
  //TODO reinsert -1 values in appropriate indices.
  let sorted = a.filter((num) => num !== -1).sort((a, b) => a - b);
  return a.map((x) => (x === -1 ? -1 : sorted.shift()));
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
