/* Given a rectangular matrix of characters, add a border of asterisks(*) to it. */

function addBorder(picture) {
  let rows = picture.length;
  let cols = picture[0].length;
  let starRow = "*".repeat(cols + 2);
  let sideBorder = picture.map((row) => "*" + row + "*");
  return [starRow, ...sideBorder, starRow];
}
console.log(addBorder(["abc", "ded"]));
